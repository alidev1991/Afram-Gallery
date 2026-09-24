type SectionIntroProps = {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionIntro({
  id,
  eyebrow,
  title,
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">
        {eyebrow}
      </p>
      <div className="lg:col-span-6 lg:col-start-7">
        <h2
          id={id}
          className="text-[clamp(2rem,4.6vw,4.75rem)] font-light leading-[1.28] tracking-[-0.025em] text-silver-bright"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
