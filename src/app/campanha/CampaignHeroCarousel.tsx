"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    type: "image",
    src: "/porta-mala-otimizada.jpg",
    alt: "Comunidade da igreja reunida",
  },
  {
    type: "image",
    src: "/chacara-marli-otimizada.jpg",
    alt: "Comunidade reunida na chácara",
  },
  {
    type: "image",
    src: "/criancas-escolinha-otimizada.jpg",
    alt: "Crianças participando da escolinha",
  },
  {
    type: "image",
    src: "/criancas-pubito-otimizada.jpg",
    alt: "Crianças participando na frente da igreja",
  },
  {
    type: "image",
    src: "/enzo-historinha-otimizada.jpg",
    alt: "Momento de historinha com criança",
  },
  {
    type: "image",
    src: "/esther-porta-otimizada.jpg",
    alt: "Criança na porta da igreja",
  },
  {
    type: "image",
    src: "/historinha-otimizada.jpg",
    alt: "Momento de historinha na igreja",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/2XblZZmfH4o?controls=1&playsinline=1&rel=0&modestbranding=1",
    alt: "Vídeo da campanha de construção",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/T2MHMwE5P-s?controls=1&playsinline=1&rel=0&modestbranding=1",
    alt: "Vídeo da comunidade da igreja",
  },
];

const FIRST_IMAGE_DURATION_MS = 6000;
const IMAGE_DURATION_MS = 3000;

export function CampaignHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (activeSlide.type === "video") return;

    const slideDuration =
      activeIndex === 0 ? FIRST_IMAGE_DURATION_MS : IMAGE_DURATION_MS;

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1,
      );
    }, slideDuration);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeIndex, activeSlide.type]);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? heroSlides.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="relative h-full pb-6 sm:pb-7">
      <div className="relative h-full overflow-hidden rounded-lg border border-stone-200/80 bg-white shadow-sm">
        <div className="relative h-[29.5rem] sm:h-[37.5rem] lg:h-[41.5rem]">
          {activeSlide.type === "image" ? (
            <Image
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              sizes="(min-width: 1024px) 520px, calc(100vw - 2.5rem)"
              loading={activeIndex === 0 ? "eager" : "lazy"}
              priority={activeIndex === 0}
              className="object-cover transition-opacity duration-500 opacity-100"
            />
          ) : (
            <div className="absolute inset-0 bg-black">
              <iframe
                key={activeSlide.src}
                src={activeSlide.src}
                title={activeSlide.alt}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full bg-black"
              />

              <div className="absolute left-4 bottom-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                Toque no play para assistir com som
              </div>
            </div>
          )}
        </div>

        <p className="absolute left-3 top-3 rounded-full bg-ink/62 px-3 py-1 text-xs font-semibold text-white backdrop-blur sm:left-4 sm:top-4 sm:text-sm">
          {activeIndex + 1} / {heroSlides.length}
        </p>

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/45 bg-ink/35 text-white backdrop-blur transition hover:bg-ink/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4 sm:size-10"
          aria-label="Ver slide anterior"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/45 bg-ink/35 text-white backdrop-blur transition hover:bg-ink/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4 sm:size-10"
          aria-label="Ver próximo slide"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5">
        {heroSlides.map((slide, index) => (
          <button
            key={`${slide.alt}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex ? "w-6 bg-cedar" : "w-1.5 bg-stone-300"
            }`}
            aria-label={`Ver slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
