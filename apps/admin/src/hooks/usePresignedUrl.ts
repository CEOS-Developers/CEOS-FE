import { imageApi, uploadImageProps } from '@ceos-fe/utils';
import { useQuery, useMutation } from '@tanstack/react-query';

export type imageApiType = 'ACTIVITY' | 'SPONSOR' | 'MANAGEMENT';

const usePresignedUrl = (apiType: imageApiType) => {
  const { data, error } = useQuery<string, Error>(
    [apiType],
    imageApi[`GET_${apiType}_IMAGE`],
  );
  const uploadImageMutation = useMutation(imageApi.PUT_IMAGE);

  const uploadImage = ({ url, file }: uploadImageProps) => {
    if (file && url) {
      uploadImageMutation.mutate({ url: url, file: file });
    }
  };

  return {
    presignedUrl: data || '',
    uploadImage,
    error,
  };
};

export default usePresignedUrl;
