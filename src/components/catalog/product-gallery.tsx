import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import type { CatalogImage } from "@/data/catalog";

type ProductGalleryProps = {
  images: readonly CatalogImage[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <div aria-label="گالری تصاویر محصول" className="space-y-8 sm:space-y-12">
      {images.map((image, index) => (
        <Reveal
          key={`${image.src}-${index}`}
          direction="bottom"
          distance={32}
          delay={Math.min(index * 0.06, 0.18)}
        >
        <figure
          className={index === 0 ? "bg-matte" : "bg-matte sm:ms-auto sm:w-4/5"}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={index === 0}
            sizes={
              index === 0
                ? "(max-width: 1023px) calc(100vw - 2.5rem), 58vw"
                : "(max-width: 639px) calc(100vw - 2.5rem), 46vw"
            }
            className="h-auto w-full object-contain"
          />
        </figure>
        </Reveal>
      ))}
    </div>
  );
}
