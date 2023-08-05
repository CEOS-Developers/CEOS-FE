import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  CategoryType,
  FaqListItemInterface,
  adminFaqApi,
} from '@ceos-fe/utils';
import { Button, Flex, Text, TextField, SelectButton } from '@ceos-fe/ui';
import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Plus } from '@admin/assets/Plus';
import { AxiosError } from 'axios';
import { useAlert } from '../../hooks/useAlert';
import { Alert } from '@admin/components/Alert';

type FaqCategoryKorType =
  | '리크루팅 관련 질문'
  | '활동 관련 질문'
  | '파트별 질문';

const CATEGORY_MAP: Record<string, CategoryType> = {
  '리크루팅 관련 질문': 'RECRUIT',
  '활동 관련 질문': 'ACTIVITY',
  '파트별 질문': 'PART',
};

interface FaqInterface {
  category: FaqCategoryKorType;
  faqList: FaqListItemInterface[];
}
interface FaqResponse {
  categoryFaqList: FaqListItemInterface[];
}

export default function Faq() {
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

  const { isOpen, type, openAlert } = useAlert();

  const { data, isFetching, isSuccess } = useQuery<FaqResponse, AxiosError>(
    ['admin', 'faq', watch('category')],
    () => adminFaqApi.GET_FAQ(CATEGORY_MAP[watch('category')]),
  );
  const { mutate: postFaqMutation } = useMutation<
    FaqListItemInterface,
    AxiosError,
    FaqListItemInterface
  >(adminFaqApi.POST_FAQ, {
    onSuccess: () => openAlert('success'),
    onError: () => openAlert('error'),
  });
  const { mutate: patchFaqMutation } = useMutation<
    FaqListItemInterface,
    AxiosError,
    FaqListItemInterface
  >(adminFaqApi.PATCH_FAQ, {
    onSuccess: () => openAlert('success'),
    onError: () => openAlert('error'),
  });
  const { mutate: deleteFaqMutation } = useMutation<
    FaqListItemInterface,
    AxiosError,
    FaqListItemInterface
  >(adminFaqApi.DELETE_FAQ, {
    onSuccess: () => openAlert('success'),
    onError: () => openAlert('error'),
  });

  useEffect(() => {
    if (!isFetching && isSuccess) {
      replace(data.categoryFaqList);
    }
  }, [isFetching, isSuccess]);

  const handleAppendQuestion = () => {
    append({
      id: -1,
      category: CATEGORY_MAP[watch('category')],
      question: '',
      answer: '',
    });
  };

  const handleSaveQuestion = (idx: number) => {
    const question = watch(`faqList.${idx}`);
    if (question.id === -1) {
      postFaqMutation(question);
    } else {
      patchFaqMutation(question);
    }
  };

  const handleRemoveQuestion = (idx: number) => {
    const question = watch(`faqList.${idx}`);
    if (question.id !== -1) {
      deleteFaqMutation(question);
    }
    remove(idx);
  };

  return (
    <>
      <Flex direction="column" align="start">
        <Text webTypo="Heading2" paletteColor="Black">
          FAQ
        </Text>
        <Text
          webTypo="Body3"
          paletteColor="Gray5"
          style={{ marginTop: '12px' }}
        >
          페이지에 게재되는 질의응답 내용을 관리합니다.
        </Text>
      </Flex>

      <Flex
        direction="column"
        webGap={24}
        mobileGap={24}
        style={{ marginTop: '48px' }}
      >
        <Flex webGap={24} mobileGap={24}>
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
          <Flex key={faq.id} direction="column" webGap={16} mobileGap={16}>
            <Flex webGap={8} mobileGap={8} align="flex-end">
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

        <Flex>
          <Button
            variant="admin_stroke"
            webWidth={128}
            onClick={handleAppendQuestion}
          >
            <Flex webGap={4} mobileGap={4}>
              <Plus />
              질문 추가하기
            </Flex>
          </Button>
        </Flex>
      </Flex>
      {isOpen && (
        <Alert
          type={type}
          message={
            type === 'success' ? '요청에 성공했습니다' : '요청에 실패했습니다'
          }
        />
      )}
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['admin', 'faq', 'RECRUIT'], () =>
      adminFaqApi.GET_FAQ('RECRUIT'),
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
