import { Flex } from '@ceos-fe/ui';
import { FAQBox } from '@ceos/components/FAQBox';
import { Header } from '@ceos/components/Header';

export default function Home() {
  return (
    <Flex direction="column">
      <FAQBox isAnswer={false} color="Green">
        지원 자격이 어떻게 되나요?
      </FAQBox>
      <FAQBox isAnswer={true}>
        창업에 열정이 있는 신촌 지역 4개교 (연세대학교, 서강대학교,
        이화여자대학교, 홍익대학교) 재학생 및 졸업생이라면 누구나 가능합니다.
      </FAQBox>
    </Flex>
  );
}
