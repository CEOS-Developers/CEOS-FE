import { imageApi } from './../../../../packages/utils/src/apis/admin/imageApi';
import { useQuery } from '@tanstack/react-query';

type imageApiType = 'ACRIVITY' | 'SPONSOR' | 'MANAGEMENT';

const usePresignedUrl = (apiType: imageApiType) => {
  const { data, error } = useQuery<string, Error>(
    [`${apiType}-${Date.now()}`],
    () => `imageApi.GET_${apiType}_IMAGE`,
  );

  return {
    presignedUrl: data || null,
    error,
  };
};

export default usePresignedUrl;
