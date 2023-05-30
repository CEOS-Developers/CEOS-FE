import { Pagination } from '@admin/components/DataGrid/Pagination';
import { Flex } from '@ceos-fe/ui';
import { useState } from 'react';

export default function Home() {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 45,
  });

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
  };

  return (
    <Flex direction="column">
      <Pagination
        total={pagination.total}
        page={pagination.page}
        pageSize={pagination.pageSize}
        onChangePage={onChangePage}
      />
    </Flex>
  );
}
