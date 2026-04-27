import { type ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt }: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-ink/10">
      <div className="lg:col-span-7 flex flex-col justify-center px-6 lg:px-20 py-20 lg:py-28">
        <div className="mb-8 flex items-center gap-4">
          <span className="rule" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-balance leading-[0.95] mb-8">
          {title}
        </h1>
        <p className="text-lg text-ink-muted max-w-[55ch] leading-relaxed text-pretty">
          {intro}
        </p>
      </div>
      <div className="lg:col-span-5 relative border-l border-ink/10 bg-muted min-h-[400px] lg:min-h-[600px]">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
