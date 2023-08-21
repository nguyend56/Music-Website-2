import React from 'react';
import YouTube from 'react-youtube';

const HomePageVid2 = () => {
  const videoId = '-WauKMf4-zw';

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
          <YouTube videoId={videoId} className="w-full h-screen flex justify-center items-center" opts={{width: '70%', height: '70%'}}/>
    </div>
  );
};

export default HomePageVid2;
