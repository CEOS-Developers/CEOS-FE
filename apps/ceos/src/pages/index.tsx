import { Flex, TextField } from '@ceos-fe/ui';
import { Instagram } from '../../../../packages/ui/src/assets/FloatingButton/Instagram';

export default function Home() {
  return (
    <Flex direction="row">
      <TextField right={<Instagram />} />
    </Flex>
  );
}
