import { PageTitle } from '@admin/components/Common/PageTitle';
import { DataGrid } from '@admin/components/DataGrid';
import { Button, Flex } from '@ceos-fe/ui';
import { managementApi } from '@ceos-fe/utils';
import { ManagementResponse } from '../../../../../packages/utils/src/apis/admin/managementApi';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from '@tanstack/react-query';

export default function Management({ info }: { info: any }) {
  console.log('ddd', info);
  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Flex align="flex-end" justify="space-between" width={1032}>
        <PageTitle
          title={'MANAGEMENT'}
          description={'홈페이지에 게재되는 임원진 정보입니다.'}
        />
        <Button variant="admin_navy" webWidth={108}>
          프로젝트 추가
        </Button>
      </Flex>
    </Flex>
  );
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['admin', 'MANAGEMENT'], () =>
      managementApi.GET_MANAGEMENT({ pageNum: 0, limit: 12 }),
    );

    console.log('dd', dehydrate(queryClient));
    return {
      props: {
        dehydratedProps: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (err) {
    console.error(err);
  }
};
