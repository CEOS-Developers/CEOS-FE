import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const ModalPortal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const el = document.getElementById('modal_root');
  if (el === null) {
    return null;
  }
  return ReactDOM.createPortal(children, el);
};
