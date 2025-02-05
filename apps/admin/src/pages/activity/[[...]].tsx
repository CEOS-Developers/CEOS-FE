import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex, Button, Space, TextField, Text } from '@ceos-fe/ui';
import { RewardResponse, adminActivityApi } from '@ceos-fe/utils';
import styled from '@emotion/styled';
import { SponsoredByContainer } from '../../components/sponsoredBy/SponsoredByContainer/index';
import useInfiniteQueries from '../../hooks/useInfiniteQueries';
import { PageTitle } from '../../components/Common/PageTitle';
import { useForm } from 'react-hook-form';
import { ImageUploader } from '../../components/ImageUploader/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ActivityCardContainer } from '../../components/activity/ActivityCardContainer/indext';
import {
  ActivityDTO,
  ActivityResponse,
} from '../../../../../packages/utils/src/apis/admin/adminActivityApi';

export default function Activity() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    watch,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const { infiniteData, ref } = useInfiniteQueries<ActivityResponse>({
    queryKey: ['activity'],
    queryFunction: ({ pageParam = 0 }) =>
      adminActivityApi.GET_ACTIVITY({ pageNum: pageParam, limit: 12 }),
    PageItem: ActivityCardContainer,
  });

  // 활동 생성 api
  const postActivityCreateMutation = useMutation(
    adminActivityApi.POST_ACTIVITY,
    {
      onSuccess: () => {
        alert('추가 완료');
        queryClient.invalidateQueries([['activity']]);
      },
    },
  );

  // 활동 수정 api
  const putActivityCreateMutation = useMutation(adminActivityApi.PUT_ACTIVITY, {
    onSuccess: () => {
      alert('수정 완료');
      queryClient.invalidateQueries([['activity']]);
      router.push('/activity');
    },
  });

  // 수정 시 정보 가져오기 api
  const getActivityMutation = useMutation(adminActivityApi.GET_ONE_ACTIVITY, {
    onSuccess: async (data: ActivityDTO) => {
      setValue('name', data.name);
      setValue('content', data.content);
      setValue('imageUrl', data.imageUrl);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  const onSubmit = (data: any) => {
    if (Number(router.query[''])) {
      putActivityCreateMutation.mutate({
        id: Number(Number(router.query[''])),
        payload: {
          ...data,
        },
      });
    } else {
      postActivityCreateMutation.mutate({
        payload: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    if (Number(router.query[''])) {
      getActivityMutation.mutate(Number(router.query['']));
    }
  }, [getActivityMutation, router]);

  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Flex align="flex-end" justify="space-between" width={1032}>
        <PageTitle
          title={'ACTIVITY'}
          description={'세오스 활동 목록을 관리합니다.'}
        />
      </Flex>
      <div>
        <Space height={48} />
      </div>
      <Flex
        direction="row"
        align="flex-start"
        justify="flex-start"
        webGap={200}
        mobileGap={200}
      >
        <div>
          <Flex
            webGap={24}
            mobileGap={24}
            justify={'flex-start'}
            align={'flex-start'}
            width={504}
          >
            <InfiniteElement
              isLeft={true}
              webGap={24}
              mobileGap={24}
              direction="column"
            >
              {infiniteData}
            </InfiniteElement>
            <InfiniteElement
              isLeft={false}
              webGap={24}
              mobileGap={24}
              direction="column"
            >
              {infiniteData}
            </InfiniteElement>
          </Flex>
          <div ref={ref}></div>
        </div>
        <div>
          <TextField
            label="활동 제목"
            placeholder="내용을 입력하세요."
            isAdmin
            {...register('name', {
              required: true,
            })}
          />
          <Space height={24} />
          <TextField
            label="활동 설명"
            placeholder="내용을 입력하세요."
            height={64}
            multiline
            isAdmin
            {...register('content', {
              required: true,
            })}
          />
          <Space height={24} />
          <div>
            <Text webTypo="Label3">썸네일 이미지</Text>
            <Space height={8} />
            <ImageUploader
              imageApiType="ACTIVITY"
              label="imageUrl"
              value={watch('imageUrl')}
              setValue={setValue}
              height={328}
            />
          </div>
          <Space height={48} />
          <Flex>
            <Button
              variant="admin_navy"
              webWidth={328}
              webHeight={46}
              mobileHeight={46}
              disabled={!(isValid && getValues('imageUrl') !== '')}
              onClick={handleSubmit(onSubmit)}
            >
              저장하기
            </Button>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
}

const InfiniteElement = styled(Flex)<{
  isLeft: boolean;
}>`
  & > :nth-child(even) {
    display: ${({ isLeft }) => (isLeft ? 'none' : '')};
  }

  & > :nth-child(odd) {
    display: ${({ isLeft }) => (isLeft ? '' : 'none')};
  }
`;
