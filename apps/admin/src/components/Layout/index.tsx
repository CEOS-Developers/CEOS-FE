import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/index';
import { useRecoilState } from 'recoil';
import { loginState, accessToken } from '../../store/recoil/index';
import { NonLogin } from '../../pages/auth/nonLogin/index';
import { Cookies, useCookies } from 'react-cookie';
import { adminAuthApi, adminInstance } from 'packages/utils';
import { useMutation } from '@tanstack/react-query';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [login, setLogin] = useRecoilState<boolean>(loginState);
  const cookies = new Cookies().get('LOGIN_EXPIRES');
  const [accesstoken, setAccesstoken] = useRecoilState(accessToken);
  const [appCookies, setAppCookies] = useCookies(['LOGIN_EXPIRES']);

  if (cookies !== undefined) setLogin(true);
  else setLogin(false);

  const { mutate: getNewAccessToken } = useMutation(
    () => adminAuthApi.POST_REFRESHTOKEN(cookies),
    {
      onSuccess: (data: any) => {
        setAccesstoken(data.data.accessToken);
        adminInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.data.accessToken}`;
        if (data.data.refreshToken !== undefined)
          LoginUntilExpires(data.data.refreshToken);
      },
    },
  );

  // login cookie
  const getExpiredDate = (time: number) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + time);
    return date;
  };
  const LoginUntilExpires = (refreshToken: string) => {
    const expires = getExpiredDate(720);
    setAppCookies('LOGIN_EXPIRES', refreshToken, {
      path: '/',
      expires,
    });
  };
  useEffect(() => {
    if (appCookies['LOGIN_EXPIRES']) return;
  }, []);

  useEffect(() => {
    if (cookies !== undefined) {
      setLogin(true);
      if (accesstoken === '') {
        getNewAccessToken();
      }
    } else {
      setLogin(false);
    }
  }, [accesstoken, cookies]);

  return (
    <Container path={router.pathname}>
      {router.pathname.includes('/auth') || router.pathname === '/' ? (
        <></>
      ) : (
        <Sidebar />
      )}
      <ChildrenContainer path={router.pathname}>
        {login ? (
          accesstoken !== '' ? (
            <FlexBox path={router.pathname}>{children}</FlexBox>
          ) : (
            <NonLogin />
          )
        ) : router.pathname.includes('/auth') ? (
          <FlexBox path={router.pathname}>{children}</FlexBox>
        ) : (
          <NonLogin />
        )}
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
  margin: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${(props) => (props.path?.includes('/auth') ? '0px' : '88px 0')};
`;
