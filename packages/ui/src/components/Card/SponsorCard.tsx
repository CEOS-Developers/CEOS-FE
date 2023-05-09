import styled from "@emotion/styled";

export const SponsorCard = () => {
  return <Wrapper> 레퍼 </Wrapper>;
};

const Wrapper = styled.div`
  width: 572px;
  height: 633px;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    width: 768px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
