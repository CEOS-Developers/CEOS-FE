import styled from '@emotion/styled';
import { Button, Flex, Text, TextField, theme } from '@ceos-fe/ui';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { authApi, signInInterface } from '@ceos-fe/utils';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessToken } from '@admin/store/recoil';

export default function SignIn() {
  const router = useRouter();
  const { mutate: postSignInMutation } = useMutation(authApi.SIGN_IN);
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useRecoilState<string>(accessToken);

  const onSubmit = (data: any) => {
    const SignIndataForm: signInInterface = {
      username: data.username,
      password: data.password,
    };
    postSignInMutation(SignIndataForm, {
      onSuccess: (res: { accessToken: string }) => {
        alert('로그인 성공');
        router.push('/');
        setToken(res.accessToken);
      },
      onError: () => {
        alert('아이디와 비밀번호를 다시 확인해주세요');
      },
    });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Text webTypo="Heading1_Eng">CEOS ADMIN</Text>
        <Flex direction="column" webGap={24}>
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
        <Flex webGap={24}>
          <StyledLink href="/auth/findID">아이디 찾기</StyledLink>|
          <StyledLink href="/auth/findPW">비밀번호 찾기</StyledLink>|
          <StyledLink href="/auth/signUp">회원가입</StyledLink>
        </Flex>
      </Text>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.palette.Gray5};
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 0 0 24px 0;
  align-items: center;
`;
