export function AdminPageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="border-b border-line pb-7">
      <p className="arfam-eyebrow text-subtle">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-light text-silver-bright sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">{description}</p>
    </header>
  );
}
