import { Dropdown } from '@admin/components/Dropdown';
import { useForm } from 'react-hook-form';
import { Flex, theme } from '@ceos-fe/ui';

export default function Home() {
  const { setValue, watch } = useForm();

  return (
    <Flex direction="column">
      <Dropdown
        options={[
          {
            label: '합격',
            value: 'pass',
            background: theme.palette.Admin.Green2,
            color: theme.palette.Admin.Green1,
          },
          {
            label: '불합격',
            value: 'nonpass',
            background: theme.palette.Admin.Red2,
            color: theme.palette.Admin.Red1,
          },
        ]}
        label="passDropdown"
        setValue={setValue}
        value={watch('passDropdown')}
        placeholder="선택"
      />
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
    </Flex>
  );
}
