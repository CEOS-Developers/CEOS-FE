import { useEffect, useRef, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => {
      if (!prevIsOpen) document.body.style.overflowY = 'hidden';
      else document.body.style.overflowY = 'auto';
      return !prevIsOpen;
    });
  };

  const openModal = () => {
    document.body.style.overflowY = 'hidden';
    setIsOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setIsOpen(false);
  };

  const handleOutsideClick = (e: Event) => {
    const current = modalRef.current;
    if (isOpen && current && !current.contains(e.target as Node)) {
      document.body.style.overflowY = 'auto';
      setIsOpen(false);
    }
  };

  return { isOpen, modalRef, toggleModal, closeModal, openModal };
};
