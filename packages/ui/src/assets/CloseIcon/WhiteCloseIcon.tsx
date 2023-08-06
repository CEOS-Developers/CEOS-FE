import { css } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';

export interface CloseProps {
  fillColor?: string;
}

export const WhiteCloseIcon = (props: CloseProps) => {
  const { fillColor } = props;
  return (
    <Container>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="&#236;&#149;&#132;&#236;&#157;&#180;&#236;&#189;&#152;_&#235;&#139;&#171;&#234;&#184;&#176;">
          <path
            id="Vector (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.41421 3.41396C3.92189 2.90628 4.745 2.90628 5.25269 3.41396L13.0001 11.1614L20.7475 3.41396C21.2552 2.90628 22.0783 2.90628 22.586 3.41396C23.0937 3.92165 23.0937 4.74476 22.586 5.25244L14.8386 12.9999L22.586 20.7473C23.0937 21.255 23.0937 22.0781 22.586 22.5858C22.0783 23.0935 21.2552 23.0935 20.7475 22.5858L13.0001 14.8383L5.25269 22.5858C4.745 23.0935 3.92189 23.0935 3.41421 22.5858C2.90653 22.0781 2.90653 21.255 3.41421 20.7473L11.1616 12.9999L3.41421 5.25244C2.90653 4.74476 2.90653 3.92165 3.41421 3.41396Z"
            fill={fillColor ? fillColor : '#F4F6F9'}
          />
        </g>
      </svg>
    </Container>
  );
};

const Container = styled.div`
  width: 26px;
  height: 26px;

  :hover {
    cursor: pointer;
  }
`;
