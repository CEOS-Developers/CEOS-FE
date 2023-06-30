import { PageTitle } from '@admin/components/Common/PageTitle';
import { Flex } from '@ceos-fe/ui';

export default function Management() {
  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <PageTitle
        title={'MANAGEMENT'}
        description={'홈페이지에 게재되는 임원진 정보입니다.'}
      />
    </Flex>
  );
}
