import { Flex } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { faqApi } from '../../../../../packages/utils/src/apis/ceos/faqApi';
import { useEffect } from 'react';

const FAQ = () => {
  // useEffect(() => {
  //   console.log('FAQ 페이지 내 data : ', data);
  // }, [data]);
  return (
    <Flex direction="column">
      <Title
        title="FAQ"
        explain={['ceos에 대해 자주 묻는 질문들에', '대한 답변입니다.']}
      />
    </Flex>
  );
};

// export const getServerSideProps = async () => {
//   try {
//     const data = await faqApi.GET_FAQ({ category: 'PART' });
//     console.log(data);

//     return {
//       props: data,
//     };
//   } catch (err) {
//     console.error(err);
//   }
// };

export default FAQ;
