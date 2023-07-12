import React, { useState } from 'react';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../../components/Dropdown'; //절대 경로 수정 필요
import {
  authApi,
  // authDataFormInterface,
  signUpInterface,
} from '@ceos-fe/utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { StyledForm } from '@admin/styles/common';
import { PartDropdownList } from '@admin/assets/data/dropDownList';

export default function SignUp() {
  const router = useRouter();
  const [checkId, setCheckId] = useState<boolean>(false);
  const { setValue, watch, register, handleSubmit } = useForm();
  // const { handleSubmit } = useForm<authDataFormInterface>();
  // defaultValues: {
  //   name: '',
  //   email: '',
  //   password: '',
  //   partDropdown: { label: '', value: '' },
  //   username: '',
  // },

  const { mutate: postSignUpMutation } = useMutation(authApi.SIGN_UP, {
    onSuccess: () => {
      alert('회원가입 완료');
      router.push('/auth');
    },
    //회원가입시 파트를 선택하지않아 오류 발생
    onError: (err: { response: { status: number } }) => {
      if (err.response.status == 500) {
        alert('파트를 선택해주세요');
      }
    },
  });
  const { mutate: postUserIDMutation } = useMutation(authApi.CHECK_ID, {
    onSuccess: () => {
      setCheckId(true);
      alert('사용 가능한 아이디입니다.');
    },
    onError: () => {
      setCheckId(false);
      alert('이미 사용중인 아이디입니다.');
    },
  });

  // 회원가입
  const onSubmit = (data: any) => {
    const dataForm: signUpInterface = {
      name: data.name,
      email: data.email,
      username: data.username,
      password: data.password,
      part: data.partDropdown?.label,
    };

    if (
      checkId &&
      dataForm.name != '' &&
      dataForm.email != '' &&
      dataForm.part != '' &&
      dataForm.password != '' &&
      dataForm.username != null
    ) {
      postSignUpMutation(dataForm);
    } else if (!checkId) {
      alert('아이디 중복 여부를 다시 확인해주세요'); //텍스트 수정 필요
    } else {
      alert('회원정보를 다시 확인해주세요');
    }
  };
  // 아이디 중복 확인
  const CheckID = (data: any) => {
    const userID = data.username;
    postUserIDMutation(userID);
  };

  return (
    <Flex direction="column" webGap={36}>
      <Text webTypo="Heading2">ADMIN 회원가입</Text>
      <StyledForm onSubmit={handleSubmit(onSubmit)} webGap={24}>
        <Dropdown
          options={PartDropdownList}
          label="partDropdown"
          setValue={setValue}
          value={watch('partDropdown')}
          placeholder="파트 선택"
          width={152}
        />

        <TextField label="이름" isAdmin {...register('name')} />
        <TextField type="email" label="이메일" isAdmin {...register('email')} />
        <Flex webGap={8} align="flex-end">
          <TextField label="ID" isAdmin width={236} {...register('username')} />
          <Flex height={40} width={84} onClick={handleSubmit(CheckID)}>
            <Button variant="admin_stroke">중복 확인</Button>
          </Flex>
        </Flex>
        <TextField
          type="password"
          label="PW"
          isAdmin
          {...register('password')}
        />

        <div className="button-container">
          <Button variant="admin" webWidth={324} type="submit">
            가입하기
          </Button>
        </div>
      </StyledForm>
    </Flex>
  );
}
