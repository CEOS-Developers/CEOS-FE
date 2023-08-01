import { Text, SponsorCard, Mobile } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { sponsorApi } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';

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
  const { data } = useQuery<SponsorResponse>(['ceos', 'sponsor'], async () => {
    const res = await sponsorApi.GET_SPONSORS({
      pageNum: 0,
      limit: 10,
    });
    return res;
  });

  const sponsorList = data?.content;
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
        `}
      >
        CEOS 활동에 도움을 주시는 공식 파트너 단체입니다.
      </Text>

      <div
        css={css`
          display: flex;
          @media (max-width: 1023px) {
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
          width: 346px;
          flex-wrap: wrap;
          gap: 14px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 32px;
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
