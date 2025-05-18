"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setcurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} onClick={() => setcurrent(index)} className={cn('border me-2 cursor-pointer hover:border-orange-600',current === index && 'border-orange-600')}>
            <Image src={image} alt="product image" height={100} width={100} className="cursor-pointer"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
