import React, { useState, useEffect } from 'react';

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
}

export default function HeartTrailCursor() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop screen width on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      // 1024px is standard Tailwind lg breakpoint for desktops
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let lastX = 0;
    let lastY = 0;
    let heartId = 0;
    const minDistance = 25; // minimum pixel distance before spawning another heart

    const heartColors = ['#ff85a2', '#ff4d6d', '#ff758f', '#c9184a', '#ffb3c1'];

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.hypot(e.clientX - lastX, e.clientY - lastY);

      if (distance > minDistance) {
        lastX = e.clientX;
        lastY = e.clientY;

        const randomColor = heartColors[Math.floor(Math.random() * heartColors.length)];
        const randomSize = Math.floor(Math.random() * 12) + 12; // 12px to 24px
        const randomRotation = Math.floor(Math.random() * 40) - 20; // -20deg to 20deg

        const newHeart: HeartParticle = {
          id: heartId++,
          x: e.clientX,
          y: e.clientY,
          size: randomSize,
          rotation: randomRotation,
          color: randomColor,
        };

        setHearts((prev) => [...prev, newHeart].slice(-20)); // Limit to max 20 active hearts for optimal performance

        // Remove the heart after 800ms
        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute inline-block pointer-events-none"
          style={{
            left: heart.x,
            top: heart.y,
            transform: `translate(-50%, -50%) rotate(${heart.rotation}deg)`,
            userSelect: 'none',
          }}
        >
          <span className="inline-block animate-heart-float">
            <svg
              viewBox="0 0 24 24"
              width={heart.size}
              height={heart.size}
              fill={heart.color}
              className="opacity-75"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
