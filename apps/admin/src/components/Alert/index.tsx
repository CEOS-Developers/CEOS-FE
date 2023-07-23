import { Alert as AntdAlert } from 'antd';
import styled from '@emotion/styled';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

/**
 * @param {'success' | 'error'} type: alert type
 * @param {string} message: alert message
 */
export const Alert = ({ message, type }: AlertProps) => {
  return (
    <Container>
      <AntdAlert message={message} type={type} showIcon />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);
`;
