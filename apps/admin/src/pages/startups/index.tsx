import { PageTitle } from '@admin/components/Common/PageTitle';
import { Flex } from 'packages/ui';
import styled from '@emotion/styled';
import { Button, TextField, Space, Text } from 'packages/ui';
import { ImageUploader } from '@admin/components/ImageUploader';
import { useForm } from 'react-hook-form';
import useInfiniteQueries from '@admin/hooks/useInfiniteQueries';
import {
  StartupsResponse,
  adminStartupsApi,
} from '@ceos-fe/utils/src/apis/admin/adminStartupsApi';
import { AdminStartupsCard } from '@ceos-fe/ui/src/components/Card/StartupsCard';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function Startups() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    setValue,
    getValues,
    watch,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  // 스폰서 생성 api
  const postStartupsCreateMutation = useMutation(
    adminStartupsApi.POST_STARTUPS,
    {
      onSuccess: () => {
        alert('추가 완료');
        queryClient.invalidateQueries([['startups']]);
      },
    },
  );

  const onSubmit = (data: any) => {
    postStartupsCreateMutation.mutate({
      payload: {
        ...data,
      },
    });
  };

  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Flex align="flex-end" justify="space-between" width={1032}>
        <PageTitle
          title={'START-UPS'}
          description={'CEOS 출신 창업가들을 소개합니다.'}
        />
        <Button variant="admin_navy" webWidth={84} webHeight={33}>
          편집하기
        </Button>
      </Flex>
      <Flex
        direction="row"
        align="flex-start"
        justify="flex-start"
        webGap={200}
        mobileGap={200}
        margin="48px 0px 0px 0px"
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
            ></InfiniteElement>
            <InfiniteElement
              isLeft={false}
              webGap={24}
              mobileGap={24}
              direction="column"
            ></InfiniteElement>
          </Flex>
        </div>
        <div>
          <div>
            <Text webTypo="Heading3">스타트업 추가하기</Text>
            <Space height={28} />
            <Flex direction="row" justify="space-between">
              <TextField
                width={152}
                label="회사명"
                placeholder="내용을 입력하세요."
                isAdmin
                {...register('serviceName', {
                  required: true,
                })}
              />
              <TextField
                width={152}
                label="법인명"
                placeholder="내용을 입력하세요."
                isAdmin
                {...register('companyName', {
                  required: true,
                })}
              />
            </Flex>
            <Space height={24} />
            <Flex direction="row" justify="space-between">
              <TextField
                width={152}
                label="창업자"
                placeholder="내용을 입력하세요."
                isAdmin
                {...register('founder', {
                  required: true,
                })}
              />
              <TextField
                width={152}
                label="기수"
                placeholder="내용을 입력하세요."
                isAdmin
                {...register('generation', {
                  required: true,
                })}
              />
            </Flex>
            <Space height={24} />
            <TextField
              width={152}
              label="홈페이지 링크"
              placeholder="내용을 입력하세요."
              isAdmin
              {...register('serviceUrl', {
                required: true,
              })}
            />
          </div>
          <div>
            <Space height={24} />
            <ImageUploader
              imageApiType="STARTUPS"
              label="imageUrl"
              value={watch('imageUrl')}
              setValue={setValue}
              height={328}
            />
          </div>
          <Space height={20} />
          <Button
            variant="admin_navy"
            webWidth={328}
            webHeight={46}
            mobileHeight={46}
            disabled={!(isValid && getValues('imageUrl') !== '')}
            onClick={handleSubmit(onSubmit)}
          >
            추가하기
          </Button>
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
