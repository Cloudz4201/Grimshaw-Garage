// Google Analytics Event Tracking Utility
// Provides functions to track user interactions for business insights

// Type definitions for Google Analytics events
interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Check if Google Analytics is loaded
const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Generic function to send events to Google Analytics
const sendGAEvent = (event: GAEvent): void => {
  if (!isGALoaded()) {
    console.warn('Google Analytics not loaded');
    return;
  }

  try {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
    
    // Optional: Log events in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('GA Event:', event);
    }
  } catch (error) {
    console.error('Failed to send GA event:', error);
  }
};

// Phone Click Tracking
export const trackPhoneClick = (phoneNumber: string, location: string): void => {
  sendGAEvent({
    action: 'phone_click',
    category: 'engagement',
    label: `${phoneNumber}_from_${location}`,
  });
};

// Booking Modal Tracking
export const trackBookingModalOpen = (source: string): void => {
  sendGAEvent({
    action: 'booking_modal_open',
    category: 'conversion',
    label: `opened_from_${source}`,
  });
};

export const trackBookingModalClose = (): void => {
  sendGAEvent({
    action: 'booking_modal_close',
    category: 'conversion',
  });
};

// Service Page Visit Tracking
export const trackServicePageVisit = (serviceName: string, source?: string): void => {
  sendGAEvent({
    action: 'service_page_view',
    category: 'navigation',
    label: source ? `${serviceName}_from_${source}` : serviceName,
  });
};

// Navigation Tracking
export const trackNavigationClick = (destination: string, source: string): void => {
  sendGAEvent({
    action: 'navigation_click',
    category: 'navigation',
    label: `${destination}_from_${source}`,
  });
};

// Form Interaction Tracking (for booking modal and contact forms)
export const trackFormStart = (formType: string, location: string): void => {
  sendGAEvent({
    action: 'form_start',
    category: 'engagement',
    label: `${formType}_from_${location}`,
  });
};

export const trackFormSubmit = (formType: string): void => {
  sendGAEvent({
    action: 'form_submit',
    category: 'conversion',
    label: formType,
  });
};

// Business-specific tracking
export const trackServiceInquiry = (serviceType: string, method: string): void => {
  sendGAEvent({
    action: 'service_inquiry',
    category: 'lead_generation',
    label: `${serviceType}_via_${method}`,
  });
};

// CTA Button Tracking
export const trackCTAClick = (ctaText: string, location: string): void => {
  sendGAEvent({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaText}_from_${location}`,
  });
};

// Scroll Tracking (for engagement)
export const trackScrollToSection = (sectionName: string): void => {
  sendGAEvent({
    action: 'scroll_to_section',
    category: 'engagement',
    label: sectionName,
  });
};

// Export all tracking functions
export const analytics = {
  trackPhoneClick,
  trackBookingModalOpen,
  trackBookingModalClose,
  trackServicePageVisit,
  trackNavigationClick,
  trackFormStart,
  trackFormSubmit,
  trackServiceInquiry,
  trackCTAClick,
  trackScrollToSection,
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
} 