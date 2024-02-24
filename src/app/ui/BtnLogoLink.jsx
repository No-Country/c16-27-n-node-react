import React from 'react';
import Image from 'next/image';

const BtnLogoLink = ({ src, alt, width, height }) => {
  return (
    <button>
      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </button>
  );
};

export default BtnLogoLink;