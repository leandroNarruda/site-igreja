"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Church, Heart, Play } from "lucide-react";

const campaign = {
  donationUrl: "https://7me.app/71/nqkgt8",
  donationDisplayUrl: "7me.app/71/nqkgt8",
  qrCode: "/QRCode-otimizada.jpg",
};

const MODAL_SEEN_STORAGE_KEY = "construction-land-video-modal-seen-v1";
const LAND_PRESENTATION_EMBED_URL =
  "https://www.youtube.com/embed/6wg_qgp-E0E?autoplay=1&playsinline=1&rel=0&modestbranding=1";

const photoSlots = [
  {
    title: "Escolinha",
    caption: "Escolinha das crianças",
    className:
      "col-span-2 row-span-2 bg-[linear-gradient(145deg,rgba(31,42,37,0.18),rgba(56,105,96,0.06)),url('/escolinha-otimizada.jpg')]",
  },
  {
    title: "Igreja atual",
    caption: "Salão alugado",
    className:
      "bg-[linear-gradient(145deg,rgba(31,42,37,0.22),rgba(170,109,58,0.06)),url('/fachada-otimizada.jpg')]",
  },
  {
    title: "Mutirão",
    caption: "Voluntários",
    className:
      "bg-[linear-gradient(145deg,rgba(31,42,37,0.24),rgba(56,105,96,0.04)),url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80')]",
  },
  {
    title: "Cultos",
    caption: "Comunidade reunida",
    className:
      "col-span-2 bg-[linear-gradient(145deg,rgba(31,42,37,0.26),rgba(170,109,58,0.08)),url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80')]",
  },
];

type ConstructionCampaignModalProps = {
  defaultOpen?: boolean;
};

export function ConstructionCampaignModal({
  defaultOpen = true,
}: ConstructionCampaignModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!defaultOpen) return;

    try {
      if (window.sessionStorage.getItem(MODAL_SEEN_STORAGE_KEY)) return;

      window.sessionStorage.setItem(MODAL_SEEN_STORAGE_KEY, "true");
      window.setTimeout(() => setIsOpen(true), 0);
    } catch {
      window.setTimeout(() => setIsOpen(true), 0);
    }
  }, [defaultOpen]);

  useEffect(() => {
    const openCampaign = () => setIsOpen(true);
    window.addEventListener("open-construction-campaign", openCampaign);

    return () => {
      window.removeEventListener("open-construction-campaign", openCampaign);
    };
  }, []);

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 rounded-full bg-cedar px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-stone-900/20 transition hover:bg-cedar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar"
        >
          <span aria-hidden="true">+</span>
          Quero contribuir
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] grid min-h-dvh place-items-center bg-ink/78 px-0 py-0 backdrop-blur-md sm:px-6 sm:py-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="construction-campaign-title"
        >
          <div className="relative grid h-dvh w-full overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(170,109,58,0.14),transparent_34%),linear-gradient(135deg,#fff,#f8f4eb)] shadow-2xl shadow-stone-950/30 sm:h-auto sm:max-h-[calc(100dvh-2rem)] sm:max-w-6xl sm:rounded-[1.75rem] lg:grid-cols-[0.92fr_1.08fr] lg:overflow-hidden">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-stone-200 bg-white/90 text-2xl leading-none text-ink shadow-sm transition hover:border-cedar/40 hover:text-cedar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar"
              aria-label="Fechar campanha de construção"
            >
              x
            </button>

            <aside className="relative min-h-[22rem] bg-ink p-2 text-white sm:p-4 lg:min-h-[38rem] lg:p-5">
              <svg
                className="pointer-events-none absolute inset-y-0 -right-12 z-20 hidden h-full w-28 lg:block"
                viewBox="0 0 112 720"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="constructionPanelGradient"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8f4eb" />
                  </linearGradient>
                  <linearGradient
                    id="constructionDividerGradient"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#f8d995" />
                    <stop offset="42%" stopColor="#c98237" />
                    <stop offset="100%" stopColor="#7d4b20" />
                  </linearGradient>
                  <filter
                    id="constructionDividerGlow"
                    x="-80%"
                    y="-10%"
                    width="260%"
                    height="120%"
                  >
                    <feDropShadow
                      dx="-2"
                      dy="0"
                      stdDeviation="2.6"
                      floodColor="#f8d995"
                      floodOpacity="0.45"
                    />
                    <feDropShadow
                      dx="2"
                      dy="0"
                      stdDeviation="1.8"
                      floodColor="#7d4b20"
                      floodOpacity="0.22"
                    />
                  </filter>
                </defs>
                <path
                  d="M72 0C39 120 30 245 54 360C79 478 77 602 38 720H112V0H72Z"
                  fill="url(#constructionPanelGradient)"
                />
                <path
                  d="M72 0C39 120 30 245 54 360C79 478 77 602 38 720"
                  fill="none"
                  stroke="#fff7df"
                  strokeWidth="14"
                  strokeLinecap="round"
                  opacity="0.72"
                />
                <path
                  d="M72 0C39 120 30 245 54 360C79 478 77 602 38 720"
                  fill="none"
                  filter="url(#constructionDividerGlow)"
                  stroke="url(#constructionDividerGradient)"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </svg>
              <div className="relative grid h-full min-h-[21rem] grid-cols-2 grid-rows-[1fr_1fr_0.82fr] gap-1.5 overflow-hidden rounded-[0.8rem] bg-ink sm:gap-2 sm:rounded-[1rem] lg:gap-3 lg:rounded-[1.25rem]">
                {photoSlots.map((slot) => (
                  <div
                    key={slot.title}
                    className={`${slot.className} relative overflow-hidden rounded-[0.7rem] bg-cover bg-center shadow-inner sm:rounded-[0.85rem] lg:rounded-[1rem]`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/8 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <p className="text-sm font-semibold">{slot.title}</p>
                      <p className="mt-1 text-xs text-white/75">
                        {slot.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute left-8 top-8 z-10 max-w-60">
                <p className="text-[2.55rem] leading-[1.02] text-amber-100 [font-family:var(--font-caveat)] [text-shadow:0_2px_10px_rgba(31,42,37,0.6)]">
                  Juntos, estamos edificando um legado de fé.
                </p>
              </div>
            </aside>

            <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-clay/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-clay shadow-sm">
                  <Church size={14} strokeWidth={2.2} aria-hidden="true" />
                  Campanha de construção
                </span>

                <h2
                  id="construction-campaign-title"
                  className="mt-7 max-w-xl text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl"
                >
                  Ajude a construir nossa igreja
                </h2>
                <div className="mt-4 h-1 w-28 rounded-full bg-clay" />
                <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                  Cada contribuição ajuda a transformar esse terreno em um
                  espaço de fé, acolhimento e esperança para muitas famílias.
                </p>

                <div className="mt-7 overflow-hidden rounded-2xl border border-stone-200 bg-black shadow-xl shadow-stone-950/15">
                  <div className="aspect-[9/16] sm:aspect-video">
                    <iframe
                      src={LAND_PRESENTATION_EMBED_URL}
                      title="Apresentação do terreno comprado pela igreja"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </div>

                <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:hidden">
                  <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-sm font-medium text-muted">Campanha</p>
                    <p className="mt-2 text-xl font-bold text-cedar">Ativa</p>
                    <p className="mt-2 text-xs leading-5 text-muted">
                      Contribuições abertas para toda a comunidade.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-sm font-medium text-muted">Cuidado</p>
                    <p className="mt-2 text-xl font-bold text-clay">
                      Transparência
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted">
                      Relatórios podem ser compartilhados internamente.
                    </p>
                  </div>
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <a
                    href={campaign.donationUrl}
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-cedar px-6 py-4 text-base font-bold text-white shadow-lg shadow-cedar/20 transition hover:bg-cedar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar"
                  >
                    <Heart
                      className="text-white"
                      size={24}
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                    Quero doar
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                  <a
                    href="/campanha"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-ink/25 bg-white px-6 py-4 text-base font-bold text-ink transition hover:border-cedar/45 hover:text-cedar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar"
                  >
                    <Play size={18} fill="currentColor" aria-hidden="true" />
                    Saiba mais
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>

                <div className="mt-8 grid gap-4 rounded-2xl border border-cedar/15 bg-white/75 p-4 shadow-sm sm:grid-cols-[8.5rem_1fr] sm:items-center">
                  <div className="mx-auto overflow-hidden rounded-xl border border-stone-200 bg-white p-2 shadow-sm sm:mx-0">
                    <Image
                      src={campaign.qrCode}
                      alt="QRCode para abrir o aplicativo de doação"
                      width={160}
                      height={192}
                      className="h-36 w-32 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">
                      Doe pelo aplicativo
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Escaneie o QRCode ou abra o link direto para contribuir
                      com segurança pelo 7me.
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <a
                        href={campaign.donationUrl}
                        onClick={() => setIsOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-clay px-5 py-2.5 text-sm font-bold text-white transition hover:bg-clay-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
                      >
                        {campaign.donationDisplayUrl}
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mt-7 text-center text-sm font-medium text-muted">
                  Cada gesto de fé constrói o amanhã.
                </p>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

type ConstructionCampaignButtonProps = {
  children: ReactNode;
  className?: string;
};

export function ConstructionCampaignButton({
  children,
  className,
}: ConstructionCampaignButtonProps) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("open-construction-campaign"))
      }
      className={className}
    >
      {children}
    </button>
  );
}
