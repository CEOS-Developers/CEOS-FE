import { useRouter } from 'next/router';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
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

const UrlCategoryMap = {
  서비스: 'Service Link',
  깃허브: 'Github',
  비핸스: 'Behance',
  인스타: 'Instagram',
};

export default function ProjectDetail() {
  const router = useRouter();

  const { data, isFetching, isSuccess } = useQuery<ProjectItemInterface>(
    ['admin', 'project', router.query.id],
    () => adminProjectApi.GET_PROJECT(Number(router.query.id)),
    {
      enabled: router.query.id ? true : false,
    },
  );
  const { mutate: mutateProject } = useMutation(
    router.query.id
      ? adminProjectApi.PATCH_PROJECT
      : adminProjectApi.POST_PROJECT,
  );

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
        projectImages: [],
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
    mutateProject({
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
    });
  };

  return (
    <>
      <Flex webGap={14} justify="flex-start">
        <div onClick={() => router.back()} style={{ cursor: 'pointer' }}>
          <BackArrow />
        </div>
        <Text webTypo="Heading3" paletteColor="Black">
          프로젝트 {router.query.id ? '수정' : '추가'}
        </Text>
      </Flex>

      <Flex margin="48px 0 0 0" webGap={24} align="flex-start">
        <Flex webGap={24} direction="column" width={680}>
          <Flex webGap={24}>
            <TextField {...register('name')} label="팀명" isAdmin />
            <TextField {...register('generation')} label="활동기수" isAdmin />
          </Flex>

          <TextField
            {...register('description')}
            width={680}
            label="한줄 소개"
            isAdmin
          />

          <Flex webGap={24}>
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

          <Flex webGap={24}>
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

          <Flex webGap={6} direction="column" align="flex-start">
            <Text webTypo="Label3" paletteColor="Black">
              링크 추가
            </Text>
            <Flex webGap={16} direction="column">
              {projectUrls.map((_, idx) => (
                <Flex
                  key={idx}
                  webGap={16}
                  align="flex-end"
                  width={680}
                  justify="flex-start"
                >
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
                  <TextField
                    {...register(`projectUrls.${idx}.linkUrl`)}
                    isAdmin
                    placeholder="링크를 입력하세요."
                    width={441}
                  />
                  <Button
                    variant="admin_navy"
                    webWidth={57}
                    style={{ marginBottom: '4px' }}
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
                <Flex webGap={4}>
                  <Plus />
                  링크 추가하기
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex webGap={24} direction="column" width={328}>
          <Flex webGap={8} direction="column" align="flex-start">
            <Text webTypo="Label3" paletteColor="Black">
              썸네일 이미지
            </Text>
          </Flex>
          <Flex webGap={8} direction="column" align="flex-start">
            <Text webTypo="Label3" paletteColor="Black">
              상세 이미지
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Button
        variant="admin"
        style={{ marginTop: '80px', alignSelf: 'center' }}
        onClick={handleSaveProject}
      >
        저장하기
      </Button>
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
