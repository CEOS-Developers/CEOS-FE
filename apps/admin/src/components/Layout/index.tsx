import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/index';
import { useRecoilState } from 'recoil';
import { loginState, accessTokenState } from '../../store/recoil/index';
import { Cookies, useCookies } from 'react-cookie';
import { adminAuthApi, adminInstance } from 'packages/utils';
import { useMutation } from '@tanstack/react-query';
import { Loading } from '../Loading';
import { useState } from 'react';

const cookies = new Cookies().get('LOGIN_EXPIRES');

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [login, setLogin] = useRecoilState<boolean>(loginState);
  const [loading, setLoading] = useState<boolean>(true);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [appCookies, setAppCookies, removeAppCookies] = useCookies([
    'LOGIN_EXPIRES',
  ]);

  const { mutate: getNewAccessToken } = useMutation(
    () => adminAuthApi.POST_REFRESHTOKEN(cookies),
    {
      onSuccess: (data: any) => {
        setLogin(true);
        setLoading(false);
        setAccessToken(data.data.accessToken);
        adminInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.data.accessToken}`;
        if (data.data.refreshToken !== undefined)
          LoginUntilExpires(data.data.refreshToken);
      },
      onError: (err: any) => {
        // 일단 404에 대해서만 로그아웃 처리
        if (err.response.status === 404) {
          setLogin(false);
          setLoading(false);
          setAccessToken('');
          removeAppCookies('LOGIN_EXPIRES', { path: '/' });
        }
      },
    },
  );

  // login cookie
  const getUTCExpiredDate = (weeks: number) => {
    const date = new Date();
    date.setTime(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
    return date.toISOString();
  };
  const LoginUntilExpires = (refreshToken: string) => {
    const expires = getUTCExpiredDate(2);
    setAppCookies('LOGIN_EXPIRES', refreshToken, {
      path: '/',
      expires: new Date(expires),
    });
  };
  useEffect(() => {
    // 쿠키가 있고 엑세스 토큰이 없는 경우 새 토큰 요청
    if (appCookies['LOGIN_EXPIRES'] && !accessToken) {
      getNewAccessToken();
    } else {
      setLogin(!!appCookies['LOGIN_EXPIRES']);
      setLoading(false);

      // 로그인 상태에 따른 리디렉션 처리
      if (login && accessToken && router.pathname.includes('/auth')) {
        router.push('/applyStatement');
      } else if (!login && !router.pathname.includes('/auth')) {
        router.push('/auth');
      }
    }
  }, [accessToken, appCookies, getNewAccessToken, login, router]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container path={router.pathname}>
      {router.pathname.includes('/auth') || router.pathname === '/' ? (
        <></>
      ) : (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      )}

      <ChildrenContainer path={router.pathname} isOpen={isOpen}>
        <FlexBox path={router.pathname}>{children}</FlexBox>
      </ChildrenContainer>
    </Container>
  );
};

const Container = styled.div<{ path?: string }>`
  height: 100vh;
  display: flex;
  flex-direction: ${({ path }) =>
    path?.includes('/auth') || path === '/' ? 'column' : 'row-reverse'};
  align-items: ${({ path }) =>
    path?.includes('/auth') || path === '/' ? 'center' : 'auto'};
  justify-content: ${({ path }) =>
    path?.includes('/auth') || path === '/' ? 'center' : ''};
`;

const ChildrenContainer = styled.div<{ path?: string; isOpen: boolean }>`
  /* margin-left: ${({ path }) =>
    path?.includes('/auth') || path === '/' ? 0 : 'max(16.5%, 200px)'}; */
  width: ${({ isOpen }) => (isOpen ? '83.5%' : '100%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s ease-in-out;
`;

const FlexBox = styled.div<{ path?: string }>`
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: ${(props) => (props.path?.includes('/auth') ? '0px' : '88px 0')};
`;
