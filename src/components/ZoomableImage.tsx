import React from 'react';
import { useLightbox } from '../context/LightboxContext';

type ZoomableImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function ZoomableImage(props: ZoomableImageProps) {
  const { setImageSrc } = useLightbox();

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation(); // prevent triggering parent clicks like opening a service details modal
    if (props.onClick) {
      props.onClick(e);
    }
    setImageSrc(props.src || null);
  };

  return (
    <img 
      {...props} 
      onClick={handleClick} 
      className={`${props.className || ''} cursor-zoom-in`} 
    />
  );
}
