import React from 'react';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../../components/Dropdown'; //절대 경로 수정 필요
import styled from '@emotion/styled';
import { authApi, signUpInterface } from '@ceos-fe/utils';
import { useMutation } from '@tanstack/react-query';

export default function SignUp() {
  const { setValue, watch, register, handleSubmit } = useForm();
  const { mutate: postSignUpMutation } = useMutation(authApi.SIGN_UP);

  const onSubmit = (data: any) => {
    const dataForm: signUpInterface = {
      name: data.name,
      email: data.email,
      username: data.username,
      password: data.password,
      part: data.partDropdown.label,
    };
    postSignUpMutation(dataForm);
  };

  return (
    <Flex direction="column" webGap={36}>
      <Text webTypo="Heading2">ADMIN 회원가입</Text>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Dropdown
          options={[
            {
              label: '기획',
              value: 'strategy',
            },
            {
              label: '디자인',
              value: 'design',
            },
            {
              label: '프론트엔드',
              value: 'frontend',
            },
            {
              label: '백엔드',
              value: 'backend',
            },
          ]}
          label="partDropdown"
          setValue={setValue}
          value={watch('partDropdown')}
          placeholder="파트 선택"
          width={152}
        />

        <TextField label="이름" isAdmin {...register('name')} />
        <TextField label="이메일" isAdmin {...register('email')} />
        <Flex webGap={8} align="flex-end">
          <TextField label="ID" isAdmin width={236} {...register('username')} />
          <Flex height={40} width={84}>
            <Button variant="admin_stroke">중복 확인</Button>
          </Flex>
        </Flex>
        <TextField label="PW" isAdmin {...register('password')} />

        <div className="button-container">
          <Button variant="admin" webWidth={324} type="submit">
            가입하기
          </Button>
        </div>
      </StyledForm>
    </Flex>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .button-container {
    padding: 24px 0 0 0;
  }
`;
