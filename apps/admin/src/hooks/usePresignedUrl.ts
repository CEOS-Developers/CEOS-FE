import { imageApi } from './../../../../packages/utils/src/apis/admin/imageApi';
import { useQuery } from '@tanstack/react-query';

export type imageApiType = 'ACTIVITY' | 'SPONSOR' | 'MANAGEMENT';

const usePresignedUrl = (apiType: imageApiType) => {
  const { data, error } = useQuery<string, Error>(
    [apiType],
    imageApi[`GET_${apiType}_IMAGE`],
  );

  return {
    presignedUrl: data || null,
    error,
  };
};

export default usePresignedUrl;
