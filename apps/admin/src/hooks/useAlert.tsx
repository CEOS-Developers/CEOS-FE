import { useEffect, useState } from 'react';

export type AlertType = 'success' | 'error';

export const useAlert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<AlertType>('success');

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const openAlert = (type: AlertType) => {
    setType(type);
    setIsOpen(true);
  };

  return { isOpen, type, openAlert };
};
