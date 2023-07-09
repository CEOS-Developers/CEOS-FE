import React, { useState } from 'react';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../../components/Dropdown/index';
import { useMutation } from '@tanstack/react-query';
import { authApi, findIdInterface } from '../../../../../../packages/utils'; //절대경로 수정필요
import styled from '@emotion/styled';
import Link from 'next/link';

export default function findID() {
  const [id, setId] = useState<string>('');
  const { setValue, watch, register, handleSubmit } = useForm();
  const { mutate: findIdMutation } = useMutation(authApi.FIND_ID);

  const onSubmit = (data: any) => {
    const findIDdata: findIdInterface = {
      name: data.name,
      email: data.email,
      part: data.partDropdown?.label,
    };

    findIdMutation(findIDdata, {
      onSuccess: (res: {
        status: number;
        data: { username: React.SetStateAction<string> };
      }) => (res.status == 201 ? setId(res.data.username) : setId('')),
      onError: (err: { response: { data: { reason: string } } }) => {
        alert(err.response.data.reason);
      },
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Text webTypo="Heading2">ADMIN 아이디 찾기</Text>
      {id === '' ? (
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
          </Flex>
        </>
      ) : (
        <Text
          webTypo="Body1"
          style={{ padding: '150px 0', textAlign: 'center' }}
        >
          아이디는 <br />
          {id}
          <br />
          입니다.
        </Text>
      )}

      {id === '' ? (
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
