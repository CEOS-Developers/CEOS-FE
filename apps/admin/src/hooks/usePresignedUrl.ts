import { imageApi, uploadImageProps } from '@ceos-fe/utils';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export type imageApiType = 'ACTIVITY' | 'SPONSOR' | 'MANAGEMENT';

const usePresignedUrl = (apiType: imageApiType) => {
  const [image, setImage] = useState<File>();
  const queryClient = useQueryClient();
  const uploadImageMutation = useMutation(imageApi.PUT_IMAGE);
  // const { data, error } = useQuery<string, Error>(
  //   [apiType],
  //   imageApi[`GET_${apiType}_IMAGE`],
  // );

  useEffect(() => {
    if (image) {
      getPresignedUrlMutation.mutate();
    }
  }, [image]);

  const getPresignedUrlMutation = useMutation(
    imageApi[`GET_${apiType}_IMAGE`],
    {
      onSuccess: async (data: string) => {
        uploadImageMutation.mutate({ url: data, file: image! });
      },
      onError: (error: any) => {
        console.log(error);
      },
    },
  );

  // const uploadImage = ({ url, file }: uploadImageProps) => {
  //   if (file && url) {
  //     uploadImageMutation.mutate({ url: url, file: file });
  //     queryClient.invalidateQueries([apiType]); // 이미지 URL을 변경하기 위해 해당 쿼리를 무효화
  //   }
  // };
  return {
    presignedUrl: getPresignedUrlMutation.data || '',
    image,
    setImage,
  };
};

export default usePresignedUrl;
