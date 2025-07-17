import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schema?: object;
  ogImage?: string;
}

const SEOHead = ({ title, description, keywords, canonicalUrl, schema, ogImage }: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Grimshaw Automotive - Professional Auto Services`;
    
    // Enhanced suburb targeting keywords
    const baseKeywords = keywords || '';
    const suburbKeywords = 'Bundoora, Mill Park, Lalor, Thomastown, Preston, Reservoir, Fawkner, Brunswick, Kew, Hawthorn, Balwyn, Box Hill, Surrey Hills, Blackburn, Ringwood, Ringwood North, Croydon, Croydon North, Mooroolbark, Kilsyth, Montrose, Epping, South Morang, Rosanna, Viewbank, Macleod, Heidelberg, Ivanhoe, Bulleen, Doncaster, automotive service, car repair, European car service, BMW service, Mercedes service, Porsche service, Audi service, mechanic near me';
    const combinedKeywords = baseKeywords ? `${baseKeywords}, ${suburbKeywords}` : suburbKeywords;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Set meta keywords with enhanced suburb targeting
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', combinedKeywords);
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', `${title} | Grimshaw Automotive`);
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

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', window.location.href);
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    // Set Open Graph image - use logo.png as default for social media previews
    const imageUrl = ogImage || '/logo.png';
    const fullImageUrl = window.location.origin + imageUrl;
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImageMeta.setAttribute('property', 'og:image');
    ogImageMeta.setAttribute('content', fullImageUrl);
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImageMeta);
    }

    const ogImageSecure = document.querySelector('meta[property="og:image:secure_url"]') || document.createElement('meta');
    ogImageSecure.setAttribute('property', 'og:image:secure_url');
    ogImageSecure.setAttribute('content', fullImageUrl);
    if (!document.querySelector('meta[property="og:image:secure_url"]')) {
      document.head.appendChild(ogImageSecure);
    }

    const ogImageWidth = document.querySelector('meta[property="og:image:width"]') || document.createElement('meta');
    ogImageWidth.setAttribute('property', 'og:image:width');
    ogImageWidth.setAttribute('content', '1200');
    if (!document.querySelector('meta[property="og:image:width"]')) {
      document.head.appendChild(ogImageWidth);
    }

    const ogImageHeight = document.querySelector('meta[property="og:image:height"]') || document.createElement('meta');
    ogImageHeight.setAttribute('property', 'og:image:height');
    ogImageHeight.setAttribute('content', '630');
    if (!document.querySelector('meta[property="og:image:height"]')) {
      document.head.appendChild(ogImageHeight);
    }

    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]') || document.createElement('meta');
    ogImageAlt.setAttribute('property', 'og:image:alt');
    ogImageAlt.setAttribute('content', 'Grimshaw Automotive - Premium Auto Service in Melbourne');
    if (!document.querySelector('meta[property="og:image:alt"]')) {
      document.head.appendChild(ogImageAlt);
    }

    // Enhanced Twitter Card meta tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    const twitterSite = document.querySelector('meta[name="twitter:site"]') || document.createElement('meta');
    twitterSite.setAttribute('name', 'twitter:site');
    twitterSite.setAttribute('content', '@GrimshawAuto');
    if (!document.querySelector('meta[name="twitter:site"]')) {
      document.head.appendChild(twitterSite);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', `${title} | Grimshaw Automotive`);
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]') || document.createElement('meta');
    twitterImage.setAttribute('name', 'twitter:image');
    twitterImage.setAttribute('content', fullImageUrl);
    if (!document.querySelector('meta[name="twitter:image"]')) {
      document.head.appendChild(twitterImage);
    }

    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]') || document.createElement('meta');
    twitterImageAlt.setAttribute('name', 'twitter:image:alt');
    twitterImageAlt.setAttribute('content', 'Grimshaw Automotive - Premium Auto Service in Melbourne');
    if (!document.querySelector('meta[name="twitter:image:alt"]')) {
      document.head.appendChild(twitterImageAlt);
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
  }, [title, description, keywords, canonicalUrl, schema, ogImage]);

  return null;
};

export default SEOHead; 