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
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e: Event) => {
    const current = modalRef.current;
    if (isOpen && current && !current.contains(e.target as Node))
      setIsOpen(false);
  };

  return { isOpen, modalRef, toggleModal, closeModal, openModal };
};
