import React from 'react';

export const PERSON_IMAGE_PLACEHOLDER = '/images/placeholder.jpg';

/**
 * Person/attorney portrait: uses placeholder when src is empty or fails to load.
 */
export function PersonImage({ src, alt, className, loading, decoding }) {
  const resolved =
    src !== undefined && src !== null && String(src).trim() !== ''
      ? String(src).trim()
      : PERSON_IMAGE_PLACEHOLDER;

  const handleError = (e) => {
    const el = e.currentTarget;
    el.onerror = null;
    if (!el.src.endsWith('placeholder.webp')) {
      el.src = PERSON_IMAGE_PLACEHOLDER;
    }
  };

  return (
    <img
      src={resolved}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={handleError}
    />
  );
}
