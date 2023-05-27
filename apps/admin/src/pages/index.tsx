import { ExtraButton } from '@admin/components/ExtraButton';
import { Flex } from '@ceos-fe/ui/src/components/common/Wrapper';

export default function Home() {
  return (
    <Flex direction="column">
      <ExtraButton
        buttonList={[
          { label: '수정하기', handleClick: () => console.log('수정') },
          { label: '삭제하기', handleClick: () => console.log('삭제') },
        ]}
      />
      <ExtraButton
        buttonList={[
          { label: '수정하기', handleClick: () => console.log('수정') },
          { label: '삭제하기', handleClick: () => console.log('삭제') },
        ]}
      />
    </Flex>
  );
}
