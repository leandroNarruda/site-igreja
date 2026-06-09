import Image from "next/image";
import Link from "next/link";
import {
  ConstructionCampaignButton,
  ConstructionCampaignModal,
} from "../ConstructionCampaignModal";
import { MobileNavigationMenu } from "../MobileNavigationMenu";
import { CampaignHeroCarousel } from "./CampaignHeroCarousel";
import { CampaignVideoModal } from "./CampaignVideoModal";
import {
  Church,
  ExternalLink,
  HeartHandshake,
  MapPinned,
  Shovel,
  Target,
} from "lucide-react";

const CHURCH_NAME = "IASD Santa Tereza";
const INSTAGRAM_URL =
  "https://www.instagram.com/iasdsantatereza2?utm_source=qr&igsh=czkxd3Y3NzRsdG4=";

const navItems = [
  { label: "Campanha", href: "#campanha" },
  { label: "Sobre", href: "/home#sobre" },
  { label: "Cultos", href: "/home#cultos" },
  { label: "Ministérios", href: "/home#ministerios" },
  { label: "Contato", href: "/home#contato" },
  { label: "Instagram", href: INSTAGRAM_URL, external: true },
];

const campaign = {
  donationUrl: "https://7me.app/71/nqkgt8",
  donationDisplayUrl: "7me.app/71/nqkgt8",
  qrCode: "/QRCode-otimizada.jpg",
};

const currentPainPoints = [
  {
    title: "Espaço apertado nos cultos",
    description:
      "Nos dias de maior movimento, o salão fica no limite. Queremos receber novas famílias com conforto e segurança.",
    image: "/culto-otimizada.jpg",
    alt: "Comunidade reunida em culto no espaço atual",
  },
  {
    title: "Salão alugado",
    description:
      "Hoje dependemos de um espaço alugado. Isso limita melhorias estruturais e gera custo recorrente para a igreja.",
    image: "/fachada-otimizada.jpg",
    alt: "Fachada do local atual utilizado pela igreja",
  },
  {
    title: "Escolinha na casa",
    description:
      "As crianças são atendidas com muito amor, mas a escolinha acontece em casa por falta de estrutura própria.",
    image: "/escolinha-otimizada.jpg",
    alt: "Ambiente da escolinha das crianças",
  },
];

const projectSections = [
  {
    icon: MapPinned,
    title: "Terreno",
    description:
      "O terreno da futura igreja já foi comprado. Agora seguimos com as etapas de regularização, preparação e infraestrutura inicial.",
  },
  {
    icon: Church,
    title: "Projeto",
    description:
      "O objetivo é um templo funcional para culto, classes infantis, ministérios e acolhimento de novas famílias em um único espaço.",
  },
  {
    icon: Shovel,
    title: "Próximos passos",
    description:
      "Com os recursos da campanha, avançamos em documentação, fundação e primeiras fases da construção, com acompanhamento da liderança.",
  },
];

function InstagramIcon() {
  return (
    <span className="grid size-12 place-items-center rounded-xl bg-[linear-gradient(135deg,#feda75_0%,#fa7e1e_35%,#d62976_65%,#4f5bd5_100%)] text-white shadow-sm">
      <svg
        viewBox="0 0 24 24"
        className="size-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

export default function CampaignPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ConstructionCampaignModal />

      <header className="relative z-50 border-b border-stone-200/70 bg-cream/90 backdrop-blur-xl md:sticky md:top-0">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <MobileNavigationMenu navItems={navItems} />
            <Link
              href="#campanha"
              className="flex min-w-0 items-center gap-3"
              aria-label="Ir para o início"
            >
              <span className="hidden size-11 shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-stone-200 md:block">
                <Image
                  src="/fachada-otimizada.jpg"
                  alt="Fachada da igreja"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-wide text-ink sm:text-base">
                  {CHURCH_NAME}
                </span>
                <span className="hidden text-xs uppercase tracking-[0.28em] text-sage sm:block">
                  Casa de oração
                </span>
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="transition-colors hover:text-cedar focus-visible:text-cedar"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ConstructionCampaignButton className="shrink-0 rounded-full bg-cedar px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-cedar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar sm:px-5 sm:py-2.5 sm:text-sm">
              <span className="sm:hidden">Doar</span>
              <span className="hidden sm:inline">Quero contribuir</span>
            </ConstructionCampaignButton>
          </div>
        </div>
      </header>

      <section
        id="campanha"
        className="relative overflow-hidden border-b border-stone-200/70 bg-linen"
      >
        <div className="mx-auto grid max-w-6xl gap-7 px-4 py-6 sm:px-8 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-clay/20 bg-white/80 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-clay sm:px-4 sm:text-xs sm:tracking-[0.16em]">
              <Church size={14} aria-hidden="true" />
              Campanha de construção
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight text-ink sm:mt-6 sm:text-5xl">
              Vamos construir a nossa igreja
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-5 sm:text-lg">
              Esta página reúne a visão completa da campanha: nossa realidade
              atual, os motivos da obra e os próximos passos para tornar esse
              sonho possível.
            </p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center">
              <a
                href={campaign.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cedar px-6 py-3 text-sm font-bold text-white transition hover:bg-cedar-dark"
              >
                <HeartHandshake size={16} aria-hidden="true" />
                Quero contribuir
              </a>
              <CampaignVideoModal />
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 hidden items-center gap-4 text-ink transition hover:text-cedar lg:inline-flex"
            >
              <InstagramIcon />
              <span>
                <span className="block text-xl font-extrabold leading-none tracking-[0.08em] text-clay [font-family:var(--font-caveat)]">
                  Conheça nossa comunidade
                </span>
                <span className="mt-1 block text-3xl leading-tight text-ink [font-family:var(--font-caveat)]">
                  Acompanhe a IASD Santa Tereza no Instagram
                </span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-cedar">
                  Abrir Instagram
                  <ExternalLink size={15} aria-hidden="true" />
                </span>
              </span>
            </a>
          </div>

          <CampaignHeroCarousel />
        </div>
      </section>

      <section className="border-b border-stone-200/70 bg-background lg:hidden">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:py-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-5 rounded-lg border border-clay/25 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-clay/45 hover:shadow-lg hover:shadow-stone-900/10 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6"
          >
            <InstagramIcon />
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-clay">
                Conheça nossa comunidade
              </span>
              <span className="mt-2 block text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                Acompanhe a IASD Santa Tereza no Instagram
              </span>
              <span className="mt-2 block text-sm leading-6 text-muted sm:text-base">
                É por lá que compartilhamos cultos, bastidores, encontros e a
                vida da igreja no dia a dia.
              </span>
            </span>
            <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition group-hover:bg-cedar">
              Abrir Instagram
              <ExternalLink size={16} aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      <section
        id="sobre"
        className="border-b border-stone-200/70 bg-background"
      >
        <span id="cultos" className="block scroll-mt-20" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-14">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
            Nossa realidade hoje
          </h2>
          <p className="mt-3 max-w-3xl text-base text-muted">
            Queremos crescer com responsabilidade e cuidado. Estas são as
            principais dores que vivemos no dia a dia da igreja.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {currentPainPoints.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={720}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ministerios"
        className="border-b border-stone-200/70 bg-linen/70"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-14">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
            Terreno, projeto e próximos passos
          </h2>
          <p className="mt-3 max-w-3xl text-base text-muted">
            A campanha existe para transformar necessidade em ação concreta.
            Cada etapa tem um propósito claro.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projectSections.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
              >
                <item.icon
                  className="text-cedar"
                  size={24}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-12 lg:py-14">
          <div className="rounded-lg border border-cedar/20 bg-white p-5 shadow-sm sm:p-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-cedar/15 bg-cedar/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-sage">
              <Target size={14} aria-hidden="true" />
              Contribuição
            </p>
            <h2 className="mt-5 text-2xl font-semibold text-ink sm:text-4xl">
              Sua oferta constrói o próximo capítulo
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              Toda contribuição ajuda a igreja a sair do aluguel, ampliar o
              espaço para as famílias e oferecer um ambiente adequado para
              nossas crianças. Para doar, escaneie o QRCode ou abra o link
              direto do aplicativo 7me.
            </p>
            <div className="mt-7 grid gap-4 lg:grid-cols-[12rem_1fr_auto] lg:items-center">
              <div className="mx-auto overflow-hidden rounded-lg border border-stone-200 bg-white p-3 shadow-sm lg:mx-0">
                <Image
                  src={campaign.qrCode}
                  alt="QRCode para abrir o aplicativo de doação"
                  width={220}
                  height={264}
                  className="h-44 w-36 object-contain sm:h-48 sm:w-40"
                />
              </div>
              <div className="rounded-lg border border-stone-200 bg-linen/60 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage">
                  Link direto da doação
                </p>
                <a
                  href={campaign.donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block break-all text-lg font-semibold text-ink underline decoration-cedar/35 underline-offset-4 transition hover:text-cedar sm:text-xl"
                >
                  {campaign.donationDisplayUrl}
                </a>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Ideal para quem está acessando pelo celular: toque no botão ao
                  lado e o aplicativo de doação abre em uma nova aba.
                </p>
              </div>
              <a
                href={campaign.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cedar px-6 py-3 text-sm font-bold text-white transition hover:bg-cedar-dark lg:w-auto"
              >
                Abrir doação
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
