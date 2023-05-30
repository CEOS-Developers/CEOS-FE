import styled from '@emotion/styled';
import { Flex } from '@ceos-fe/ui';
import { Tag } from './Tag';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface ApplicationTagProps {
  register: UseFormRegister<FieldValues>;
}

/**
 * @param register: react hook form에 등록하기 위한 함수
 */
export const ApplicantTag = ({ register }: ApplicationTagProps) => {
  return (
    <Flex
      width={1272}
      backgroundColor="Gray1"
      borderRadius={8}
      webGap={40}
      padding="24px 0"
    >
      <Container>
        <Label>파트별</Label>
        <ButtonContainer>
          <Tag {...register('part')} value="strategy">
            기획
          </Tag>
          <Tag {...register('part')} value="design">
            디자인
          </Tag>
          <Tag {...register('part')} value="frontend">
            프론트
          </Tag>
          <Tag {...register('part')} value="backend">
            백엔드
          </Tag>
        </ButtonContainer>
      </Container>

      <Container>
        <Label>서류 합격 여부</Label>
        <ButtonContainer>
          <Tag {...register('documentPass')} value="documentPass">
            합격
          </Tag>
          <Tag {...register('documentPass')} value="documentNonPass">
            불합격
          </Tag>
        </ButtonContainer>
      </Container>

      <Container>
        <Label>최종 합격 여부</Label>
        <ButtonContainer>
          <Tag {...register('finalPass')} value="finalPass">
            합격
          </Tag>
          <Tag {...register('finalPass')} value="finalNonPass">
            불합격
          </Tag>
        </ButtonContainer>
      </Container>
    </Flex>
  );
};

const Container = styled(Flex)`
  width: auto;
  gap: 24px;
`;
const ButtonContainer = styled(Flex)`
  width: auto;
  gap: 12px;
`;
const Label = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
`;
