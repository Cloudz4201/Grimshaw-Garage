import { useEffect } from 'react';

/**
 * SEOHead Component - Production Social Media & SEO Meta Tags
 * 
 * Features:
 * ✅ Open Graph (Facebook, WhatsApp, LinkedIn)
 * ✅ Twitter Cards
 * ✅ WhatsApp Preview Support
 * ✅ Proper Domain Configuration (.com)
 * ✅ Structured Data (Schema.org)
 * ✅ Mobile Optimization
 * ✅ Search Engine Optimization
 * ✅ Cache Busting for Social Media
 * 
 * Usage:
 * <SEOHead 
 *   title="Page Title"
 *   description="Page description for social sharing"
 *   ogImage="/og-image.png" // Optional, defaults to /og-image.png
 *   canonicalUrl="https://grimshawautomotive.com/page" // Optional
 * />
 * 
 * To force social media cache refresh:
 * 1. Facebook: https://developers.facebook.com/tools/debug/
 * 2. Twitter: https://cards-dev.twitter.com/validator
 * 3. LinkedIn: https://www.linkedin.com/post-inspector/
 * 4. WhatsApp: Delete conversation and resend link
 */

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
    
    // Define the correct domain
    const SITE_DOMAIN = 'https://grimshawautomotive.com';
    
    // Enhanced suburb targeting keywords
    const baseKeywords = keywords || '';
    const suburbKeywords = 'Bundoora, Eltham, Templestowe, Doncaster, Mill Park, Diamond Creek, Plenty, Kalkallo, Mickleham, Donnybrook, Whittlesea, Doreen, Lower Templestowe, Hurstbridge, Montmorency, Balwyn, Preston, Reservoir, Fawkner, Brunswick, Kew, Hawthorn, Box Hill, Surrey Hills, Blackburn, Ringwood, automotive service, car repair, European car service, BMW service, Mercedes service, Porsche service, Audi service, mechanic near me';
    const combinedKeywords = baseKeywords ? `${baseKeywords}, ${suburbKeywords}` : suburbKeywords;
    
    // Current page URL with correct domain
    const currentUrl = canonicalUrl || `${SITE_DOMAIN}${window.location.pathname}`;
    
    // Image URL with correct domain and cache busting
    const imageUrl = ogImage || '/og-image.png';
    const versionParam = `?v=2024.1`; // Update this version when image changes
    const fullImageUrl = imageUrl.startsWith('http') ? 
      `${imageUrl}${versionParam}` : 
      `${SITE_DOMAIN}${imageUrl}${versionParam}`;
    
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

    // Set viewport for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]') || document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    if (!document.querySelector('meta[name="viewport"]')) {
      document.head.appendChild(viewport);
    }

    // ===== Open Graph Tags for Facebook, WhatsApp, LinkedIn =====
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
    ogUrl.setAttribute('content', currentUrl);
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'Grimshaw Automotive');
    if (!document.querySelector('meta[property="og:site_name"]')) {
      document.head.appendChild(ogSiteName);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]') || document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.setAttribute('content', 'en_AU');
    if (!document.querySelector('meta[property="og:locale"]')) {
      document.head.appendChild(ogLocale);
    }

    // Open Graph Image tags
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

    const ogImageType = document.querySelector('meta[property="og:image:type"]') || document.createElement('meta');
    ogImageType.setAttribute('property', 'og:image:type');
    ogImageType.setAttribute('content', 'image/png');
    if (!document.querySelector('meta[property="og:image:type"]')) {
      document.head.appendChild(ogImageType);
    }

    // ===== Twitter Card Tags =====
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

    const twitterCreator = document.querySelector('meta[name="twitter:creator"]') || document.createElement('meta');
    twitterCreator.setAttribute('name', 'twitter:creator');
    twitterCreator.setAttribute('content', '@GrimshawAuto');
    if (!document.querySelector('meta[name="twitter:creator"]')) {
      document.head.appendChild(twitterCreator);
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

    // ===== WhatsApp specific tags =====
    const whatsappTitle = document.querySelector('meta[property="whatsapp:title"]') || document.createElement('meta');
    whatsappTitle.setAttribute('property', 'whatsapp:title');
    whatsappTitle.setAttribute('content', `${title} | Grimshaw Automotive`);
    if (!document.querySelector('meta[property="whatsapp:title"]')) {
      document.head.appendChild(whatsappTitle);
    }

    // ===== Theme and App Tags =====
    const themeColor = document.querySelector('meta[name="theme-color"]') || document.createElement('meta');
    themeColor.setAttribute('name', 'theme-color');
    themeColor.setAttribute('content', '#1e293b'); // slate-800
    if (!document.querySelector('meta[name="theme-color"]')) {
      document.head.appendChild(themeColor);
    }

    const msappTileColor = document.querySelector('meta[name="msapplication-TileColor"]') || document.createElement('meta');
    msappTileColor.setAttribute('name', 'msapplication-TileColor');
    msappTileColor.setAttribute('content', '#1e293b');
    if (!document.querySelector('meta[name="msapplication-TileColor"]')) {
      document.head.appendChild(msappTileColor);
    }

    // ===== Additional Meta Tags =====
    const author = document.querySelector('meta[name="author"]') || document.createElement('meta');
    author.setAttribute('name', 'author');
    author.setAttribute('content', 'Grimshaw Automotive');
    if (!document.querySelector('meta[name="author"]')) {
      document.head.appendChild(author);
    }

    const robots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (!document.querySelector('meta[name="robots"]')) {
      document.head.appendChild(robots);
    }

    // Set canonical URL with correct domain
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', currentUrl);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Add structured data with correct domain
    if (schema) {
      // Update schema URL to use correct domain
      const updatedSchema = JSON.parse(JSON.stringify(schema));
      if (updatedSchema.url) {
        updatedSchema.url = updatedSchema.url.replace('grimshawautomotive.com.au', 'grimshawautomotive.com');
      }
      
      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(updatedSchema);
      document.head.appendChild(scriptTag);

      return () => {
        if (document.head.contains(scriptTag)) {
          document.head.removeChild(scriptTag);
        }
      };
    }
  }, [title, description, keywords, canonicalUrl, schema, ogImage]);

  return null;
};

export default SEOHead; 