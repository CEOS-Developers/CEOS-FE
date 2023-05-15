import { Button, theme } from '@ceos-fe/ui';
import { Header } from '@ceos-fe/ui/src/components/Header';
import { FAQBox } from '@ceos-fe/ui/src/components/FAQBox';

export default function Home() {
  const colors = ['Green', 'Skyblue', 'Yellow'];
  //api로 answer을 받아오고 거기서 줄바꿈을 하고,
  //줄바꿈 한 애들을 중앙 정렬 하려면 받아온 텍스트 사이사이에 <span>태그를 추가해야함
  //api나오면 map돌리면 될듯!
  return (
    <>
      <div>
        ceos
        <Button />
        <FAQBox color={colors[0]} isAnswer={false}>
          리쿠르팅은 언제인가요?
        </FAQBox>
        <FAQBox isAnswer={true}>
          <span>
            CEOS 18기 리크루팅이 2023 8월 중순 경에 예정되어 있습니다.
          </span>
          <span>
            자세한 사항은 학교 에브리타임 게시판 홍보글, 페이스북,
            인스타그램에서 확인해주세요.
          </span>
        </FAQBox>
        <FAQBox color={colors[1]} isAnswer={false}>
          지원 자격이 어떻게 되나요?
        </FAQBox>
        <FAQBox isAnswer={true}>
          <span>
            창업에 열정이 있는 신촌 지역 4개교 (연세대학교, 서강대학교,
            이화여자대학교, 홍익대학교)
          </span>
          <span>재학생 및 졸업생이라면 누구나 가능합니다.</span>
        </FAQBox>
        <FAQBox color={colors[2]} isAnswer={false}>
          창업 관련 프로젝트 경험이 없어도 지원이 가능한가요?
        </FAQBox>
        <FAQBox isAnswer={true}>
          <span>
            창업 관련 프로젝트 경험이 필수 지원 요건은 아니지만, 창업 외 다른
            프로젝트라도 본인이
          </span>
          <span>
            맡았던 부분과 활동을 통해 배운 점에 대해서 말씀해 주시면 됩니다.
          </span>
        </FAQBox>
      </div>
    </>
  );
}
