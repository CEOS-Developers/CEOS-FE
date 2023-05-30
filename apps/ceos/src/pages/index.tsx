import { ExtraButton, Flex } from '@ceos-fe/ui';
import { Header } from '@ceos/components/Header';
import { MenuBar } from '@ceos/components/MenuBar';

export default function Home() {
  return (
    <>
      <Header backColor="White" />
      <Flex direction="column">
        <ExtraButton
          buttonList={[
            { label: '수정하기', handleClick: () => console.log('수정') },
            { label: '삭제하기', handleClick: () => console.log('삭제') },
          ]}
        />
      </Flex>
    </>
  );
}
