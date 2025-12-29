'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/client';

interface ImageSlideshowProps {
  images: any[];
  alt: string;
  interval?: number;
}

export function ImageSlideshow({ images, alt, interval = 4000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {images.map((image, index) => {
        const imageUrl = urlFor(image).width(800).height(512).url();
        return (
          <div
            key={image._key || index}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <Image
              src={imageUrl}
              alt={`${alt} - Image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        );
      })}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 10,
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentIndex ? '#ffffff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
