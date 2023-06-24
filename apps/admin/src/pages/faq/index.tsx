import { Flex } from '@ceos-fe/ui';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { faqApi } from '@ceos-fe/utils';

const Faq = () => {
  const { data, isLoading, isSuccess } = useQuery(['admin', 'faq'], () =>
    faqApi.GET_FAQ('RECRUIT'),
  );

  console.log(data);

  return <Flex>FAQ</Flex>;
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['admin', 'faq'], () =>
      faqApi.GET_FAQ('RECRUIT'),
    );

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

export default Faq;
