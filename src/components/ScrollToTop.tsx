import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Ensure body can scroll normally (fix for any lingering scroll issues)
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Remove any fixed heights that might trap scrolling
    const elementsWithFixedHeight = document.querySelectorAll('[style*="height"][style*="vh"]');
    elementsWithFixedHeight.forEach(el => {
      const element = el as HTMLElement;
      // Only remove if it's causing scroll issues (you can customize this logic)
      if (element.style.height?.includes('vh') && element.style.overflow === 'hidden') {
        element.style.overflow = 'visible';
      }
    });
    
  }, [pathname]);

  return null;
};

// Utility function to prevent scroll trapping in components
export const useScrollFix = () => {
  useEffect(() => {
    // Ensure smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);
};

export default ScrollToTop; 