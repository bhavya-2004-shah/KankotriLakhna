import { useEffect, useState } from 'react';

export const useAssetPreloader = (urls = []) => {
  const [isReady, setIsReady] = useState(() => urls.every((url) => typeof url !== 'string' || url.trim().length === 0));

  useEffect(() => {
    const validUrls = urls.filter((url) => typeof url === 'string' && url.trim().length > 0);
    if (validUrls.length === 0) return undefined;

    let completed = 0;
    let cancelled = false;
    const images = [];

    const finishOne = () => {
      completed += 1;
      if (!cancelled && completed >= validUrls.length) setIsReady(true);
    };

    validUrls.forEach((url) => {
      const image = new Image();
      images.push(image);
      image.onload = finishOne;
      image.onerror = finishOne;
      image.src = url;
    });

    return () => {
      cancelled = true;
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [urls]);

  return { isReady };
};

export default useAssetPreloader;
