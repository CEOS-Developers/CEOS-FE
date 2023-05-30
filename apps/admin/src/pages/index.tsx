import { DataGrid } from '@admin/components/DataGrid';
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
      <DataGrid pagination={pagination} onChangePage={onChangePage} />
    </Flex>
  );
}
