import { Dropdown } from '@admin/components/Dropdown';
import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

export const SignUp = () => {
  const { setValue, watch } = useForm();

  return (
    <Flex direction="column" webGap={36}>
      <Text webTypo="Heading2">ADMIN 회원가입</Text>
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
      <Flex direction="column" webGap={24} padding="0 0 12px 0">
        <TextField label="이름" isAdmin />
        <TextField label="이메일" isAdmin />
        <TextField label="ID" isAdmin right={true} />
        <TextField label="PW" isAdmin />
      </Flex>
      <Button variant="admin_navy" webWidth={324} webHeight={46}>
        로그인하기
      </Button>
    </Flex>
  );
};
