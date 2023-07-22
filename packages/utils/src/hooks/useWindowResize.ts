import { useEffect, useState } from 'react';

export const useWindowResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 390px)').matches);
    };

    handleResize(); // 초기 렌더링 시 크기 확인

    window.addEventListener('resize', handleResize); // resize 이벤트 감지

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);

  return isMobile;
};

export const useWindowTabletResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1023px)').matches);
    };

    handleResize(); // 초기 렌더링 시 크기 확인

    window.addEventListener('resize', handleResize); // resize 이벤트 감지

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);

  return isMobile;
};
