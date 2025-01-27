import { useState, useEffect } from 'react';

export const useImageLoader = (file: File | undefined) => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;

    setLoading(true);
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;

    img.onload = () => {
      setImageElement(img);
      setLoading(false);
      setError(null);
    };

    img.onerror = () => {
      setError('Failed to load image');
      setLoading(false);
      setImageElement(null);
    };

    return () => URL.revokeObjectURL(url);
  }, [file]);

  return { imageElement, loading, error };
};