import { Dropdown } from '@admin/components/Dropdown';
import { useForm } from 'react-hook-form';
import { AdminRewardCard, theme } from '@ceos-fe/ui';
import { ImageUploader } from '@admin/components/ImageUploader';
import { useEffect } from 'react';

export default function Home() {
  const { setValue, watch, getValues, register } = useForm();

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
    </>
  );
}
