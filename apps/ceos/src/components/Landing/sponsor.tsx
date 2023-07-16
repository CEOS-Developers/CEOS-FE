import {
  Text,
  Flex,
  SponsorCard,
  SponsorCardProps,
  Desktop,
  Mobile,
} from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { ResponseInterface, sponsorApi } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';

interface SponsorInterface {
  id: number;
  name: string;
  img: string;
}

interface SponsorResponse {
  sponsors: SponsorInterface[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const Sponsors = () => {
  const { data } = useQuery<{
    sponsorData: ResponseInterface<SponsorResponse>;
  }>(['ceos', 'sponsor'], async () => {
    const sponsorData = await sponsorApi.GET_SPONSORS({ pageNum: 0, limit: 4 });

    return sponsorData;
  });

  const sponsorList = data?.sponsors;

  return (
    <div
      className="rewards"
      css={css`
        width: 100vw;
        margin-bottom: 80px;

        @media (max-width: 1023px) {
          margin-bottom: 60px;
          width: 716px;
        }

        @media (max-width: 390px) {
          margin-bottom: 60px;
          width: 346px;
        }
      `}
    >
      <Text
        webTypo="Heading1_Eng"
        mobileTypo="Heading1_Eng"
        paletteColor="Blue"
      >
        Sponsored by
      </Text>
      <Text
        webTypo="Body1"
        mobileTypo="Body1"
        css={css`
          margin-top: 12px;
          margin-bottom: 32px;
        `}
      >
        CEOS 활동에 도움을 주시는 공식 파트너 단체입니다.
      </Text>

      <Desktop
        css={css`
          gap: 24px;
          display: flex;
        `}
      >
        {sponsorList &&
          sponsorList
            .slice(0, 3)
            .map((s: SponsorInterface) => (
              <SponsorCard key={s.id} sponsorCard={s} />
            ))}
      </Desktop>
      <Mobile
        css={css`
          width: 346px;
          flex-wrap: wrap;
          gap: 14px;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        {sponsorList &&
          sponsorList
            .slice(0, 4)
            .map((s: SponsorInterface) => (
              <SponsorCard key={s.id} sponsorCard={s} />
            ))}
      </Mobile>
    </div>
  );
};
