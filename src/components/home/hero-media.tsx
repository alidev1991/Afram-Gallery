import Image from "next/image";

type HeroMediaProps = {
  desktopSrc: string;
  mobileSrc?: string;
};

export function HeroMedia({ desktopSrc, mobileSrc }: HeroMediaProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {mobileSrc ? (
        <>
          <Image
            src={mobileSrc}
            alt=""
            fill
            priority
            quality={85}
            sizes="(max-width: 639px) 100vw, 1px"
            className="object-contain sm:hidden"
          />
          <Image
            src={desktopSrc}
            alt=""
            fill
            priority
            quality={85}
            sizes="(max-width: 639px) 1px, 100vw"
            className="hidden object-cover object-center sm:block"
          />
        </>
      ) : (
        <Image
          src={desktopSrc}
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-contain object-center sm:object-cover sm:object-center"
        />
      )}
    </div>
  );
}
