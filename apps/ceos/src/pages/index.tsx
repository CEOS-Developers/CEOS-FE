import { ExtraButton, Flex } from '@ceos-fe/ui';

export default function Home() {
  return (
    <Flex direction="column">
      <div>
        <ExtraButton
          buttonList={[
            { label: '수정하기', handleClick: () => console.log('수정') },
            { label: '삭제하기', handleClick: () => console.log('삭제') },
          ]}
        />
      </div>
    </Flex>
  );
}
