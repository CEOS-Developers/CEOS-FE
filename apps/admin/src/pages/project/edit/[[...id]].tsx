import { useRouter } from 'next/router';
import { Button, Flex, Text, TextField, Space } from '@ceos-fe/ui';
import { useFieldArray, useForm } from 'react-hook-form';
import { ProjectItemInterface, adminProjectApi } from '@ceos-fe/utils';
import { Plus } from '@admin/assets/Plus';
import { Dropdown } from '@admin/components/Dropdown';
import { useMutation } from '@tanstack/react-query';
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

  const {
    control,
    getValues,
    setValue,
    reset,
    watch,
    register,
    formState: { isValid },
  } = useForm<ProjectItemInterface>({
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
      participants: [
        {
          part: '기획',
          name: '',
        },
        {
          part: '기획',
          name: '',
        },
        {
          part: '디자인',
          name: '',
        },
        {
          part: '디자인',
          name: '',
        },
        {
          part: '프론트엔드',
          name: '',
        },
        {
          part: '프론트엔드',
          name: '',
        },
        {
          part: '백엔드',
          name: '',
        },
        {
          part: '백엔드',
          name: '',
        },
      ],
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

  const isEditMode = router.query.id ? true : false;
  const { mutate: getProject } = useMutation(adminProjectApi.GET_PROJECT, {
    onSuccess: async (data: ProjectItemInterface) => {
      reset(data);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  // 수정 시 value set
  useEffect(() => {
    if (router.query.id) {
      getProject(Number(router.query.id));
    }
  }, [router.query.id]);

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
      participants: getValues('participants').map((participant) => {
        return {
          part: participant.part,
          name: participant.name,
        };
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
            <TextField
              {...register('name', {
                required: true,
              })}
              label="팀명"
              isAdmin
            />
            <TextField
              type="number"
              {...register('generation', {
                required: true,
              })}
              label="활동기수"
              isAdmin
            />
          </Flex>

          <TextField
            {...register('description', {
              required: true,
            })}
            width={680}
            label="한줄 소개"
            isAdmin
          />

          <Flex webGap={24} mobileGap={24}>
            {watch('participants').map((participant, idx) =>
              participant.part === '기획' ? (
                <TextField
                  {...register(`participants.${idx}.name`, {
                    required: true,
                  })}
                  key={idx}
                  label={`기획 팀원${idx + 1}`}
                  width={152}
                  isAdmin
                  placeholder="이름을 입력하세요."
                />
              ) : (
                <></>
              ),
            )}
            {watch('participants').map((participant, idx) =>
              participant.part === '디자인' ? (
                <TextField
                  {...register(`participants.${idx}.name`, {
                    required: true,
                  })}
                  key={idx}
                  label={`디자인 팀원${idx - 1}`}
                  width={152}
                  isAdmin
                  placeholder="이름을 입력하세요."
                />
              ) : (
                <></>
              ),
            )}
          </Flex>

          <Flex webGap={24} mobileGap={24}>
            {watch('participants').map((participant, idx) =>
              participant.part === '프론트엔드' ? (
                <TextField
                  {...register(`participants.${idx}.name`, {
                    required: true,
                  })}
                  key={idx}
                  label={`프론트 팀원${idx - 3}`}
                  width={152}
                  isAdmin
                  placeholder="이름을 입력하세요."
                />
              ) : (
                <></>
              ),
            )}
            {watch('participants').map((participant, idx) =>
              participant.part === '백엔드' ? (
                <TextField
                  {...register(`participants.${idx}.name`, {
                    required: true,
                  })}
                  key={idx}
                  label={`백엔드 팀원${idx - 5}`}
                  width={152}
                  isAdmin
                  placeholder="이름을 입력하세요."
                />
              ) : (
                <></>
              ),
            )}
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
                    {...register(`projectUrls.${idx}.linkUrl`, {
                      required: true,
                    })}
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

              <div>
                <Button
                  variant="admin_stroke"
                  webWidth={128}
                  mobileWidth={128}
                  onClick={handleAppendUrl}
                >
                  <Flex webGap={4} mobileGap={4}>
                    <Plus />
                    링크 추가하기
                  </Flex>
                </Button>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          webGap={24}
          mobileGap={24}
          direction="column"
          width={328}
          height={490}
          align="flex-start"
        >
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
          disabled={
            !(
              isValid &&
              getValues('projectImages.0.imageUrl') &&
              getValues('projectImages.1.imageUrl')
            )
          }
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
