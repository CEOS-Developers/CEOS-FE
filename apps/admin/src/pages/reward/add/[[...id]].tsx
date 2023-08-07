import { useRouter } from 'next/router';
import { Button, Flex, Space, Text, TextField } from '@ceos-fe/ui';
import { useForm, useFieldArray } from 'react-hook-form';
import { BackButton } from '@admin/components/Common/BackButton';
import { useMutation } from '@tanstack/react-query';
import { adminRewardApi, RewardDTO } from '@ceos-fe/utils';
import { useEffect } from 'react';
import { Plus } from '@admin/assets/Plus';
import { css } from '@emotion/react';

export default function AddReward() {
  const router = useRouter();
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'content',
  });

  // 수정 시 정보 가져오기 api
  const getRewardMutation = useMutation(adminRewardApi.GET_ONE_REWARD, {
    onSuccess: async (data: RewardDTO) => {
      setValue('generation', data.generation);
      setValue('startDate', data.startDate);
      data.awards.map((_, index) => {
        update(index, { content: data.awards[index]?.content });
      });
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  // 수정 시 value set
  useEffect(() => {
    if (router.query.id) {
      getRewardMutation.mutate(Number(router.query.id));
    }
  }, [router.query.id]);

  // 수상 내역 생성 api
  const postRewardCreateMutation = useMutation(adminRewardApi.POST_REWARD, {
    onSuccess: () => {
      alert('추가 완료');
      router.push('/reward');
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  // 수상 내역 수정 api
  const putRewardCreateMutation = useMutation(adminRewardApi.PUT_REWARD, {
    onSuccess: () => {
      alert('수정 완료');
      router.push('/reward');
    },
  });

  const onSubmit = (data: any) => {
    console.log({
      ...data,
      content: Array.isArray(data?.content)
        ? data?.content.map((item: { content: string }) => item?.content)
        : data?.content,
    });
    if (router.query.id) {
      putRewardCreateMutation.mutate({
        id: Number(router.query.id),
        payload: {
          ...data,
          content: Array.isArray(data?.content)
            ? data?.content.map((item: { content: string }) => item?.content)
            : data?.content,
        },
      });
    } else {
      postRewardCreateMutation.mutate({
        payload: {
          ...data,
          content: Array.isArray(data?.content)
            ? data?.content.map((item: { content: string }) => item?.content)
            : data?.content,
        },
      });
    }
  };

  return (
    <Flex width={1023} justify="flex-start">
      <Flex width={680} direction="column" align="flex-start">
        <BackButton
          title={router.query.id ? '이력 수정' : '이력 추가'}
          onClick={() => router.back()}
        />

        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          webGap={24}
          mobileGap={24}
          margin="48px 0 0 0"
        >
          <Flex
            direction="row"
            align="flex-start"
            justify="flex-start"
            webGap={24}
            mobileGap={24}
          >
            <TextField
              type="number"
              label="활동 기수"
              placeholder="내용을 입력하세요."
              isAdmin
              {...register('generation', {
                required: true,
              })}
            />
            <TextField
              label="활동 기간"
              placeholder="내용을 입력하세요."
              isAdmin
              {...register('startDate', {
                required: true,
              })}
            />
          </Flex>
        </Flex>
        <Space
          height={24}
          css={css`
            flex-shrink: 0;
          `}
        />
        <Text webTypo="Heading4">기수 내 수상 이력</Text>
        <Space
          height={24}
          css={css`
            flex-shrink: 0;
          `}
        />
        <Text webTypo="Label3">수상 이력</Text>
        <Space
          height={8}
          css={css`
            flex-shrink: 0;
          `}
        />
        <Flex direction="column" webGap={16} mobileGap={16}>
          {fields.map((field, index) => (
            <Flex
              key={field.id}
              align="center"
              justify="flex-start"
              webGap={8}
              mobileGap={8}
            >
              <TextField
                placeholder="내용을 입력하세요."
                isAdmin
                width={615}
                {...register(`content.${index}.content.`, {
                  required: true,
                })}
                defaultValue=""
              />
              <div>
                <Button
                  variant="admin_stroke"
                  webWidth={56}
                  mobileWidth={56}
                  onClick={() => remove(index)}
                >
                  삭제
                </Button>
                <Space
                  height={4}
                  css={css`
                    flex-shrink: 0;
                  `}
                />
              </div>
            </Flex>
          ))}
        </Flex>
        <Space
          height={16}
          css={css`
            flex-shrink: 0;
          `}
        />
        <Flex>
          <Button
            variant="admin_stroke"
            webWidth={128}
            mobileWidth={128}
            leftElement={<Plus />}
            onClick={() => append({ content: '' })}
          >
            이력 추가하기
          </Button>
        </Flex>
        <Space
          height={4}
          css={css`
            flex-shrink: 0;
          `}
        />

        <Space
          height={48}
          css={css`
            flex-shrink: 0;
          `}
        />
        <Flex>
          <Button
            variant="admin_navy"
            webWidth={328}
            webHeight={46}
            mobileHeight={46}
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          >
            저장하기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
