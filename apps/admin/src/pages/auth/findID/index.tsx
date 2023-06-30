import React from 'react';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../../components/Dropdown/index';

export default function findID() {
  const { setValue, watch } = useForm();

  return (
    <Flex direction="column" webGap={36}>
      <Text webTypo="Heading2">ADMIN 아이디 찾기</Text>
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
        <TextField label="이름" isAdmin />
        <TextField label="이메일" isAdmin />
      </Flex>

      <Button variant="admin" webWidth={324} webHeight={80}>
        확인하기
      </Button>
    </Flex>
  );
}
