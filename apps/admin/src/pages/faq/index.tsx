import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { CategoryType, ResponseInterface, faqApi } from '@ceos-fe/utils';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Plus } from '@admin/assets/Plus';
import { SelectButton } from '../../../../../packages/ui/src/components/SelectButton/index';
import Layout from '@admin/components/layout';

const faqList = {
  categoryFaqList: [
    {
      category: 'RECRUIT',
      question: '리쿠르팅은 언제인가요?',
      answer:
        'CEOS 18기 리크루팅이 2023 8월 중순 경에 예정되어 있습니다. 자세한 사항은 학교 에브리타임 게시판 홍보글, 페이스북, 인스타그램에서 확인해주세요.',
    },
    {
      category: 'RECRUIT',
      question: '지원 자격이 어떻게 되나요?',
      answer:
        '창업에 열정이 있는 신촌 지역 4개교 (연세대학교, 서강대학교, 이화여자대학교, 홍익대학교) 재학생 및 졸업생이라면 누구나 가능합니다.',
    },
    {
      category: 'RECRUIT',
      question: '창업 관련 프로젝트 경험이 없어도 지원이 가능한가요?',
      answer:
        '창업 관련 프로젝트 경험이 필수 지원 요건은 아니지만, 창업 외 다른 프로젝트라도 본인이 맡았던 부분과 활동을 통해 배운 점에 대해서 말씀해 주시면 됩니다.',
    },
    {
      category: 'RECRUIT',
      question: '면접은 어떤 방식으로 진행되나요?',
      answer: '모든 면접은 온라인으로 진행됩니다.',
    },
    {
      category: 'ACTIVITY',
      question: '활동은 전면 비대면으로 진행되나요?',
      answer:
        'OT 및 대부분의 세션들은 비대면으로 진행 예정이나, 3주차 세션 및 해커톤과 데모데이는 대면으로 진행됩니다. 스터디는 파트별 온/오프라인 여부가 상이하니 파트별 스터디 커리큘럼을 확인해주세요.',
    },
    {
      category: 'ACTIVITY',
      question: '학기 중에 하기에 무리가 없을까요? 휴학생만 가능한가요?',
      answer:
        '시험 기간에는 공식적인 세션이나 스터디는 진행하지 않지만, ​재학 여부와 상관없이 시간 투자를 많이 할 수 있는 분을 필요로 하고 있습니다.',
    },
    {
      category: 'ACTIVITY',
      question: '세션은 언제, 어디서 진행되나요?',
      answer:
        '오프라인 세션의 경우, 매주 수요일 오후 7:00부터 약 2시간 동안 신촌에서 진행됩니다. 온라인 세션의 경우, 매주 수요일 오후 7:00부터 약 2-3시간 진행됩니다.',
    },
    {
      category: 'PART',
      question: '기획 : 개발이나 디자인에 대해서 몰라도 참여 가능한가요?',
      answer:
        '가능합니다. 개발과 디자인에 관련해서 필요한 지식은 정기 세션과 스터디를 통해 배워 가실 수 있습니다.',
    },
    {
      category: 'PART',
      question: '디자인 : UI / UX 포트폴리오가 없는데 지원이 가능한가요?',
      answer:
        '​우선적으로 UI/UX 프로젝트를 보지만, 없다면 그래픽 작업하신 내용을 준비해 주시면 도움이 됩니다.',
    },
    {
      category: 'PART',
      question:
        '개발 : 지원하려면 어느 정도의 개발 관련 지식이나 경험이 필요한가요?',
      answer:
        '기초적인 프로그래밍 능력만 있다면 가능합니다. 웹/앱 개발 경험이 없어도 개발 스터디에 잘 참여해 주신다면 충분히 가능합니다.',
    },
  ],
};

type FaqCategoryKorType =
  | '리크루팅 관련 질문'
  | '활동 관련 질문'
  | '파트별 질문';

const CATEGORY_MAP: Record<string, CategoryType> = {
  '리크루팅 관련 질문': 'RECRUIT',
  '활동 관련 질문': 'ACTIVITY',
  '파트별 질문': 'PART',
};

interface FaqResponse {
  categoryFaqList: {
    id: number;
    category: CategoryType;
    question: string;
    answer: string;
  };
}
interface FaqListItemInterface {
  category: CategoryType;
  question: string;
  answer: string;
}
interface FaqInterface {
  category: FaqCategoryKorType;
  faqList: FaqListItemInterface[];
}

export default function Faq() {
  const { data, isLoading, isSuccess } = useQuery<
    ResponseInterface<FaqResponse>
  >(['admin', 'faq'], () => faqApi.GET_FAQ('RECRUIT'));

  console.log(data);

  const { control, watch, register } = useForm<FaqInterface>({
    defaultValues: {
      category: '리크루팅 관련 질문',
      faqList: [],
    },
  });
  const { fields, replace, append, remove } = useFieldArray({
    control,
    name: 'faqList',
  });

  useEffect(() => {
    replace(
      faqList.categoryFaqList.filter(
        (faq) => faq.category === CATEGORY_MAP[watch('category')],
      ) as FaqListItemInterface[],
    );
  }, [watch('category')]);

  const handleAppendQuestion = () => {
    append({
      category: CATEGORY_MAP[watch('category')],
      question: '',
      answer: '',
    });
  };

  const handleSaveQuestion = (idx: number) => {
    console.log(watch(`faqList.${idx}`));
    // TODO: 질문 추가 API 연동
  };

  const handleRemoveQuestion = (idx: number) => {
    remove(idx);
    // TODO: 질문 삭제 API 연동
  };

  return (
    <Layout>
      <Flex direction="column" align="flex-start">
        <Text webTypo="Heading2" color="Black">
          FAQ
        </Text>
        <Text webTypo="Body3" color="Gray5" style={{ marginTop: '12px' }}>
          페이지에 게재되는 질의응답 내용을 관리합니다.
        </Text>

        <Flex direction="column" webGap={24} style={{ marginTop: '48px' }}>
          <Flex webGap={24}>
            <SelectButton
              variant="admin"
              value="리크루팅 관련 질문"
              webWidth={328}
              {...register('category')}
            />
            <SelectButton
              variant="admin"
              value="활동 관련 질문"
              webWidth={328}
              {...register('category')}
            />
            <SelectButton
              variant="admin"
              value="파트별 질문"
              webWidth={328}
              {...register('category')}
            />
          </Flex>

          {fields.map((faq, idx) => (
            <Flex key={faq.id} direction="column" webGap={16}>
              <Flex webGap={8} align="flex-end">
                <TextField
                  {...register(`faqList.${idx}.question`)}
                  label="질문"
                  width={902}
                  isAdmin
                />
                <Button
                  variant="admin_stroke"
                  webWidth={57}
                  onClick={() => handleSaveQuestion(idx)}
                  style={{ marginBottom: '4px' }}
                >
                  저장
                </Button>
                <Button
                  variant="admin_navy"
                  webWidth={57}
                  onClick={() => handleRemoveQuestion(idx)}
                  style={{ marginBottom: '4px' }}
                >
                  삭제
                </Button>
              </Flex>
              <TextField
                {...register(`faqList.${idx}.answer`)}
                multiline
                label="답변"
                width={1032}
                height={112}
                isAdmin
              />
            </Flex>
          ))}

          <Button
            variant="admin_stroke"
            webWidth={128}
            onClick={handleAppendQuestion}
          >
            <Flex webGap={4}>
              <Plus />
              질문 추가하기
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['admin', 'faq'], () =>
      faqApi.GET_FAQ('RECRUIT'),
    );

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};
