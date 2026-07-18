import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LightboxContextType {
  imageSrc: string | null;
  setImageSrc: (src: string | null) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  return (
    <LightboxContext.Provider value={{ imageSrc, setImageSrc }}>
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
