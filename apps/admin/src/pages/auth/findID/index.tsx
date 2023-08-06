import React, { useState } from 'react';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../../components/Dropdown/index';
import { useMutation } from '@tanstack/react-query';
import {
  adminAuthApi,
  findIdInterface,
} from '../../../../../../packages/utils'; //절대경로 수정필요
import Link from 'next/link';
import { StyledForm } from '@admin/styles/common';
import { PartDropdownList } from '@admin/assets/data/dropDownList';

export default function findID() {
  const [id, setId] = useState<string>('');
  const { setValue, watch, register, handleSubmit } = useForm();
  const { mutate: findIdMutation } = useMutation(adminAuthApi.FIND_ID);

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
      onError: () => alert('입력 정보를 다시 확인해주세요'),
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Text webTypo="Heading2" mobileTypo="Heading2">
        ADMIN 아이디 찾기
      </Text>
      {id === '' ? (
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
          </Flex>
        </>
      ) : (
        <Text
          webTypo="Body1"
          mobileTypo="Body1"
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
