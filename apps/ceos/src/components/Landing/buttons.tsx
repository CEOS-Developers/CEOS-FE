import { MiniBgImg } from '@ceos/assets/bgImage';
import { GlassShortcut } from '../Shortcut';
import { BgCss, BtnCss } from '@ceos/styles/landing';
import Link from 'next/link';

export const Buttons = () => {
  return (
    <div css={BgCss}>
      <MiniBgImg />
      <div css={BtnCss}>
        <Link href={'/project'}>
          <GlassShortcut>프로젝트 확인하기</GlassShortcut>
        </Link>
        <Link href={'/management'}>
          <GlassShortcut>운영진 보러가기</GlassShortcut>
        </Link>
        <Link href={'/recruit'}>
          <GlassShortcut>지원하기</GlassShortcut>
        </Link>
      </div>
    </div>
  );
};
