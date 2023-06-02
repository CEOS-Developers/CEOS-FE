import { Flex, TextField } from '@ceos-fe/ui';

export default function Home() {
  return (
    <Flex direction="column">
      <TextField label="이름" />
      <TextField multiline width={856} />
    </Flex>
  );
}
