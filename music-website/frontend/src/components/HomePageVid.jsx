import React from 'react';
import YouTube from 'react-youtube';

const HomePageVid = () => {
  const videoId = 'bZOl5TZPKgc';

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
          <YouTube videoId={videoId} className="w-full h-screen flex justify-center items-center" opts={{width: '70%', height: '70%'}}/>
    </div>
  );
};

export default HomePageVid;
