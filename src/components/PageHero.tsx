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
      <div className="lg:col-span-7 flex flex-col justify-center px-5 sm:px-8 lg:px-20 py-14 sm:py-20 lg:py-28 order-2 lg:order-1">
        <div className="mb-6 lg:mb-8 flex items-center gap-4">
          <span className="rule" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="text-[2.5rem] sm:text-5xl lg:text-7xl font-light text-balance leading-[0.95] mb-6 lg:mb-8">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-ink-muted max-w-[55ch] leading-relaxed text-pretty">
          {intro}
        </p>
      </div>
      <div className="lg:col-span-5 relative lg:border-l border-ink/10 bg-muted h-[40vh] min-h-[260px] lg:min-h-[600px] order-1 lg:order-2">
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
