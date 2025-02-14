import React from 'react';
import videosrc from '../../assets/video.mov';
export default function Video() {
  return (
    <div className='my-10'>
      <video
        muted
        autoPlay
        playsInline
        loop
        className="w-[100%] h-[auto] block m-auto"
      >
        <source src={videosrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
