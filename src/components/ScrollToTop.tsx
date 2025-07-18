import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top when the pathname changes (actual navigation)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 