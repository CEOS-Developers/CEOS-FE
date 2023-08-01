import { Flex, KeyOfPalette, Text } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { faqApi } from '@ceos-fe/utils';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { FAQIcon } from '@ceos/assets/FAQIcon';
import { FAQBox } from '@ceos/components/FAQBox';
import styled from '@emotion/styled';
import Footer from '@ceos/components/Footer';

interface ActivityResponse {
  categoryFaqList: {
    id: number;
    question: string;
    answer: string;
    category: string;
  }[];
}

const FAQ = () => {
  const { data, isLoading, isSuccess } = useQuery<{
    recruitData: ActivityResponse;
    activityData: ActivityResponse;
    partData: ActivityResponse;
  }>(['ceos', 'faq'], async () => {
    const recruitData = await faqApi.GET_FAQ({ category: 'RECRUIT' });
    const activityData = await faqApi.GET_FAQ({ category: 'ACTIVITY' });
    const partData = await faqApi.GET_FAQ({ category: 'PART' });

    return { recruitData, activityData, partData };
  });

  let questionColor: KeyOfPalette[] = ['Green', 'Skyblue', 'Yellow'];

  const leftBtn = {
    title: '이전 활동들이 궁금하다면',
    content: ['CEOS 프로젝트', '보러가기'],
    link: '/project',
  };
  const rightBtn = {
    title: 'CEOS에 참여하고 싶다면',
    content: ['CEOS 18기', '지원하기'],
    link: '/recruit',
  };

  return (
    <Flex direction="column" padding="0 22px" data-section="White">
      <Title
        title="FAQ"
        explain={['ceos에 대해 자주 묻는 질문들에', '대한 답변입니다.']}
      />
      <TopMargin />
      <CustomFlex width={680} direction="column" webGap={36}>
        <Flex width={220} justify="space-between">
          <FAQIcon />
          <Text webTypo="Heading3" mobileTypo="Heading3">
            리쿠르팅 관련 질문
          </Text>
          <FAQIcon />
        </Flex>
        {data?.recruitData.categoryFaqList.map((faq, idx) => {
          return (
            <CustomFlex
              width={680}
              direction="column"
              webGap={20}
              key={`faq_recruit_${idx}`}
            >
              <FAQBox color={questionColor[idx % 3]} isAnswer={false}>
                {faq.question}
              </FAQBox>
              <FAQBox isAnswer={true}>{faq.answer}</FAQBox>
            </CustomFlex>
          );
        })}
      </CustomFlex>
      <CustomFlex width={680} direction="column" webGap={36}>
        <FaqTitleBox>
          <FAQIcon />
          <Text webTypo="Heading3" mobileTypo="Heading3">
            활동 관련 질문
          </Text>
          <FAQIcon />
        </FaqTitleBox>
        {data?.activityData.categoryFaqList.map((faq, idx) => {
          return (
            <CustomFlex
              width={680}
              direction="column"
              webGap={20}
              key={`faq_activity_${idx}`}
            >
              <FAQBox
                color={
                  questionColor[
                    (data?.recruitData.categoryFaqList.length + idx) % 3
                  ]
                }
                isAnswer={false}
              >
                {faq.question}
              </FAQBox>
              <FAQBox isAnswer={true}>{faq.answer}</FAQBox>
            </CustomFlex>
          );
        })}
      </CustomFlex>
      <CustomFlex width={680} direction="column" webGap={36}>
        <FaqTitleBox>
          <FAQIcon />
          <Text webTypo="Heading3" mobileTypo="Heading3">
            파트별 관련 질문
          </Text>
          <FAQIcon />
        </FaqTitleBox>
        {data?.partData.categoryFaqList.map((faq, idx) => {
          return (
            <CustomFlex
              width={680}
              direction="column"
              webGap={20}
              key={`faq_part_${idx}`}
            >
              <FAQBox
                color={
                  questionColor[
                    (data?.recruitData.categoryFaqList.length +
                      data?.activityData.categoryFaqList.length +
                      idx) %
                      3
                  ]
                }
                isAnswer={false}
              >
                {faq.question}
              </FAQBox>
              <FAQBox isAnswer={true}>{faq.answer}</FAQBox>
            </CustomFlex>
          );
        })}
      </CustomFlex>
      <BottomMargin />
      <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
    </Flex>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'faq'], () => {
      faqApi.GET_FAQ({ category: 'RECRUIT' });
      faqApi.GET_FAQ({ category: 'ACTIVITY' });
      faqApi.GET_FAQ({ category: 'PART' });
    });

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const CustomFlex = styled(Flex)`
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const FaqTitleBox = styled(Flex)`
  width: 220px;
  justify-content: space-between;
  margin: 80px 0 0 0;

  @media (max-width: 1023px) {
    margin: 60px 0 0 0;
  }
`;

export const TopMargin = styled.div`
  height: 80px;
  @media (max-width: 1023px) {
    height: 36px;
  }
`;

export const BottomMargin = styled.div`
  height: 100px;
`;

export default FAQ;
