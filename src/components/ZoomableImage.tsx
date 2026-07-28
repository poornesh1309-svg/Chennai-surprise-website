import React from 'react';
import { useLightbox } from '../context/LightboxContext';

export type ZoomableImageProps = React.ComponentProps<'img'> & {
  priority?: boolean;
  galleryContext?: string[];
};

export default function ZoomableImage(props: ZoomableImageProps) {
  const { priority, galleryContext, ...imgProps } = props;
  const { openLightbox } = useLightbox();

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation(); // prevent triggering parent clicks like opening a service details modal
    if (imgProps.onClick) {
      imgProps.onClick(e);
    }
    if (imgProps.src) {
      openLightbox(imgProps.src, galleryContext || []);
    }
  };

  return (
    <img 
      {...imgProps} 
      onClick={handleClick} 
      className={`${imgProps.className || ''} cursor-zoom-in`} 
      loading={priority ? undefined : "lazy"}
      decoding={priority ? "sync" : "async"}
    />
  );
}
