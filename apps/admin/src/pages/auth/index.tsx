import styled from '@emotion/styled';
import { Button, Flex, Text, TextField, theme } from '@ceos-fe/ui';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { adminAuthApi, signInInterface } from '@ceos-fe/utils';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, loginState } from '@admin/store/recoil';
import { StyledForm } from '@admin/styles/common';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { adminInstance } from '@ceos-fe/utils';
import { Loading } from '@admin/components/Loading';

export default function SignIn() {
  const router = useRouter();
  const { mutate: postSignInMutation } = useMutation(adminAuthApi.SIGN_IN);
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useRecoilState<string>(accessTokenState);
  const [login, setLogin] = useRecoilState<boolean>(loginState);
  const [appCookies, setAppCookies] = useCookies(['LOGIN_EXPIRES']);

  useEffect(() => {
    // \if (login === true)
    if (token !== '')
      adminInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
  }, [token]);
  // }, [login]);

  const onSubmit = (data: any) => {
    const SignIndataForm: signInInterface = {
      username: data.username,
      password: data.password,
    };
    postSignInMutation(SignIndataForm, {
      onSuccess: (res: { accessToken: string; refreshToken: string }) => {
        alert('로그인 성공');
        router.push('/applyStatement');
        setToken(res.accessToken);
        setLogin(true);
        if (res.refreshToken !== undefined) LoginUntilExpires(res.refreshToken);
      },
      onError: (err: any) => {
        if (err.response.data.reason === '토큰이 존재하지 않습니다')
          alert('접근 권한이 없습니다');
        else alert('아이디와 비밀번호를 다시 확인해주세요');
      },
    });
  };

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
    if (appCookies['LOGIN_EXPIRES']) return;
  }, []);

  return !login ? (
    <p>
      <StyledForm onSubmit={handleSubmit(onSubmit)} padding="0 0 24px 0">
        <Text webTypo="Heading1_Eng">CEOS ADMIN</Text>
        <Flex direction="column" webGap={24} mobileGap={24}>
          <TextField label="ID" isAdmin {...register('username')} />
          <TextField
            type="password"
            label="PW"
            isAdmin
            {...register('password')}
          />
        </Flex>
        <div>
          <Button variant="admin" webWidth={324}>
            로그인하기
          </Button>
        </div>
      </StyledForm>
      <Text webTypo="Label3" paletteColor="Gray5">
        <Flex webGap={24} mobileGap={24}>
          <StyledLink href="/auth/findID">아이디 찾기</StyledLink>|
          <StyledLink href="/auth/findPW">비밀번호 찾기</StyledLink>|
          <StyledLink href="/auth/signUp">회원가입</StyledLink>
        </Flex>
      </Text>
    </p>
  ) : (
    <Loading />
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.palette.Gray5};
`;
