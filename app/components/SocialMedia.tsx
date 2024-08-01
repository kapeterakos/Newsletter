import React from 'react';

const SocialMedia: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-64">
      <div className="relative w-48 h-48 flex justify-center items-center hover:animate-none animate-spin-slow">
        <a 
          href="https://www.facebook.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 flex justify-center items-center"
        >
          <img src="/images/facebook.svg" alt="Facebook" className="w-12 h-12" />
        </a>
        <a 
          href="https://twitter.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center items-center"
        >
          <img src="/images/twitter.svg" alt="Twitter" className="w-12 h-12" />
        </a>
        <a 
          href="https://www.instagram.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 flex justify-center items-center"
        >
          <img src="/images/instagram.svg" alt="Instagram" className="w-12 h-12" />
        </a>
        <a 
          href="https://www.linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center items-center"
        >
          <img src="/images/tiktok.svg" alt="Tiktok" className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
