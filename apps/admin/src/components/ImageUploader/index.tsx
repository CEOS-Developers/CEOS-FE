import { InputHTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../../../packages/ui';
import { Flex, Text } from '../../../../../packages/ui';
import { CardImage } from 'react-bootstrap-icons';
import { css } from '@emotion/react';
import usePresignedUrl from '../../hooks/usePresignedUrl';
import { imageApiType } from '../../hooks/usePresignedUrl';

export interface ImageUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
  imageApiType: imageApiType;
  value: string;
  setValue: (arg: string | null) => void;
}

export const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(
  ({ value, height = 184, imageApiType, setValue, ...props }, ref) => {
    const { presignedUrl, uploadImage } = usePresignedUrl(imageApiType);

    const handleImageChange = async (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      e.preventDefault();
      if (e.target.files) {
        const file = e.target.files[0];
        uploadImage({ file: file, url: presignedUrl });
        setValue(presignedUrl);
      }
    };

    const handleDrop = async (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      uploadImage({ file: file, url: presignedUrl });
      setValue(presignedUrl);
    };

    return (
      <Flex direction="column" align="flex-start" webGap={36} mobileGap={36}>
        <Flex direction="column" webGap={30} mobileGap={30}>
          {value && (
            <>
              <DeleteCover
                onClick={() => setValue(null)}
                direction="column"
                webGap={8}
                mobileGap={8}
              >
                <CardImage width={24} height={24} />
                <Text webTypo="Body3">이미지를 수정하려면 클릭하세요.</Text>
              </DeleteCover>
              <Img src={value || ''} height={height} />
            </>
          )}
          <Label
            onDragOver={(e) => e.preventDefault()}
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

const Img = styled.img<{
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

const DeleteCover = styled(Flex)`
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
