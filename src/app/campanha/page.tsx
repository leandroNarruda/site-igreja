import Image from "next/image";
import Link from "next/link";
import {
  Church,
  HeartHandshake,
  MapPinned,
  Shovel,
  Target,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5541985154409";

const campaign = {
  goal: 90000,
  pix: "CNPJ 00.000.000/0001-00",
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

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
      "Já temos um direcionamento claro para o local da futura igreja. Essa etapa foca regularização, preparação e infraestrutura inicial.",
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

export default function CampaignPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-stone-200/70 bg-cream/95">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="text-sm font-semibold text-muted transition hover:text-cedar"
          >
            Voltar para o site
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cedar px-4 py-2 text-sm font-semibold text-white transition hover:bg-cedar-dark"
          >
            Falar com a igreja
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-stone-200/70 bg-linen">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-clay/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-clay">
              <Church size={14} aria-hidden="true" />
              Campanha de construção
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Vamos construir a nossa igreja
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Esta página reúne a visão completa da campanha: nossa realidade
              atual, os motivos da obra e os próximos passos para tornar esse
              sonho possível.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cedar px-6 py-3 text-sm font-bold text-white transition hover:bg-cedar-dark"
              >
                <HeartHandshake size={16} aria-hidden="true" />
                Quero contribuir
              </a>
              <span className="rounded-full border border-cedar/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                Meta: {currencyFormatter.format(campaign.goal)}
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-stone-200/80 bg-white shadow-sm">
            <Image
              src="/porta-mala-otimizada.jpg"
              alt="Comunidade da igreja reunida"
              width={960}
              height={680}
              loading="eager"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200/70 bg-background">
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

      <section className="border-b border-stone-200/70 bg-linen/70">
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

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-14">
          <div className="rounded-lg border border-cedar/20 bg-white p-7 shadow-sm sm:p-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-cedar/15 bg-cedar/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-sage">
              <Target size={14} aria-hidden="true" />
              Contribuição
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
              Sua oferta constrói o próximo capítulo
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              Toda contribuição ajuda a igreja a sair do aluguel, ampliar o
              espaço para as famílias e oferecer um ambiente adequado para
              nossas crianças.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="rounded-lg border border-stone-200 bg-linen/60 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage">
                  Chave PIX
                </p>
                <p className="mt-2 break-all text-sm font-semibold text-ink">
                  {campaign.pix}
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cedar px-6 py-3 text-sm font-bold text-white transition hover:bg-cedar-dark"
              >
                Enviar comprovante no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
