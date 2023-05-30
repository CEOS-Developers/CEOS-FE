import { ExtraButton } from '@admin/components/ExtraButton';
import { AdminTextField, RemovableTextField } from '@ceos-fe/ui';
import { Flex } from '@ceos-fe/ui';

export default function Home() {
  return (
    <Flex direction="column">
      <ExtraButton
        buttonList={[
          { label: '수정하기', handleClick: () => console.log('수정') },
          { label: '삭제하기', handleClick: () => console.log('삭제') },
        ]}
      />
      <RemovableTextField
        width={1092}
        gap={12}
        multiline
        handleClick={() => console.log('admin')}
      />
      <AdminTextField label="ID" placeholder="아이디를 입력해주세요" />
    </Flex>
  );
}
