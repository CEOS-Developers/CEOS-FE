import { imageApi } from '@ceos-fe/utils';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export type ImageApiType = 'ACTIVITY' | 'SPONSOR' | 'MANAGEMENT' | 'PROJECTS';

const usePresignedUrl = (apiType: ImageApiType) => {
  const [image, setImage] = useState<File>();
  const [pUrl, setPUrl] = useState('');
  const [url, setUrl] = useState('');

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
        setPUrl(data.slice(0, data.indexOf('?X-Amz')));
      },
      onError: (error: any) => {
        console.log(error);
      },
    },
  );

  const uploadImageMutation = useMutation(imageApi.PUT_IMAGE, {
    onSuccess: async (data: any) => {
      setUrl(pUrl);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  return {
    presignedUrl: url,
    setUrl,
    image,
    setImage,
  };
};

export default usePresignedUrl;
