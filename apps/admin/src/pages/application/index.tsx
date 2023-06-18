import { Button, Flex, Text, TextField, theme } from '@ceos-fe/ui';
import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Dropdown } from '@admin/components/Dropdown';
import { DropdownItemInterface } from '../../utils/dropdown';
import { SelectButton } from '../../../../../packages/ui/src/components/SelectButton/index';

const applicationList = {
  commonQuestions: [
    {
      questionIndex: 1,
      question:
        '1. CEOS에 지원한 동기와 얻을 것으로 기대하는 점을 서술해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 2,
      question: '2. 하고 싶은 창업 아이템에 대해 서술해 주세요. (300자 내외)*',
    },
    {
      questionIndex: 3,
      question:
        '3. 프로젝트 등 협업을 하며 겪은 어려움과 이를 해결하며 느끼고 배운 점을 중심으로 서술해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 4,
      question:
        '4. CEOS는 기획, 개발, 디자인으로 구성된 팀으로 활동합니다. 팀 내에서 본인이 기여할 수 있는 부분이 무엇인지 적어 주세요. (300자 이상)*',
    },
  ],
  productQuestions: [
    {
      questionIndex: 1,
      question: '1. 유망하다고 생각하는 시장과 그 이유에 대해 서술해주세요.',
    },
    {
      questionIndex: 2,
      question:
        "2. 공통 질문에 적어주신 ‘하고 싶은 창업 아이템'의 시장성을 평가해주세요.",
    },
    {
      questionIndex: 3,
      question:
        '3. 창업 및 스타트업에 대한 자신의 관심을 자유롭게 서술해주세요.',
    },
    {
      questionIndex: 4,
      question:
        '4. IT창업에 있어서 중요하다고 생각하는 부분을 자유롭게 서술해주세요.',
    },
  ],
  designQuestions: [
    {
      questionIndex: 1,
      question:
        '1. CEOS는 다양한 사람들과 파트가 모여 프로젝트를 만들어갑니다. 이처럼 다양한 사람들과의 협업 만족도가 높은 프로덕트를 만들기 위해, UXUI 디자이너로서 본인의 역할은 무엇이라고 생각하는지 서술해주세요. (200자 내외)',
    },
    {
      questionIndex: 2,
      question:
        '2. 팀 내의 갈등이 생긴다면 어떻게 해결할 것인지 서술해주세요. 갈등 상황은 1) 기획과 디자이너, 2) 디자이너와 디자이너, 3) 개발자와 디자이너 중 자유롭게 구성해주세요. 갈등을 해결했던 자신만의 방법과 경험을 함께 서술해주세요. (200자 내외)',
    },
    {
      questionIndex: 3,
      question:
        '3. 다른 디자이너와 차별화되는 자신만의 강점을 프로젝트 또는 경험과 함께 서술해주세요. (200자 내외)',
    },
    {
      questionIndex: 4,
      question:
        '4. 포트폴리오 사이트 또는 PDF가 첨부된 구글 드라이브 링크를 입력해주세요.',
    },
  ],
  frontendQuestions: [
    {
      questionIndex: 1,
      question: '1. 주로 사용하는 기술 스택과 숙련도를 작성해 주세요.*',
    },
    {
      questionIndex: 2,
      question:
        '2. 본인이 진행했던 프로젝트를 어떤 언어로, 어떤 기술을 사용했는지 본인의 기여 사항을 중심으로 자세히 설명해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 3,
      question:
        '3. 프로젝트를 진행하면서 기술적인 어려움이 있었다면 이를 어떻게 해결했는지 자세히 설명해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 4,
      question:
        '4. 기존에 프로젝트를 진행하면서 가장 기억에 남았던 부분 또는 가장 배웠다고 느꼈던 부분이 있다면 자세히 설명해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 5,
      question:
        '5. GitHub 링크를 포함하여 개발 경험이나 역량을 보여줄 수 있는 링크를 첨부해 주세요. (GitHub 필수, 대표 프로젝트 Repository 선택)*',
    },
  ],
  backendQuestions: [
    {
      questionIndex: 1,
      question: '1. 주로 사용하는 기술 스택과 숙련도를 작성해 주세요.*',
    },
    {
      questionIndex: 2,
      question:
        '2. 본인이 진행했던 프로젝트를 어떤 언어로, 어떤 기술을 사용했는지 본인의 기여 사항을 중심으로 자세히 설명해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 3,
      question:
        '3. 프로젝트를 진행하면서 기술적인 어려움이 있었다면 이를 어떻게 해결했는지 자세히 설명해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 4,
      question:
        '4. 기존에 프로젝트를 진행하면서 가장 기억에 남았던 부분 또는 가장 배웠다고 느꼈던 부분이 있다면 자세히 설명해 주세요. (300자 이상)*',
    },
    {
      questionIndex: 5,
      question:
        '5. GitHub 링크를 포함하여 개발 경험이나 역량을 보여줄 수 있는 링크를 첨부해 주세요. (GitHub 필수, 대표 프로젝트 Repository 선택)*',
    },
  ],
};

type SelectedPartKorType = '기획' | '디자인' | '프론트엔드' | '백엔드';
type SelectedPartType = 'PRODUCT' | 'DESIGN' | 'FRONTEND' | 'BACKEND';

const PART_MAP: Record<string, SelectedPartType> = {
  기획: 'PRODUCT',
  디자인: 'DESIGN',
  프론트엔드: 'FRONTEND',
  백엔드: 'BACKEND',
};

interface ApplicationListItemInterface {
  questionIndex: number;
  question: string;
  textfieldSize?: DropdownItemInterface;
  part?: SelectedPartType;
}
interface ApplicationInterface {
  commonQuestions: ApplicationListItemInterface[];
  partQuestions: ApplicationListItemInterface[];
  selectedPart: SelectedPartKorType;
  dates: string[];
  times: string[];
}

export default function Application() {
  const [allPartQuestions, setAllPartQuestions] = useState<
    ApplicationListItemInterface[]
  >([]);

  const { control, watch, setValue, register } = useForm<ApplicationInterface>({
    defaultValues: {
      commonQuestions: [],
      partQuestions: [],
      selectedPart: '기획',
      dates: [],
      times: [],
    },
  });
  const {
    fields: commonQuestions,
    replace: replaceCommonQuestions,
    append: appendCommonQuestions,
    remove: removeCommonQuestions,
  } = useFieldArray({
    control,
    name: 'commonQuestions',
  });
  const {
    fields: partQuestions,
    replace: replacePartQuestions,
    append: appendPartQuestions,
    remove: removePartQuestions,
  } = useFieldArray({
    control,
    name: 'partQuestions',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      replaceCommonQuestions(applicationList.commonQuestions);

      const questions = [] as ApplicationListItemInterface[];
      applicationList.productQuestions.forEach((question) => {
        questions.push({ ...question, part: 'PRODUCT' });
      });
      applicationList.designQuestions.forEach((question) => {
        questions.push({ ...question, part: 'DESIGN' });
      });
      applicationList.frontendQuestions.forEach((question) => {
        questions.push({ ...question, part: 'FRONTEND' });
      });
      applicationList.backendQuestions.forEach((question) => {
        questions.push({ ...question, part: 'BACKEND' });
      });

      setAllPartQuestions(questions);
      replacePartQuestions(
        questions.filter(
          (question) => question.part === PART_MAP[watch('selectedPart')],
        ),
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    replacePartQuestions(
      allPartQuestions.filter(
        (question) => question.part === PART_MAP[watch('selectedPart')],
      ),
    );
  }, [watch('selectedPart')]);

  const handleAppendCommonQuestion = () => {
    appendCommonQuestions({
      questionIndex:
        commonQuestions[commonQuestions.length - 1].questionIndex + 1,
      question: '',
    });
  };

  const handleRemoveCommonQuestion = (idx: number) => {
    removeCommonQuestions(idx);
  };

  const handleSaveApplication = (idx: number) => {
    // TODO: 질문 추가 API 연동
  };

  const handleAppendPartQuestion = () => {
    appendPartQuestions({
      questionIndex: partQuestions[partQuestions.length - 1].questionIndex + 1,
      question: '',
      part: PART_MAP[watch('selectedPart')],
    });
  };

  return (
    <Flex direction="column" align="flex-start">
      <Text webTypo="Heading2" color="Black">
        지원서 제출
      </Text>
      <Text webTypo="Body3" color="Gray5" style={{ marginTop: '12px' }}>
        지원서 질문을 관리하는 페이지입니다.
      </Text>

      <Flex direction="column" webGap={48} style={{ marginTop: '48px' }}>
        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">고정 질문</Text>
          <Flex webGap={24} justify="flex-start">
            <TextField value="이름" isAdmin />
            <TextField value="성별" isAdmin />
            <TextField value="생년월일" isAdmin />
          </Flex>
          <Flex webGap={24} justify="flex-start">
            <TextField value="이메일" isAdmin />
            <TextField value="전화번호" isAdmin />
          </Flex>
          <Flex webGap={24} justify="flex-start">
            <TextField value="재학 중인 학교" isAdmin />
            <TextField value="전공" isAdmin />
            <TextField value="졸업까지 남은 학기 수" isAdmin />
          </Flex>
          <Flex webGap={24} justify="flex-start">
            <TextField value="CEOS OT 날짜는?" isAdmin />
            <TextField value="CEOS 데모데이 날짜는?" isAdmin />
          </Flex>
          <TextField
            value="이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요."
            width={680}
            isAdmin
          />
        </Flex>

        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">공통 질문</Text>
          {commonQuestions.map((question, idx) => (
            <Flex direction="column" webGap={16}>
              <Flex key={question.id} webGap={8} justify="flex-start">
                <TextField
                  {...register(`commonQuestions.${idx}.question`)}
                  width={875}
                  isAdmin
                />
                <Button variant="admin_stroke">설명 추가</Button>
                <Button
                  variant="admin_navy"
                  onClick={() => handleRemoveCommonQuestion(idx)}
                >
                  삭제
                </Button>
              </Flex>
              <Flex justify="flex-start" webGap={8}>
                <TextField isSubTextField width={968} />
                <Button variant="admin_navy">삭제</Button>
              </Flex>
            </Flex>
          ))}
          <Button
            variant="admin_stroke"
            webWidth={128}
            style={{ alignSelf: 'center' }}
            onClick={handleAppendCommonQuestion}
          >
            <Flex webGap={4}>질문 추가하기</Flex>
          </Button>
        </Flex>

        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">파트별 질문</Text>

          <Flex webGap={24} justify="flex-start">
            <SelectButton
              variant="admin"
              value="기획"
              webWidth={240}
              {...register('selectedPart')}
            />
            <SelectButton
              variant="admin"
              value="디자인"
              webWidth={240}
              {...register('selectedPart')}
            />
            <SelectButton
              variant="admin"
              value="프론트엔드"
              webWidth={240}
              {...register('selectedPart')}
            />
            <SelectButton
              variant="admin"
              value="백엔드"
              webWidth={240}
              {...register('selectedPart')}
            />
          </Flex>

          {partQuestions.map((question, idx) => (
            <Flex direction="column" webGap={16}>
              <Flex key={question.id} webGap={8} justify="flex-start">
                <TextField
                  {...register(`partQuestions.${idx}.question`)}
                  width={715}
                  isAdmin
                />
                <Dropdown
                  options={[
                    {
                      label: '중형',
                      value: 'medium',
                    },
                    {
                      label: '대형',
                      value: 'large',
                    },
                  ]}
                  label={`partQuestions.${idx}.textfieldSize`}
                  setValue={(_, val) =>
                    setValue(`partQuestions.${idx}.textfieldSize`, val)
                  }
                  value={
                    watch(
                      `partQuestions.${idx}.textfieldSize`,
                    ) as DropdownItemInterface
                  }
                  width={152}
                  placeholder="입력창 크기 선택"
                />
                <Button variant="admin_stroke">설명 추가</Button>
                <Button variant="admin_navy">삭제</Button>
              </Flex>

              <Flex justify="flex-start" webGap={8}>
                <TextField isSubTextField width={968} />
                <Button variant="admin_navy">삭제</Button>
              </Flex>
            </Flex>
          ))}

          <Button
            variant="admin_stroke"
            webWidth={128}
            style={{ alignSelf: 'center' }}
            onClick={handleAppendPartQuestion}
          >
            <Flex webGap={4}>질문 추가하기</Flex>
          </Button>
        </Flex>

        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">면접 날짜</Text>

          <Flex webGap={16} direction="column" align="flex-start">
            <TextField label="날짜 1" isAdmin />

            <GridContainer>
              <Flex webGap={8} align="flex-end" justify="flex-start">
                <TextField label="시간" width={263} isAdmin />
                <Button variant="admin_navy" style={{ marginBottom: '4px' }}>
                  삭제
                </Button>
              </Flex>
              <Flex webGap={8} align="flex-end" justify="flex-start">
                <TextField label="시간" width={263} isAdmin />
                <Button variant="admin_navy" style={{ marginBottom: '4px' }}>
                  삭제
                </Button>
              </Flex>
              <Flex webGap={8} align="flex-end" justify="flex-start">
                <TextField label="시간" width={263} isAdmin />
                <Button variant="admin_navy" style={{ marginBottom: '4px' }}>
                  삭제
                </Button>
              </Flex>
              <Flex webGap={8} align="flex-end" justify="flex-start">
                <TextField label="시간" width={263} isAdmin />
                <Button variant="admin_navy" style={{ marginBottom: '4px' }}>
                  삭제
                </Button>
              </Flex>
            </GridContainer>

            <Button
              variant="admin_stroke"
              webWidth={128}
              style={{ alignSelf: 'center' }}
              onClick={handleAppendCommonQuestion}
            >
              <Flex webGap={4}>시간 추가하기</Flex>
            </Button>
          </Flex>

          <Line />

          <Flex webGap={16} direction="column" align="flex-start">
            <TextField label="날짜 2" isAdmin />

            <GridContainer>
              <Flex webGap={8} align="flex-end" justify="flex-start">
                <TextField label="시간" width={263} isAdmin />
                <Button variant="admin_navy" style={{ marginBottom: '4px' }}>
                  삭제
                </Button>
              </Flex>
              <Flex webGap={8} align="flex-end" justify="flex-start">
                <TextField label="시간" width={263} isAdmin />
                <Button variant="admin_navy" style={{ marginBottom: '4px' }}>
                  삭제
                </Button>
              </Flex>
              <Flex webGap={8} align="flex-end" justify="flex-start">
                <TextField label="시간" width={263} isAdmin />
                <Button variant="admin_navy" style={{ marginBottom: '4px' }}>
                  삭제
                </Button>
              </Flex>
            </GridContainer>

            <Button
              variant="admin_stroke"
              webWidth={128}
              style={{ alignSelf: 'center' }}
              onClick={handleAppendCommonQuestion}
            >
              <Flex webGap={4}>시간 추가하기</Flex>
            </Button>
          </Flex>
        </Flex>

        <Button variant="admin">저장하기</Button>
      </Flex>
    </Flex>
  );
}

const Line = styled.div`
  width: 1032px;
  height: 2px;
  background-color: ${theme.palette.Gray2};

  align-self: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 16px;
`;
