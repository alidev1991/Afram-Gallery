import { Container } from "@/components/ui/container";

export default function StorefrontFoundationPage() {
  return (
    <main
      id="main-content"
      className="relative isolate grid min-h-[70svh] place-items-center overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.055),transparent_38%)]"
      />
      <Container className="py-24 text-center">
        <p className="arfam-eyebrow text-muted">Brand &amp; Frontend Foundation</p>
        <h1 className="arfam-wordmark mt-7 text-[clamp(2.5rem,8vw,6.75rem)] text-silver-bright">
          ARFAM
        </h1>
        <div className="mx-auto mt-8 h-px w-12 bg-line-strong" aria-hidden="true" />
        <p className="mx-auto mt-8 max-w-md text-sm leading-8 text-muted sm:text-base">
          بنیان بصری گالری آرفام آماده است. تجربه اصلی برند در فاز Homepage
          شکل خواهد گرفت.
        </p>
      </Container>
    </main>
  );
}
