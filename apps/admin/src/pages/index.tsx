import { Dropdown } from '@admin/components/Dropdown';

export default function Home() {
  return (
    <>
      <Dropdown
        options={[
          {
            label: '합격',
            value: 'pass',
            handleClick: () => console.log('합격'),
            color: '#01D1A8',
            background: '#B5F2E6',
          },
          {
            label: '불합격',
            value: 'nonpass',
            handleClick: () => console.log('불합격'),
            color: '#FF6262',
            background: '#FFD6D6',
          },
        ]}
      />
    </>
  );
}
