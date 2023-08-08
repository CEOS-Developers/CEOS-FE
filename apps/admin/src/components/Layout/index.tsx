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
  const [login, setLogin] = useRecoilState<boolean>(loginState);
  const [loading, setLoading] = useState<boolean>(true);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [appCookies, setAppCookies] = useCookies(['LOGIN_EXPIRES']);

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
    },
  );

  // login cookie
  const getUTCExpiredDate = (time: number) => {
    const date = new Date();
    date.setTime(date.getTime() + time * 60 * 1000);
    return date.toISOString();
  };
  const LoginUntilExpires = (refreshToken: string) => {
    const expires = getUTCExpiredDate(720);
    setAppCookies('LOGIN_EXPIRES', refreshToken, {
      path: '/',
      expires: new Date(expires),
    });
  };
  useEffect(() => {
    if (appCookies['LOGIN_EXPIRES']) return;
  }, []);

  useEffect(() => {
    if (login && router.pathname.includes('/auth')) {
      getNewAccessToken();
      router.push('/applyStatement');
    }

    if (
      !login ||
      (login && accessToken === '' && !router.pathname.includes('/auth'))
    ) {
      router.push('/auth');
    }
  }, [login, cookies]);

  useEffect(() => {
    if (appCookies['LOGIN_EXPIRES']) {
      if (accessToken === '') {
        console.log('accesstoken 없음');
        getNewAccessToken();
      } else {
        console.log('accesstoken 있음');
        setLogin(true);
        setLoading(false);
      }
    } else {
      setLogin(false);
      setLoading(false);
    }
  }, [accessToken, cookies]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container path={router.pathname}>
      {router.pathname.includes('/auth') || router.pathname === '/' ? (
        <></>
      ) : (
        <Sidebar />
      )}

      <ChildrenContainer path={router.pathname}>
        <FlexBox path={router.pathname}>{children}</FlexBox>
      </ChildrenContainer>
    </Container>
  );
};

const Container = styled.div<{ path?: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${({ path }) =>
    path?.includes('/auth') || path === '/' ? 'center' : 'auto'};
  justify-content: ${({ path }) =>
    path?.includes('/auth') || path === '/' ? 'center' : ''};
`;

const ChildrenContainer = styled.div<{ path?: string }>`
  margin-left: ${({ path }) =>
    path?.includes('/auth') || path === '/' ? 0 : 'max(16.5%, 200px)'};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div<{ path?: string }>`
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: ${(props) => (props.path?.includes('/auth') ? '0px' : '88px 0')};
`;
