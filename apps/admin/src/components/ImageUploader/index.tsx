import { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../../../packages/ui';
import { Flex, Text } from '../../../../../packages/ui';
import { CardImage } from 'react-bootstrap-icons';
import { css } from '@emotion/react';

export interface ImageUploaderProps {
  value: any;
  setValue: any;
}

export const ImageUploader = ({
  value,
  setValue,
  ...props
}: ImageUploaderProps) => {
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // console.log(e.target.files);
      const data = await encodeFileToBase64(e.target.files[0]);
      setValue(data);
    }
  };

  const handleImageDelete = () => {
    setValue('');
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = async (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const data = await encodeFileToBase64(file);
    setValue(data);
  };

  return (
    <Flex direction="column" align="flex-start" gap={36}>
      <Flex direction="column" webGap={30}>
        {value && (
          <>
            <DeleteCover>
              <Deletetag onClick={handleImageDelete}>삭제</Deletetag>
            </DeleteCover>
            <Img src={value} />
          </>
        )}
        <Label onDragOver={handleDragOver} onDrop={handleDrop}>
          <input
            type="file"
            id="profileImage"
            style={{ display: 'none' }}
            onChange={handleImageChange}
            accept="image/x-png, image/gif, image/jpeg"
          />
          <CardImage />
          <Text webTypo="Body1" color="White">
            이미지 업로드
          </Text>
        </Label>
      </Flex>
    </Flex>
  );
};

const Img = styled.img<{
  src: string;
}>`
  ${({ src }) =>
    css`
      background-image: url(${src});
    `};

  object-fit: cover;

  background-size: cover;
  background-position: center;
  background-color: ${theme.palette.Gray3};
  border: 1px dashed ${theme.palette.White};

  height: 180px;
  width: 180px;
  border-radius: 100%;

  position: absolute;
  z-index: 2;
`;

const Label = styled.label`
  color: white;
  background-color: transparent;

  border: 1px dashed ${theme.palette.White};
  box-sizing: border-box;

  height: 180px;
  width: 180px;

  border-radius: 100%;

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
  color: ${theme.palette.White};

  ${theme.typo.Web.Body1}
`;
