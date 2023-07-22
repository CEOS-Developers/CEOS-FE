import { Text, SponsorCard } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { sponsorApi } from '@ceos-fe/utils';
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
  const { data } = useQuery<SponsorResponse>(
    ['ceos', 'sponsor'],
    async () =>
      await sponsorApi.GET_SPONSORS({
        pageNum: 0,
        limit: 4,
      }),
  );

  const sponsorList = data?.sponsors;

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
      <div
        css={css`
          display: flex;
          gap: 24px;
          margin-bottom: 80px;
        `}
      >
        {sponsorList &&
          sponsorList
            .slice(0, 3)
            .map((s: SponsorInterface) => (
              <SponsorCard key={s.id} sponsorCard={s} />
            ))}
      </div>
    </div>
  );
};
