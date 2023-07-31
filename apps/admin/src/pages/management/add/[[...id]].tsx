import { useRouter } from 'next/router';
import {
  Button,
  Flex,
  SelectButton,
  Space,
  Text,
  TextField,
} from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '@admin/components/Dropdown';
import { ImageUploader } from '@admin/components/ImageUploader';
import { BackButton } from '@admin/components/Common/BackButton';
import { useMutation } from '@tanstack/react-query';
import { adminManagementApi, ManagementDTO } from '@ceos-fe/utils';
import { useEffect, useState } from 'react';

const PART: Record<string, string> = {
  기획: 'strategy',
  디자인: 'design',
  프론트엔드: 'frontend',
  백엔드: 'backend',
};

const ROLE: Record<string, string> = {
  회장단: 'presidency',
  총무: 'accounting',
  파트장: 'partLeader',
  운영진: 'management',
  멘토: 'mentor',
};

const UNIVERSITY: Record<string, string> = {
  연세대학교: 'yeonsei',
  서강대학교: 'sogang',
  이화여자대학교: 'ewha',
  홍익대학교: 'hongik',
};

export default function AddManagement() {
  const router = useRouter();
  const {
    register,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const [valid, setValid] = useState(
    isValid &&
      getValues('role') &&
      getValues('part') &&
      getValues('university') &&
      getValues('imageUrl'),
  );

  // 드롭다운 포함 유효성 확인
  useEffect(() => {
    setValid(
      isValid &&
        getValues('role') &&
        getValues('part') &&
        getValues('university') &&
        getValues('imageUrl'),
    );
  }, [
    isValid,
    watch('role'),
    watch('part'),
    watch('university'),
    watch('imageUrl'),
  ]);

  // 수정 시 정보 가져오기 api
  const getManagementMutation = useMutation(
    adminManagementApi.GET_ONE_MANAGEMENT,
    {
      onSuccess: async (data: ManagementDTO) => {
        setValue('category', data.role === '멘토' ? '멘토' : '운영진');
        setValue('name', data.name);
        setValue('generation', data.generation);
        setValue('part', {
          label: data.part,
          value: PART[data.part],
        });
        setValue('role', {
          label: data.role,
          value: ROLE[data.role],
        });
        setValue('university', {
          label: data.university,
          value: UNIVERSITY[data.university],
        });
        setValue('major', data.major);
        setValue('company', data.company);
        setValue('imageUrl', data.imageUrl);
      },
      onError: (error: any) => {
        console.log(error);
      },
    },
  );

  // 수정 시 value set
  useEffect(() => {
    if (router.query.id) {
      getManagementMutation.mutate(Number(router.query.id));
    }
  }, [router.query.id]);

  // 운영진 생성 api
  const postManagementCreateMutation = useMutation(
    adminManagementApi.POST_MANAGEMENT,
    {
      onSuccess: () => {
        alert('추가 완료');
        router.push('/management');
      },
    },
  );

  // 운영진 수정 api
  const patchManagementCreateMutation = useMutation(
    adminManagementApi.PATCH_MANAGEMENT,
    {
      onSuccess: () => {
        alert('수정 완료');
        router.push('/management');
      },
    },
  );

  const onSubmit = (data: any) => {
    if (router.query.id) {
      patchManagementCreateMutation.mutate({
        id: Number(router.query.id),
        payload: {
          ...data,
          part: data.part.label,
          role: data.role.label,
          university: data.university.label,
        },
      });
    } else {
      postManagementCreateMutation.mutate({
        payload: {
          ...data,
          part: data.part.label,
          role: data.role.label,
          university: data.university.label,
        },
      });
    }
  };

  return (
    <>
      <BackButton title="임원진 추가" onClick={() => router.back()} />
      <Space height={48} />
      <Flex
        direction="row"
        align="flex-start"
        justify="flex-start"
        webGap={24}
        mobileGap={24}
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
          webGap={24}
          mobileGap={24}
        >
          <Flex
            direction="row"
            align="flex-start"
            justify="flex-start"
            webGap={24}
            mobileGap={24}
          >
            <div>
              <Text webTypo="Label3">분류</Text>
              <Space height={8} />
              <Flex
                align="flex-start"
                justify="flex-start"
                webGap={12}
                mobileGap={12}
              >
                <SelectButton
                  variant="admin"
                  webWidth={158}
                  mobileWidth={158}
                  value="운영진"
                  {...register('category', {
                    required: true,
                  })}
                />
                <SelectButton
                  variant="admin"
                  webWidth={158}
                  mobileWidth={158}
                  value="멘토"
                  {...register('category', {
                    required: true,
                  })}
                />
              </Flex>
            </div>
            <TextField
              label="이름"
              placeholder="내용을 입력하세요."
              isAdmin
              {...register('name', {
                required: true,
              })}
            />
          </Flex>
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
            <div>
              <Text webTypo="Label3">분류</Text>
              <Space height={8} />
              <Dropdown
                options={[
                  {
                    label: '기획',
                    value: 'strategy',
                  },
                  {
                    label: '디자인',
                    value: 'design',
                  },
                  {
                    label: '프론트엔드',
                    value: 'frontend',
                  },
                  {
                    label: '백엔드',
                    value: 'backend',
                  },
                ]}
                label="part"
                setValue={setValue}
                value={watch('part')}
                placeholder="파트 선택"
                width={152}
              />
            </div>
            <div>
              <Text webTypo="Label3">담당</Text>
              <Space height={8} />
              <Dropdown
                options={[
                  {
                    label: '회장단',
                    value: 'presidency',
                  },
                  {
                    label: '총무',
                    value: 'accounting',
                  },
                  {
                    label: '파트장',
                    value: 'partLeader',
                  },
                  {
                    label: '운영진',
                    value: 'management',
                  },
                  {
                    label: '멘토',
                    value: 'mentor',
                  },
                ]}
                label="role"
                setValue={setValue}
                value={watch('role')}
                placeholder="선택"
                width={152}
              />
            </div>
          </Flex>
          <Flex
            direction="row"
            align="flex-start"
            justify="flex-start"
            webGap={24}
            mobileGap={24}
          >
            <div>
              <Text webTypo="Label3">학교</Text>
              <Space height={8} />
              <Dropdown
                options={[
                  {
                    label: '연세대학교',
                    value: 'yeonsei',
                  },
                  {
                    label: '서강대학교',
                    value: 'sogang',
                  },
                  {
                    label: '이화여자대학교',
                    value: 'ewha',
                  },
                  {
                    label: '홍익대학교',
                    value: 'hongik',
                  },
                ]}
                label="university"
                setValue={setValue}
                value={watch('university')}
                placeholder="선택"
                width={152}
              />
            </div>
            <TextField
              label="학과"
              placeholder="내용을 입력하세요."
              isAdmin
              {...register('major', {
                required: true,
              })}
            />
          </Flex>
          <TextField
            label="이력"
            placeholder="내용을 입력하세요."
            width={680}
            isAdmin
            {...register('company')}
          />
        </Flex>
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
      </Flex>
      <Space height={222} />
      <Flex>
        <Button
          variant="admin_navy"
          webWidth={328}
          webHeight={46}
          mobileHeight={46}
          disabled={!valid}
          onClick={handleSubmit(onSubmit)}
        >
          저장하기
        </Button>
      </Flex>
    </>
  );
}
