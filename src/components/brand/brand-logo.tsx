import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  imageSrc?: string;
  mobileImageSrc?: string;
  priority?: boolean;
};

export function BrandLogo({
  className = "",
  imageSrc,
  mobileImageSrc,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="صفحه اصلی گالری آرفام"
      className={`inline-flex items-center justify-center ${className}`}
    >
      {imageSrc ? (
        mobileImageSrc ? (
          <>
            <Image
              src={mobileImageSrc}
              alt="ARFAM Gallery"
              width={639}
              height={641}
              priority={priority}
              sizes="40px"
              className="h-10 w-auto object-contain md:hidden"
            />
            <Image
              src={imageSrc}
              alt="ARFAM Gallery"
              width={639}
              height={784}
              priority={priority}
              sizes="52px"
              className="hidden h-16 w-auto object-contain md:block"
            />
          </>
        ) : (
          <Image
            src={imageSrc}
            alt="ARFAM Gallery"
            width={172}
            height={44}
            priority={priority}
            className="h-auto w-[8.75rem] object-contain sm:w-[10.75rem]"
          />
        )
      ) : (
        <span
          className="arfam-wordmark text-lg text-silver-bright sm:text-xl"
          aria-hidden="true"
        >
          ARFAM
        </span>
      )}
    </Link>
  );
}
