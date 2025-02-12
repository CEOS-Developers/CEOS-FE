import styled from '@emotion/styled';
import { Desktop, Flex, Mobile, Text, media } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { DetailProjectInterface, projectApi } from 'packages/utils';
import { Shortcut } from '@ceos/components/Shortcut';
import { WhiteCloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon/WhiteCloseIcon';
import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
  id: number;
  setClose: () => void;
}

const LINK: Record<string, string> = {
  서비스: 'Link',
  깃허브: 'GitHub',
  비핸스: 'Behance',
  인스타: 'Instagram',
};

const DetailModal = ({ id, setClose }: ModalProps) => {
  const { data, isLoading, isSuccess } = useQuery<DetailProjectInterface>(
    ['ceos', 'project', 'modal', id],
    () => projectApi.GET_A_PROJECT({ id: id }),
  );

  const projectInfo = data;

  type PartKey = '기획' | '디자인' | '프론트엔드' | '백엔드';
  const Part: Record<PartKey, { eng: string; name: string[] }> = {
    기획: { eng: 'PRODUCT', name: [] as string[] },
    디자인: { eng: 'DESIGN', name: [] as string[] },
    프론트엔드: { eng: 'FRONT-END', name: [] as string[] },
    백엔드: { eng: 'BACK-END', name: [] as string[] },
  };

  projectInfo?.participants.forEach((person) => {
    const key = person.part as PartKey;
    if (person.name !== '') {
      Part[key].name = [...Part[key].name, person.name];
    }
  });

  return (
    <Flex css={containerCss}>
      <div css={backCss} onClick={setClose}></div>

      {!isLoading && isSuccess && (
        <>
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
                  layout="responsive"
                  objectFit="cover"
                  priority
                  width={1032}
                  height={0}
                  css={css`
                    width: 1032px;
                    height: auto;
                    // ${media.mobile} {
                    //   width: 100%;
                    // }
                  `}
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
                  <Flex
                    width="auto"
                    height="auto"
                    margin="28px 0 0 0"
                    webGap={12}
                  >
                    {projectInfo?.projectUrls.map((url, idx) => (
                      <Link href={url.linkUrl} target="_blank" key={idx}>
                        <Shortcut>{LINK[url.category]}</Shortcut>
                      </Link>
                    ))}
                  </Flex>
                </Flex>
                <Flex direction="column" width={300}>
                  {Object.values(Part).map((val, idx) => (
                    <Flex justify="space-between" key={idx}>
                      <Text paletteColor="Gray5" webTypo="Label2">
                        {val.eng}
                      </Text>
                      <Flex width="auto" webGap={5}>
                        {val.name.map((item, idx) => (
                          <Text paletteColor="Black" webTypo="Body3" key={idx}>
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
                  {Object.values(Part).map((val, idx) => (
                    <Flex justify="space-between" key={idx}>
                      <Text paletteColor="Gray5" mobileTypo="Label1">
                        {val.eng}
                      </Text>
                      <Flex width="auto" mobileGap={5}>
                        {val.name.map((item, idx) => (
                          <Text
                            paletteColor="Black"
                            mobileTypo="Body1"
                            key={idx}
                          >
                            {item}
                          </Text>
                        ))}
                      </Flex>
                    </Flex>
                  ))}
                </TeamWrapper>
                <Flex
                  width="auto"
                  height="auto"
                  margin="20px 0 0 0"
                  justify="flex-start"
                  mobileGap={8}
                  style={{
                    flexWrap: 'wrap',
                  }}
                >
                  {projectInfo?.projectUrls.map((url, idx) => (
                    <Link href={url.linkUrl} target="_blank" key={idx}>
                      <Shortcut>{LINK[url.category]}</Shortcut>
                    </Link>
                  ))}
                </Flex>
              </Flex>
            </Mobile>

            {projectInfo && (
              <DetailImageContainer>
                <DetailImage
                  alt="mainImage"
                  src={projectInfo.projectImages[1].imageUrl}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </DetailImageContainer>
            )}
          </Container>
        </>
      )}
    </Flex>
  );
};

export default DetailModal;

const containerCss = () => css`
  z-index: 15;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 70px 50px;

  ${media.mobile} {
    padding: 64px 22px;
  }
`;

export const backCss = () => css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.5);
`;

const iconCss = () => css`
  position: relative;
  right: -1055px;

  z-index: 20;

  @media (max-width: 1160px) {
    position: fixed;
    top: 85px;
    right: 90px;
  }

  ${media.mobile} {
    display: block;
    position: fixed;
    top: 79px;
    right: 32px;
  }
`;

const Container = styled.div`
  position: relative;
  right: 15px;

  width: 1032px;
  height: 90vh;
  // max-height: 90vh;

  border-radius: 20px;
  background: #fff;

  z-index: 15;

  /* 팝업창그림자 */
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.1);

  overflow: auto; /* 수정: 가로 영역을 벗어나면 스크롤 표시 */

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1160px) {
    margin-left: 26px;
  }

  ${media.mobile} {
    margin-left: 0px;
    width: 100%;
    right: 0px;
  }
`;

const DetailThumbnailImageContainer = styled.div`
  width: 100%;
  max-width: 1032px;
  height: auto;
  position: relative;
  border-radius: 20px;
  aspect-ratio: 1032 / 541;

  margin-bottom: 50px;

  ${media.mobile} {
    width: 100%;
    height: auto;
  }
`;

const DetailImage = styled(Image)`
  /* position: relative !important; */
  height: auto !important;
`;

const DetailImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const TeamWrapper = styled.div`
  ${media.mobile} {
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
