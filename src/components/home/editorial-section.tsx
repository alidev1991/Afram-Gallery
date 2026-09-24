import Image from "next/image";

import { Container } from "@/components/ui/container";

export function EditorialSection() {
  return (
    <section aria-label="فضای داخلی آرفام" className="bg-canvas py-24 sm:py-32 lg:py-44">
      <Container>
        <div className="relative aspect-[3/2] overflow-hidden bg-matte sm:aspect-[16/10]">
          <Image
            src="/media/home/editorial-living.webp"
            alt="فضای نشیمن معاصر با پالت تیره و آبجکت‌های مینیمال"
            fill
            sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1536px) calc(100vw - 8vw), 1440px"
            className="object-contain transition-transform duration-700 ease-[var(--arfam-ease)] sm:object-cover sm:hover:scale-[1.015]"
          />
        </div>
      </Container>
    </section>
  );
}
