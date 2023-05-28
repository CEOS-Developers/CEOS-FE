import { Dropdown, PassDropdown } from '@admin/components/Dropdown';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { setValue, watch } = useForm();

  return (
    <>
      <PassDropdown
        label="passDropdown"
        value={watch('passDropdown')}
        setValue={setValue}
        options={[
          {
            label: '합격',
            value: 'pass',
            color: '#01D1A8',
            background: '#B5F2E6',
          },
          {
            label: '불합격',
            value: 'nonpass',
            color: '#FF6262',
            background: '#FFD6D6',
          },
        ]}
      />
      <Dropdown
        label="part"
        value={watch('part')}
        setValue={setValue}
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
            label: '프론트',
            value: 'frontend',
          },
          {
            label: '백엔드',
            value: 'backend',
          },
        ]}
      />
    </>
  );
}
