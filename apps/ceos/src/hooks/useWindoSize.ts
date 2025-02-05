import { useState, useEffect } from 'react';

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getWindowSize() {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
    };
  }

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getWindowSize());
    }

    setWindowSize(getWindowSize());
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getWindowSize, isClient]);

  return windowSize;
}

export default useWindowSize;
