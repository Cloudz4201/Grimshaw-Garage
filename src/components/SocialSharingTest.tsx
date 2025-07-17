import { useEffect, useState } from 'react';

const SocialSharingTest = () => {
  const [metaTags, setMetaTags] = useState<any>({});

  useEffect(() => {
    // Extract all the social media meta tags
    const tags = {
      'og:image': document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
      'og:title': document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
      'og:description': document.querySelector('meta[property="og:description"]')?.getAttribute('content'),
      'og:url': document.querySelector('meta[property="og:url"]')?.getAttribute('content'),
      'twitter:image': document.querySelector('meta[name="twitter:image"]')?.getAttribute('content'),
      'twitter:card': document.querySelector('meta[name="twitter:card"]')?.getAttribute('content'),
    };
    setMetaTags(tags);
  }, []);

  const testUrls = {
    facebook: 'https://developers.facebook.com/tools/debug/',
    twitter: 'https://cards-dev.twitter.com/validator',
    linkedin: 'https://www.linkedin.com/post-inspector/',
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-md z-50">
      <h3 className="font-bold text-sm mb-2">🔍 Social Sharing Debug</h3>
      
      <div className="text-xs space-y-1 mb-3">
        <div><strong>Image:</strong> {metaTags['og:image']?.substring(0, 50)}...</div>
        <div><strong>Title:</strong> {metaTags['og:title']?.substring(0, 30)}...</div>
        <div><strong>URL:</strong> {metaTags['og:url']}</div>
      </div>

      <div className="text-xs space-y-1">
        <div><strong>Test Links:</strong></div>
        <a href={testUrls.facebook} target="_blank" className="text-blue-400 hover:underline block">Facebook Debugger</a>
        <a href={testUrls.twitter} target="_blank" className="text-blue-400 hover:underline block">Twitter Validator</a>
        <a href={testUrls.linkedin} target="_blank" className="text-blue-400 hover:underline block">LinkedIn Inspector</a>
      </div>
      
      <button 
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert('URL copied! Paste it in the debugger tools.');
        }}
        className="bg-blue-600 text-white px-2 py-1 rounded text-xs mt-2 w-full"
      >
        Copy Current URL
      </button>
    </div>
  );
};

export default SocialSharingTest; 