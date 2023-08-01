import { useRouter } from 'next/router';
import { Button, Flex, Text, TextField, Space } from '@ceos-fe/ui';
import { BackArrow } from '@admin/assets/Arrow';
import { useFieldArray, useForm } from 'react-hook-form';
import { ProjectItemInterface, adminProjectApi } from '@ceos-fe/utils';
import { Plus } from '@admin/assets/Plus';
import { Dropdown } from '@admin/components/Dropdown';
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { ImageUploader } from '@admin/components/ImageUploader';
import { BackButton } from '@admin/components/Common/BackButton';
import { css } from '@emotion/react';

const UrlCategoryMap = {
  서비스: 'Service Link',
  깃허브: 'Github',
  비핸스: 'Behance',
  인스타: 'Instagram',
};

export default function ProjectDetail() {
  const router = useRouter();

  const isEditMode = router.query.id ? true : false;

  const { data, isFetching, isSuccess } = useQuery<ProjectItemInterface>(
    ['admin', 'project', router.query.id],
    () => adminProjectApi.GET_PROJECT(Number(router.query.id)),
    {
      enabled: isEditMode,
    },
  );

  const postProjectMutation = useMutation(adminProjectApi.POST_PROJECT, {
    onSuccess: () => {
      alert('저장 완료');
      router.push('/project');
    },
  });

  const patchProjectMutation = useMutation(adminProjectApi.PATCH_PROJECT, {
    onSuccess: () => {
      alert('수정 완료');
      router.push('/project');
    },
  });

  const { control, getValues, setValue, reset, watch, register } =
    useForm<ProjectItemInterface>({
      defaultValues: {
        name: '',
        description: '',
        generation: 0,
        projectUrls: [
          {
            category: '서비스',
            linkUrl: '',
          },
        ],
        projectImages: [
          {
            category: '썸네일',
            imageUrl: '',
          },
          {
            category: '상세',
            imageUrl: '',
          },
        ],
        participants: [],
      },
    });
  const {
    fields: projectUrls,
    append: appendProjectUrls,
    remove: removeProjectUrls,
  } = useFieldArray({
    control,
    name: 'projectUrls',
  });

  useEffect(() => {
    if (isFetching || !isSuccess) return;

    reset(data);
  }, [isFetching, isSuccess]);

  const handleAppendUrl = () => {
    appendProjectUrls({
      category: '서비스',
      linkUrl: '',
    });
  };

  const handleSaveProject = () => {
    const data = {
      name: getValues('name'),
      description: getValues('description'),
      generation: Number(getValues('generation')),
      participants: getValues('participants').map((participant, idx) => {
        switch (idx) {
          case 0:
          case 1:
            return {
              part: '기획',
              name: participant.name,
            };
          case 2:
          case 3:
            return {
              part: '디자인',
              name: participant.name,
            };
          case 4:
          case 5:
            return {
              part: '프론트엔드',
              name: participant.name,
            };
          default:
            return {
              part: '백엔드',
              name: participant.name,
            };
        }
      }),
      projectImages: getValues('projectImages'),
      projectUrls: getValues('projectUrls'),
    } as ProjectItemInterface;

    if (isEditMode) {
      patchProjectMutation.mutate({
        id: Number(router.query.id),
        payload: {
          ...data,
        },
      });
    } else {
      postProjectMutation.mutate({
        payload: {
          ...data,
        },
      });
    }
  };

  return (
    <>
      <BackButton
        title={isEditMode ? '프로젝트 수정' : '프로젝트 추가'}
        onClick={() => router.back()}
      />
      <Space height={48} />
      <Flex webGap={24} mobileGap={24} align="flex-start">
        <Flex webGap={24} mobileGap={24} direction="column" width={680}>
          <Flex webGap={24} mobileGap={24}>
            <TextField {...register('name')} label="팀명" isAdmin />
            <TextField {...register('generation')} label="활동기수" isAdmin />
          </Flex>

          <TextField
            {...register('description')}
            width={680}
            label="한줄 소개"
            isAdmin
          />

          <Flex webGap={24} mobileGap={24}>
            <TextField
              {...register('participants.0.name')}
              label="기획 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              {...register('participants.1.name')}
              label="기획 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              {...register('participants.2.name')}
              label="디자인 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              {...register('participants.3.name')}
              label="디자인 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
          </Flex>

          <Flex webGap={24} mobileGap={24}>
            <TextField
              {...register('participants.4.name')}
              label="프론트 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              {...register('participants.5.name')}
              label="프론트 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              {...register('participants.6.name')}
              label="백엔드 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              {...register('participants.7.name')}
              label="백엔드 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
          </Flex>

          <Flex webGap={6} mobileGap={6} direction="column" align="flex-start">
            <Text webTypo="Label3" paletteColor="Black">
              링크 추가
            </Text>
            <Flex webGap={16} mobileGap={16} direction="column">
              {projectUrls.map((_, idx) => (
                <Flex
                  key={idx}
                  webGap={16}
                  mobileGap={16}
                  align="flex-start"
                  width={680}
                  justify="flex-start"
                >
                  {' '}
                  <div>
                    <Space height={4} />
                    <Dropdown
                      width={152}
                      label={`projectUrls.${idx}.category`}
                      value={{
                        label:
                          UrlCategoryMap[watch(`projectUrls.${idx}.category`)],
                        value: watch(`projectUrls.${idx}.category`),
                      }}
                      options={[
                        {
                          label: 'Service Link',
                          value: '서비스',
                        },
                        {
                          label: 'Github',
                          value: '깃허브',
                        },
                        {
                          label: 'Behance',
                          value: '비핸스',
                        },
                        {
                          label: 'Instagram',
                          value: '인스타',
                        },
                      ]}
                      setValue={(_, val) =>
                        setValue(`projectUrls.${idx}.category`, val.value)
                      }
                    />
                  </div>
                  <TextField
                    {...register(`projectUrls.${idx}.linkUrl`)}
                    isAdmin
                    placeholder="링크를 입력하세요."
                    width={441}
                  />
                  <Button
                    variant="admin_navy"
                    webWidth={57}
                    style={{ marginTop: '4px' }}
                    onClick={() => removeProjectUrls(idx)}
                  >
                    삭제
                  </Button>
                </Flex>
              ))}

              <Button
                variant="admin_stroke"
                webWidth={128}
                onClick={handleAppendUrl}
              >
                <Flex webGap={4} mobileGap={4}>
                  <Plus />
                  링크 추가하기
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex webGap={24} mobileGap={24} direction="column" width={328}>
          <Flex webGap={8} mobileGap={8} direction="column" align="flex-start">
            <Text webTypo="Label3" paletteColor="Black">
              썸네일 이미지
            </Text>
            <ImageUploader
              imageApiType="PROJECTS"
              label="projectImages.0.imageUrl"
              value={watch('projectImages.0.imageUrl')}
              setValue={setValue}
            />
          </Flex>
          <Flex webGap={8} mobileGap={8} direction="column" align="flex-start">
            <Text webTypo="Label3" paletteColor="Black">
              상세 이미지
            </Text>
            <ImageUploader
              imageApiType="PROJECTS"
              label="projectImages.1.imageUrl"
              value={watch('projectImages.1.imageUrl')}
              setValue={setValue}
            />
          </Flex>
        </Flex>
      </Flex>
      <div>
        <Space height={80} />
        <Button
          variant="admin_navy"
          webWidth={328}
          webHeight={46}
          mobileHeight={46}
          onClick={handleSaveProject}
          css={css`
            flex-shrink: 0;
          `}
        >
          저장하기
        </Button>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  try {
    return {
      paths: [],
      fallback: 'blocking',
    };
  } catch (err) {
    console.error(err);
  }
};

export const getStaticProps = async ({ params }: { params: any }) => {
  try {
    if (!params.id)
      return {
        props: {},
      };

    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery(
      ['admin', 'project', params.id],
      () => adminProjectApi.GET_PROJECT(params.id),
    );

    return {
      props: {
        dehydratedProps: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (err) {
    console.error(err);
  }
};
