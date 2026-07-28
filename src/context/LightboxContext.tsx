import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LightboxContextType {
  imageSrc: string | null;
  images: string[];
  currentIndex: number;
  openLightbox: (src: string, galleryImages?: string[]) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (src: string, galleryImages: string[] = []) => {
    setImageSrc(src);
    const arr = galleryImages.length > 0 ? galleryImages : [src];
    setImages(arr);
    
    let idx = arr.indexOf(src);
    if (idx === -1) idx = 0;
    setCurrentIndex(idx);
  };

  const closeLightbox = () => {
    setImageSrc(null);
    setImages([]);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (images.length <= 1) return;
    const nextIdx = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIdx);
    setImageSrc(images[nextIdx]);
  };

  const prevImage = () => {
    if (images.length <= 1) return;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIdx);
    setImageSrc(images[prevIdx]);
  };

  return (
    <LightboxContext.Provider value={{ imageSrc, images, currentIndex, openLightbox, closeLightbox, nextImage, prevImage }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (context === undefined) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}
