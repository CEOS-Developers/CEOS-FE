import { Flex, Button } from '@ceos-fe/ui';
import { useRouter } from 'next/router';

export default function Reward() {
  const router = useRouter();
  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Flex align="flex-end" justify="space-between" width={1032}>
        {/* <PageTitle
              title={'REWARDS'}
              description={'기수별 수상 이력 페이지에 게재되는 내용을 관리합니다.'}
            /> */}
        <Button
          variant="admin_navy"
          webWidth={108}
          //   webHeight={33}
          //   mobileHeight={33}
          onClick={() => router.push('/reward/add')}
        >
          이력 추가
        </Button>
      </Flex>
      {/* <Space height={48} /> */}
    </Flex>
  );
}
