"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

const VIDEO_EMBED_URL = "https://www.youtube.com/embed/Tug0lZijQow";

export function CampaignVideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-cedar/20 bg-white/85 px-5 py-3 text-sm font-bold text-cedar shadow-sm transition hover:border-cedar/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar sm:w-auto"
      >
        <span className="grid size-7 place-items-center rounded-full bg-cedar text-white">
          <Play size={13} fill="currentColor" strokeWidth={2.4} />
        </span>
        Assistir vídeo
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 grid min-h-dvh place-items-center bg-ink/82 px-5 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo da campanha de construção"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-[23rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute -right-3 -top-3 z-10 grid size-11 place-items-center rounded-full border border-stone-200 bg-white text-ink shadow-lg transition hover:text-cedar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label="Fechar vídeo"
            >
              <X size={20} strokeWidth={2.4} />
            </button>
            <div className="overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl shadow-stone-950/45">
              <div className="aspect-[9/16]">
                <iframe
                  src={`${VIDEO_EMBED_URL}?autoplay=1&rel=0`}
                  title="Vídeo da campanha de construção"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
