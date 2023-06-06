import { Dropdown } from '@admin/components/Dropdown';
import { useForm } from 'react-hook-form';
import { theme } from '@ceos-fe/ui';

export default function Home() {
  const { setValue, watch } = useForm();

  return (
    <>
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
    </>
  );
}
