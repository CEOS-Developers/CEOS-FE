import { Button, Flex, Text } from '@ceos-fe/ui';
import { QueryClient } from '@tanstack/react-query';

export default function Project() {
  return (
    <>
      <Flex direction="column" align="start">
        <Text webTypo="Heading2" paletteColor="Black">
          PROJECT
        </Text>
        <Flex justify="space-between">
          <Text
            webTypo="Body3"
            paletteColor="Gray5"
            style={{ marginTop: '12px' }}
          >
            역대 세오스 프로젝트 데이터를 관리합니다.
          </Text>
          <Button
            variant="admin_navy"
            onClick={() => console.log('add')}
            webWidth={108}
          >
            프로젝트 추가
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
