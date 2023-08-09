import { Text, SponsorCard, media, Space } from '@ceos-fe/ui';
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
  const { data } = useQuery<SponsorResponse>(
    ['ceos', 'sponsor'],
    async () =>
      await sponsorApi.GET_SPONSORS({
        pageNum: 0,
        limit: 20,
      }),
  );

  const sponsorList = data?.content;
  return (
    <div
      css={css`
        width: 100vw;
        padding: 0px 22px;
        user-select: none;
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
          width: 1032px;
          ${media.mobile} {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto 1fr;
            gap: 14px;
            justify-content: center;
            overflow-x: hidden;
          }
          gap: 24px;
          overflow-x: auto;
        `}
      >
        {sponsorList &&
          sponsorList.map((s: SponsorInterface) => (
            <SponsorCard key={s.id} sponsorCard={s} />
          ))}
      </div>

      <Space height={80} mobileHeight={60} />
    </div>
  );
};
