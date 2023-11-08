import React from 'react';
import YouTube from 'react-youtube';

const PianoVid2 = ({ className }) => {
    const videoId = 'Vr8hXDduZ_4';
  
    return (
      <div className={`relative ${className}`}>
        <YouTube 
          videoId={videoId} 
          className="absolute top-0 left-0 w-full h-full"
          containerClassName="absolute top-0 left-0 w-full h-full"
          opts={{
            width: '100%',
            height: '100%',
            playerVars: { autoplay: 0 },
            host: 'https://www.youtube.com',
            aspectRatio: 'cover'
          }}
        />
      </div>
    );
  };
  

export default PianoVid2;
