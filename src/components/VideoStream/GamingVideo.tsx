import React from 'react';
import type { LayoutControllerContext } from '../../context/LayoutController';

type GamingVideoProps = {
  chatVisible: LayoutControllerContext['chatVisible'];
}

export const GamingVideo = ({ chatVisible }: GamingVideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      controls
      className={`video-container ${chatVisible}`}
    >
      <source src='https://cdn3.wowza.com/1/TlFzL2Q5cmdERlpl/cm03aWlE/hls/live/playlist.m3u8' />
    </video>
  );
};
