import {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react';
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
}

export const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(
  ({ value, height = 184, imageApiType, ...props }, ref) => {
    const { presignedUrl } = usePresignedUrl(imageApiType);

    useEffect(() => {
      console.log(presignedUrl);
    }, [presignedUrl]);

    const handleImageChange = async (e: any) => {
      if (e.target.files) {
        const data = e.target.files[0];
      }
    };

    const handleImageDelete = () => {
      //   setValue();
    };

    const handleDragOver = (e: any) => {
      e.preventDefault();
    };

    const handleDrop = async (e: any) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      const data = file;
      //   setValue(data);
    };

    return (
      <Flex direction="column" align="flex-start" webGap={36}>
        <Flex direction="column" webGap={30}>
          {value && (
            <>
              <DeleteCover>
                <Deletetag onClick={handleImageDelete}>삭제</Deletetag>
              </DeleteCover>
              <Img src={'value'} height={height} />
            </>
          )}
          <Label
            onDragOver={handleDragOver}
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
  border: 1px dashed ${theme.palette.Black};

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
  gap: 10px;

  cursor: pointer;
`;

const DeleteCover = styled(Flex)`
  height: 180px;
  width: 180px;
  border-radius: 100%;
  opacity: 0;

  position: absolute;
  z-index: 3;

  &:hover {
    background: rgba(12, 12, 12, 0.6);
    opacity: 1;
  }
`;

const Deletetag = styled.button`
  width: 80px;
  height: 32px;

  border-radius: 8px;

  background-color: ${theme.palette.Black};
  color: ${theme.palette.Black};

  ${theme.typo.Web.Body1}
`;
