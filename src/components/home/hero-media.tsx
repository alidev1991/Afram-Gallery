import Image from "next/image";

type HeroMediaProps = {
  src: string;
};

export function HeroMedia({ src }: HeroMediaProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-[27%_center] sm:object-center"
      />
    </div>
  );
}
