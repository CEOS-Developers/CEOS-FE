import { Text, SponsorCard, Mobile, media, Space } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { sponsorApi } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

interface SponsorInterface {
  id: number;
  name: string;
  imageUrl: string;
}

interface SponsorResponse {
  content: SponsorInterface[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const Sponsors = () => {
  const { data } = useQuery<SponsorResponse>(
    ['ceos', 'sponsor'],
    async () =>
      await sponsorApi.GET_SPONSORS({
        pageNum: 0,
        limit: 4,
      }),
  );

  const sponsorList = data?.content;

  useEffect(() => {
    console.log(sponsorList);
  }, [sponsorList]);

  const sponsorList = data?.content;
  return (
    <div
      css={css`
        width: 100vw;
        padding: 0px 22px;
      `}
    >
      <Space height={80} mobileHeight={60} />
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
        `}
      >
        CEOS 활동에 도움을 주시는 공식 파트너 단체입니다.
      </Text>
      <Space height={32} mobileHeight={24} />
      <div
        css={css`
          display: flex;
          ${media.mobile} {
            display: none;
          }
          gap: 24px;
          display: flex;
          margin-top: 32px;
        `}
      >
        {sponsorList &&
          sponsorList
            .slice(0, 3)
            .map((s: SponsorInterface) => (
              <SponsorCard key={s.id} sponsorCard={s} />
            ))}
      </div>
      <Mobile
        css={css`
          width: 100%;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: auto 1fr;
          gap: 14px;
          justify-content: center;
        `}
      >
        {sponsorList &&
          sponsorList
            .slice(0, 4)
            .map((s: SponsorInterface) => (
              <SponsorCard key={s.id} sponsorCard={s} />
            ))}
      </Mobile>
      <Space height={80} mobileHeight={60} />
    </div>
  );
};
