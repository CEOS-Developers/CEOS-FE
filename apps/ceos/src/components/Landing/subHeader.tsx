import { Logo } from '@ceos/assets/logo';
import { BgImage } from '@ceos/assets/bgImage';
import { MainCss, BgText } from '@ceos/styles/landing';
import { Text } from '@ceos-fe/ui';

export const SubHeader = () => {
  return (
    <div css={MainCss}>
      <BgImage />
      <div css={BgText}>
        <Text webTypo="Heading2" mobileTypo="Heading1_Kor" paletteColor="White">
          신촌 연합 IT 창업동아리
        </Text>
        <Logo
          backColor="White"
          width={310}
          height={120}
          marginLeft={0}
          className="small"
        />
      </div>
    </div>
  );
};
