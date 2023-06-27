import { Text, Flex, SponsorCard, SponsorCardProps } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { sponsorApi } from '@ceos-fe/utils';

export const Sponsors = () => {
  useEffect(() => {
    sponsorApi.GET_SPONSORS({ pageNum: 1, limit: 10 }).then((res) => {
      console.log(res);
    });
  });
  const sponsorCard: SponsorCardProps = {
    id: 1,
    img: 'https://ceos.snu.ac.kr/static/media/ceos_logo.5b9b9b5e.png',
    name: '서울대학교',
  };
  return (
    <div
      className="rewards"
      css={css`
        width: 100%;
      `}
    >
      <Text webTypo="Heading1_Eng" paletteColor="Blue">
        Sponsored by
      </Text>
      <Text
        webTypo="Body1"
        css={css`
          margin-top: 12px;
          margin-bottom: 32px;
        `}
      >
        CEOS 활동에 도움을 주시는 공식 파트너 단체입니다.
      </Text>
      <Flex
        css={css`
          gap: 24px;
          margin-bottom: 80px;
        `}
      >
        <SponsorCard sponsorCard={sponsorCard} />
        <SponsorCard sponsorCard={sponsorCard} />
        <SponsorCard sponsorCard={sponsorCard} />
      </Flex>
    </div>
  );
};
