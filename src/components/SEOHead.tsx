import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schema?: object;
}

const SEOHead = ({ title, description, keywords, canonicalUrl, schema }: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Grimshaw Garage - Professional Auto Services`;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Set meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      if (!document.querySelector('meta[name="keywords"]')) {
        document.head.appendChild(metaKeywords);
      }
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    // Set canonical URL
    if (canonicalUrl) {
      const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      if (!document.querySelector('link[rel="canonical"]')) {
        document.head.appendChild(canonical);
      }
    }

    // Add structured data
    if (schema) {
      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      document.head.appendChild(scriptTag);

      return () => {
        document.head.removeChild(scriptTag);
      };
    }
  }, [title, description, keywords, canonicalUrl, schema]);

  return null;
};

export default SEOHead; 