import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex, Button, Space, TextField, Text } from '@ceos-fe/ui';
import {
  RewardResponse,
  SponsoredByDTO,
  adminSponsoredByApi,
} from '@ceos-fe/utils';
import styled from '@emotion/styled';
import { SponsoredByContainer } from '../../components/sponsoredBy/SponsoredByContainer/index';
import useInfiniteQueries from '../../hooks/useInfiniteQueries';
import { PageTitle } from '../../components/Common/PageTitle';
import { useForm } from 'react-hook-form';
import { ImageUploader } from '../../components/ImageUploader/index';
import { useMutation } from '@tanstack/react-query';

export default function SponsoredBy() {
  const router = useRouter();
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const { infiniteData, ref } = useInfiniteQueries<RewardResponse>({
    queryKey: ['sponsor'],
    queryFunction: ({ pageParam = 0 }) =>
      adminSponsoredByApi.GET_SPONSOR({ pageNum: pageParam, limit: 12 }),
    PageItem: SponsoredByContainer,
  });

  // 스폰서 생성 api
  const postSponsorCreateMutation = useMutation(
    adminSponsoredByApi.POST_SPONSOR,
    {
      onSuccess: () => {
        alert('추가 완료');
        router.push('/sponsoredby');
      },
    },
  );

  // 스폰서 수정 api
  const patchSponsorCreateMutation = useMutation(
    adminSponsoredByApi.PAPTCH_SPONSOR,
    {
      onSuccess: () => {
        alert('수정 완료');
        router.push('/sponsoredby');
      },
    },
  );

  // 수정 시 정보 가져오기 api
  const getSponsorMutation = useMutation(adminSponsoredByApi.GET_ONE_SPONSOR, {
    onSuccess: async (data: SponsoredByDTO) => {
      setValue('name', data.name);
      setValue('imageUrl', data.imageUrl);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  const onSubmit = (data: any) => {
    if (Number(router.query[''])) {
      patchSponsorCreateMutation.mutate({
        id: Number(Number(router.query[''])),
        payload: {
          ...data,
        },
      });
    } else {
      postSponsorCreateMutation.mutate({
        payload: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    if (Number(router.query[''])) {
      getSponsorMutation.mutate(Number(router.query['']));
    }
  }, [router]);

  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Flex align="flex-end" justify="space-between" width={1032}>
        <PageTitle
          title={'SPONSORED BY'}
          description={'세오스 후원 단체의 목록을 관리합니다.'}
        />
      </Flex>
      <Space height={48} />
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
            label="후원 단체명"
            placeholder="내용을 입력하세요."
            isAdmin
            {...register('name', {
              required: true,
            })}
          />
          <Space height={24} />
          <div>
            <Text webTypo="Label3">썸네일 이미지</Text>
            <Space height={8} />
            <ImageUploader
              imageApiType="MANAGEMENT"
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
              disabled={!isValid}
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
