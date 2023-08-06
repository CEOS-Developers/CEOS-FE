import styled from '@emotion/styled';
import { Desktop, Flex, Mobile, Text, media } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { DetailPrejectInterface, projectApi } from 'packages/utils';
import { Shortcut } from '@ceos/components/Shortcut';
import { WhiteCloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon/WhiteCloseIcon';
import Image from 'next/image';

interface ModalProps {
  id: number;
  setClose: () => void;
}

const DetailModal = ({ id, setClose }: ModalProps) => {
  const { data, isLoading, isSuccess } = useQuery<DetailPrejectInterface>(
    ['ceos', 'project', 'modal'],
    () => projectApi.GET_A_PROJECT({ id: id }),
  );

  const projectInfo = data;

  type PartKey = '기획' | '디자인' | '프론트엔드' | '백엔드';
  const Part: Record<PartKey, { eng: string; name: string[] }> = {
    기획: { eng: 'PRODUCT', name: [] as string[] },
    디자인: { eng: 'DESIGN', name: [] as string[] },
    프론트엔드: { eng: 'FRONT_END', name: [] as string[] },
    백엔드: { eng: 'BACK_END', name: [] as string[] },
  };

  projectInfo?.participants.forEach((person) => {
    const key = person.part as PartKey;
    Part[key].name = [...Part[key].name, person.name];
  });

  return (
    <div css={backCss}>
      <Desktop css={iconCss} onClick={setClose}>
        <WhiteCloseIcon />
      </Desktop>
      <Container>
        <Mobile
          css={iconCss}
          onClick={setClose}
          style={{ width: 'auto', zIndex: 10 }}
        >
          <WhiteCloseIcon fillColor="#232527" />
        </Mobile>
        {projectInfo && (
          <DetailThumbnailImageContainer>
            <Image
              alt="mainImage"
              src={projectInfo.projectImages[0].imageUrl}
              layout="fill"
              objectFit="cover"
              priority
            />
          </DetailThumbnailImageContainer>
        )}

        <Desktop style={{ width: '100%' }}>
          <Flex justify="space-between" padding="40px 64px">
            <Flex direction="column" align="start">
              <Flex webGap={24} width="auto" height="auto">
                <Text paletteColor="Blue" webTypo="Heading1_Eng">
                  {projectInfo?.name}
                </Text>
                <Text paletteColor="Gray5" webTypo="Label2">
                  {projectInfo?.generation}기
                </Text>
              </Flex>
              <Text paletteColor="Black" webTypo="Body2">
                {projectInfo?.description}
              </Text>
              <Flex width="auto" height="auto" margin="28px 0 0 0" webGap={12}>
                {projectInfo?.projectUrls.map((url) => (
                  <a href={url.linkUrl}>
                    <Shortcut>{url.category}</Shortcut>
                  </a>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column" width={300}>
              {Object.values(Part).map((val) => (
                <Flex justify="space-between">
                  <Text paletteColor="Gray5" webTypo="Label2">
                    {val.eng}
                  </Text>
                  <Flex width="auto" webGap={5}>
                    {val.name.map((item) => (
                      <Text paletteColor="Black" webTypo="Body3">
                        {item}
                      </Text>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Desktop>
        <Mobile>
          <Flex direction="column" align="start" padding="20px">
            <Flex justify="space-between">
              <Text
                paletteColor="Blue"
                mobileTypo="Heading1_Eng"
                style={{ fontWeight: 800 }}
              >
                {projectInfo?.name}
              </Text>
              <Text paletteColor="Gray5" mobileTypo="Label1">
                {projectInfo?.generation}기
              </Text>
            </Flex>
            <Text paletteColor="Black" mobileTypo="Body1">
              {projectInfo?.description}
            </Text>
            <TeamWrapper>
              {Object.values(Part).map((val) => (
                <Flex justify="space-between">
                  <Text paletteColor="Gray5" mobileTypo="Label1">
                    {val.eng}
                  </Text>
                  <Flex width="auto" mobileGap={5}>
                    {val.name.map((item) => (
                      <Text paletteColor="Black" mobileTypo="Body1">
                        {item}
                      </Text>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </TeamWrapper>
            <Flex width="auto" height="auto" margin="20px 0 0 0" mobileGap={8}>
              {projectInfo?.projectUrls.map((url) => (
                <a href={url.linkUrl}>
                  <Shortcut>{url.category}</Shortcut>
                </a>
              ))}
            </Flex>
          </Flex>
        </Mobile>

        {projectInfo && (
          <DetailImage
            alt="mainImage"
            src={projectInfo.projectImages[1].imageUrl}
          />
        )}
      </Container>
    </div>
  );
};

export default DetailModal;

export const backCss = () => css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;

  display: flex;
  justify-content: center;

  padding: 100px 0;

  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 1023px) {
    padding: 64px 22px;
  }
`;

const iconCss = () => css`
  position: relative;
  right: -1070px;

  @media (max-width: 1023px) {
    position: fixed;
    top: 79px;
    right: 32px;
  }
`;

const Container = styled.div`
  position: relative;

  width: 1032px;
  height: auto;

  border-radius: 20px;
  background: #fff;

  /* 팝업창그림자 */
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.1);

  overflow-x: auto; /* 수정: 가로 영역을 벗어나면 스크롤 표시 */
  overscroll-behavior: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const DetailThumbnailImageContainer = styled.div`
  width: 1032px;
  height: 541px;
  position: relative;
  border-radius: 20px;
  aspect-ratio: 1032 / 541;

  ${media.mobile} {
    width: 100%;
    height: auto;
  }
`;

const DetailImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const TeamWrapper = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 14px 20px;
    box-sizing: border-box;
    margin: 20px 0 0 0;
    gap: 8px;

    border-radius: 4px;
    background: var(--1, #f4f6f9);
  }
`;
