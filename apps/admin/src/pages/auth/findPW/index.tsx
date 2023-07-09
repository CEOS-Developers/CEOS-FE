import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../../components/Dropdown/index';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { authApi, findPwInterface } from '../../../../../../packages/utils';
import React, { useState } from 'react';
import Link from 'next/link';

export default function findPW() {
  const [sentEmail, setSentEmail] = useState(false);
  const { setValue, watch, register, handleSubmit } = useForm();
  const { mutate: findPwMutation } = useMutation(authApi.FIND_PW);

  const onSubmit = (data: any) => {
    const findPwdata: findPwInterface = {
      name: data.name,
      email: data.email,
      username: data.username,
      part: data.partDropdown?.label,
    };

    findPwMutation(findPwdata, {
      onSuccess: (res: { status: number }) => {
        res.status == 201 ? setSentEmail(true) : setSentEmail(false);
      },
      onError: (err: { response: { data: { reason: string } } }) => {
        alert(err.response.data.reason);
      },
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Text webTypo="Heading2">ADMIN 비밀번호 찾기</Text>
      {!sentEmail ? (
        <>
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
          <Flex webGap={24} direction="column" padding="0 0 28px 0">
            <TextField label="이름" isAdmin {...register('name')} />
            <TextField label="이메일" isAdmin {...register('email')} />
            <TextField label="ID" isAdmin {...register('username')} />
          </Flex>
        </>
      ) : (
        <Text
          webTypo="Body1"
          style={{ padding: '150px 0', textAlign: 'center' }}
        >
          입력하신 이메일로 랜덤 비밀번호를
          <br /> 발송하였습니다.
        </Text>
      )}

      {!sentEmail ? (
        <div>
          <Button variant="admin" webWidth={324}>
            확인하기
          </Button>
        </div>
      ) : (
        <Link href="/auth">
          <Button variant="admin" webWidth={324}>
            로그인하기
          </Button>
        </Link>
      )}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
`;
