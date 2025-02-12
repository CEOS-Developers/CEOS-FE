import usePresignedUrl, { ImageApiType } from '@admin/hooks/usePresignedUrl';
import { forwardRef, useEffect } from 'react';
import { Flex, Text, theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CardImage } from 'react-bootstrap-icons';
import Image from 'next/image';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

export interface ImageUploaderProps {
  height?: number;
  imageApiType: ImageApiType;
  value: string;
  setValue: UseFormSetValue<any>;
  label: string;
}

export const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(
  ({ value, height = 184, imageApiType, setValue, label, ...props }, ref) => {
    const { presignedUrl, setUrl, setImage } = usePresignedUrl(imageApiType);

    useEffect(() => {
      if (value) {
        setUrl(value);
      }
    }, [value]);

    useEffect(() => {
      if (presignedUrl) {
        setValue(label, presignedUrl);
      }
    }, [presignedUrl]);

    const handleImageChange = async (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      e.preventDefault();
      if (e.target.files) {
        const file = e.target.files[0];
        setImage(file);
      }
    };

    const handleDrop = async (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      if (e.dataTransfer.files) {
        const file = e.dataTransfer.files[0];
        setImage(file);
      }
    };

    return (
      <Flex direction="column" align="flex-start" webGap={36} mobileGap={36}>
        <Flex direction="column" webGap={30} mobileGap={30}>
          {presignedUrl && (
            <>
              <DeleteCover
                height={height}
                onClick={() => {
                  setImage(undefined);
                  setUrl('');
                  setValue(label, '');
                }}
                direction="column"
                webGap={8}
                mobileGap={8}
              >
                <CardImage width={24} height={24} />
                <Text webTypo="Body3">이미지를 수정하려면 클릭하세요.</Text>
              </DeleteCover>
              <Img alt="" src={presignedUrl} width={328} height={height} />
            </>
          )}
          <Label
            onDragOver={(e: any) => e.preventDefault()}
            onDrop={handleDrop}
            height={height}
          >
            <input
              type="file"
              id="profileImage"
              style={{ display: 'none' }}
              onChange={handleImageChange}
              accept="image/x-png, image/gif, image/jpeg"
              {...props}
            />
            <CardImage width={24} height={24} />
            <Text webTypo="Body3">이미지를 업로드해주세요.</Text>
          </Label>
        </Flex>
      </Flex>
    );
  },
);

ImageUploader.displayName = 'ImageUploader';

const Img = styled(Image)<{
  src: string;
  height?: number;
}>`
  ${({ src }) =>
    css`
      background-image: url(${src});
    `};
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-color: ${theme.palette.Gray3};
  height: ${({ height }) => (height ? `${height}px` : '184px')};
  width: 328px;
  border-radius: 8px;
  position: absolute;
  z-index: 2;
`;

const Label = styled.label<{
  height?: number;
}>`
  color: ${theme.palette.Gray4};
  background-color: ${theme.palette.Gray1};
  box-sizing: border-box;
  height: ${({ height }) => (height ? `${height}px` : '184px')};
  width: 328px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const DeleteCover = styled(Flex)<{
  height?: number;
}>`
  height: ${({ height }) => (height ? `${height}px` : '184px')};
  width: 328px;
  border-radius: 8px;
  opacity: 1;
  background: rgba(35, 37, 39, 0.3);
  color: ${theme.palette.White};
  position: absolute;
  z-index: 3;
  cursor: pointer;
`;
