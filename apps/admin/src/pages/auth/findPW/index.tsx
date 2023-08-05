import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../../components/Dropdown/index';
import { useMutation } from '@tanstack/react-query';
import { adminAuthApi, findPwInterface } from '@ceos-fe/utils';
import React, { useState } from 'react';
import Link from 'next/link';
import { StyledForm } from '@admin/styles/common';
import { PartDropdownList } from '@admin/assets/data/dropDownList';

export default function findPW() {
  const [sentEmail, setSentEmail] = useState(false);
  const { setValue, watch, register, handleSubmit } = useForm();
  const { mutate: findPwMutation } = useMutation(adminAuthApi.FIND_PW);

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
      onError: (err: any) => alert(err.response.data.reason),
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Text webTypo="Heading2" mobileTypo="Heading2">
        ADMIN 비밀번호 찾기
      </Text>
      {!sentEmail ? (
        <>
          <Dropdown
            options={PartDropdownList}
            label="partDropdown"
            setValue={setValue}
            value={watch('partDropdown')}
            placeholder="파트 선택"
            width={152}
          />
          <Flex
            webGap={24}
            mobileGap={24}
            direction="column"
            padding="0 0 28px 0"
          >
            <TextField label="이름" isAdmin {...register('name')} />
            <TextField label="이메일" isAdmin {...register('email')} />
            <TextField label="ID" isAdmin {...register('username')} />
          </Flex>
        </>
      ) : (
        <Text
          webTypo="Body1"
          mobileTypo="Body1"
          style={{ padding: '150px 0', textAlign: 'center' }}
        >
          입력하신 이메일로 랜덤 비밀번호를
          <br /> 발송하였습니다.
        </Text>
      )}

      {!sentEmail ? (
        <div>
          <Button variant="admin" webWidth={324} mobileWidth={324}>
            확인하기
          </Button>
        </div>
      ) : (
        <Link href="/auth">
          <Button variant="admin" webWidth={324} mobileWidth={324}>
            로그인하기
          </Button>
        </Link>
      )}
    </StyledForm>
  );
}
