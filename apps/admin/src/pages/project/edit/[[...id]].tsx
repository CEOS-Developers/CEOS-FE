import { useRouter } from 'next/router';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { BackArrow } from '@admin/assets/Arrow';
import { useForm } from 'react-hook-form';
import { ProjectItemInterface } from '@ceos-fe/utils';
import { Plus } from '@admin/assets/Plus';
import { Dropdown } from '@admin/components/Dropdown';

export default function ProjectDetail() {
  const router = useRouter();

  const { getValues, setValue, reset, register } =
    useForm<ProjectItemInterface>({
      defaultValues: {},
    });

  return (
    <>
      <Flex webGap={14} justify="flex-start">
        <BackArrow />
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
            {...register('name')}
            width={680}
            label="한줄 소개"
            isAdmin
          />

          <Flex webGap={24}>
            <TextField
              label="기획 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              label="기획 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              label="디자인 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              label="디자인 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
          </Flex>

          <Flex webGap={24}>
            <TextField
              label="프론트 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              label="프론트 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              label="백엔드 팀원1"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
            <TextField
              label="백엔드 팀원2"
              width={152}
              isAdmin
              placeholder="이름을 입력하세요."
            />
          </Flex>

          <Flex webGap={16} direction="column">
            <Flex webGap={16} align="flex-end" width={680} justify="flex-start">
              <Flex
                webGap={11}
                direction="column"
                align="flex-start"
                width={152}
              >
                <Text webTypo="Label3">링크 추가</Text>
                <Dropdown width={152} />
              </Flex>
              <TextField isAdmin placeholder="링크를 입력하세요." width={441} />
              <Button
                variant="admin_navy"
                webWidth={57}
                style={{ marginBottom: '4px' }}
              >
                삭제
              </Button>
            </Flex>

            <Button variant="admin_stroke" webWidth={128}>
              <Flex webGap={4}>
                <Plus />
                링크 추가하기
              </Flex>
            </Button>
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
      >
        저장하기
      </Button>
    </>
  );
}
