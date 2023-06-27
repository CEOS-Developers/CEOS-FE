import { Flex } from '@ceos-fe/ui';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { CategoryType, ResponseInterface, faqApi } from '@ceos-fe/utils';

interface FaqResponse {
  categoryFaqList: {
    id: number;
    category: CategoryType;
    question: string;
    answer: string;
  };
}

const Faq = () => {
  const { data, isLoading, isSuccess } = useQuery<
    ResponseInterface<FaqResponse>
  >(['admin', 'faq'], () => faqApi.GET_FAQ('RECRUIT'));

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
