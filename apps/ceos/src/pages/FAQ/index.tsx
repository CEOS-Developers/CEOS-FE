import { Desktop, Flex, KeyOfPalette, Mobile, Text } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { faqApi } from '../../../../../packages/utils/src/apis/ceos/faqApi';
import { useEffect } from 'react';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { ResponseInterface } from '@ceos-fe/utils';
import { FAQIcon } from '@ceos/assets/FAQIcon';
import { FAQBox } from '@ceos/components/FAQBox';
import styled from '@emotion/styled';

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
    recruitData: ResponseInterface<ActivityResponse>;
    activityData: ResponseInterface<ActivityResponse>;
    partData: ResponseInterface<ActivityResponse>;
  }>(['ceos', 'faq'], async () => {
    const recruitData = await faqApi.GET_FAQ({ category: 'RECRUIT' });
    const activityData = await faqApi.GET_FAQ({ category: 'ACTIVITY' });
    const partData = await faqApi.GET_FAQ({ category: 'PART' });

    return { recruitData, activityData, partData };
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  let questionColor: KeyOfPalette[] = ['Green', 'Skyblue', 'Yellow'];

  return (
    <Flex direction="column">
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
        {data?.recruitData.data.categoryFaqList.map((faq, idx) => {
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
        <Flex width={220} justify="space-between" margin="80px 0 0 0">
          <FAQIcon />
          <Text webTypo="Heading3" mobileTypo="Heading3">
            활동 관련 질문
          </Text>
          <FAQIcon />
        </Flex>
        {data?.activityData.data.categoryFaqList.map((faq, idx) => {
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
                    (data?.recruitData.data.categoryFaqList.length + idx) % 3
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
        <Flex width={220} justify="space-between" margin="80px 0 0 0">
          <FAQIcon />
          <Text webTypo="Heading3" mobileTypo="Heading3">
            파트별 관련 질문
          </Text>
          <FAQIcon />
        </Flex>
        {data?.partData.data.categoryFaqList.map((faq, idx) => {
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
                    (data?.recruitData.data.categoryFaqList.length +
                      data?.activityData.data.categoryFaqList.length +
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
        <Desktop></Desktop>
        <Mobile>
          <Text webTypo="Label3" paletteColor="Gray3" margin="36px 0 30px 0">
            © 2016-2023 Ceos ALL RIGHTS RESERVED.
          </Text>
        </Mobile>
      </CustomFlex>
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

export const TopMargin = styled.div`
  height: 80px;
  @media (max-width: 1023px) {
    height: 36px;
  }
`;

export default FAQ;
