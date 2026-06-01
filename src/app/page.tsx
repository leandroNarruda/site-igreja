"use client";

import {
  ConstructionCampaignButton,
  ConstructionCampaignModal,
} from "./ConstructionCampaignModal";
import Image from "next/image";
import { motion } from "framer-motion";

const CHURCH_NAME = "IASD Santa Tereza";
const WHATSAPP_URL = "https://wa.me/5541985154409";
const ADDRESS =
  "Rua Manoel Pires Cordeiro, 422 - São Sebastiao, São José dos Pinhais - PR, 83075-218";

const navItems = [
  { label: "Campanha", href: "/campanha" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cultos", href: "#cultos" },
  { label: "Ministérios", href: "#ministerios" },
  { label: "Contato", href: "#contato" },
];

const gatherings = [
  {
    day: "Sábado",
    time: "09h e 10h15",
    title: "Escola Sabatina e Culto Divino",
    description: "Escola Sabatina às 9h e Culto Divino às 10h15.",
    image: "/adoracao-infantil-otimizada.jpg",
  },
  {
    day: "Quarta-feira",
    time: "20h",
    title: "Encontro de oração",
    description: "Uma noite simples e profunda para buscar direção e cuidado.",
    image: "/recepcao-otimizada.jpg",
  },
  {
    day: "Domingo",
    time: "19h",
    title: "Culto de adoração",
    description: "Um tempo de louvor, Palavra e comunhão para toda a família.",
    image: "/culto-otimizada.jpg",
  },
];

const ministries = [
  {
    title: "Famílias",
    description: "Cuidado pastoral e encontros que fortalecem a vida em casa.",
    image: "/familia-otimizada.jpg",
  },
  {
    title: "Jovens",
    description: "Espaços de amizade, discipulado e serviço com propósito.",
    image: "/jovens-otimizada.jpg",
  },
  {
    title: "Crianças",
    description:
      "Ensino bíblico com segurança, afeto e linguagem para cada idade.",
    image: "/criancas-otimizada.jpg",
  },
  {
    title: "Saúde",
    description: "Cuidado integral, prevenção e promoção de hábitos saudáveis.",
    image: "/ministerio-saude-otimizada.jpg",
  },
];

const stats = [
  { value: "Aberta", label: "para receber você" },
  { value: "Semanal", label: "cultos e encontros" },
  { value: "Familiar", label: "ambiente de cuidado" },
];

type NextEncounter = {
  dayLabel: string;
  time: string;
  title: string;
  details: string;
  image?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const nextEncounterSchedule: Array<{
  day: number;
  minutes: number;
  dayLabel: string;
  time: string;
  title: string;
  details: string;
  image?: string;
}> = [
  {
    day: 6,
    minutes: 9 * 60,
    dayLabel: "Sábado",
    time: "09h",
    title: "Escola Sabatina",
    details: "Momento de estudo da Bíblia em classes para todas as idades.",
    image: "/adoracao-infantil-otimizada.jpg",
  },
  {
    day: 6,
    minutes: 10 * 60 + 15,
    dayLabel: "Sábado",
    time: "10h15",
    title: "Culto Divino",
    details: "Celebração com louvor, oração e mensagem bíblica.",
    image: "/adoracao-infantil-otimizada.jpg",
  },
  {
    day: 3,
    minutes: 20 * 60,
    dayLabel: "Quarta-feira",
    time: "20h",
    title: "Encontro de oração",
    details: "Uma noite simples e profunda para buscar direção e cuidado.",
    image: "/recepcao-otimizada.jpg",
  },
  {
    day: 0,
    minutes: 19 * 60,
    dayLabel: "Domingo",
    time: "19h",
    title: "Culto de adoração",
    details: "Um tempo de louvor, Palavra e comunhão para toda a família.",
    image: "/culto-otimizada.jpg",
  },
];

function getSaoPauloNow() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  })
    .formatToParts(new Date())
    .reduce(
      (acc, part) => {
        if (part.type !== "literal") acc[part.type] = part.value;
        return acc;
      },
      {} as Record<string, string>,
    );

  const weekMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return {
    day: weekMap[parts.weekday] ?? 0,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

function getNextEncounter(): NextEncounter {
  const now = getSaoPauloNow();
  let chosen = nextEncounterSchedule[0];
  let minDistance = Number.POSITIVE_INFINITY;

  for (const item of nextEncounterSchedule) {
    const dayDelta = (item.day - now.day + 7) % 7;
    const timeDelta = item.minutes - now.minutes;
    const totalDelta = dayDelta * 1440 + timeDelta;
    const normalizedDelta = totalDelta >= 0 ? totalDelta : totalDelta + 10080;

    if (normalizedDelta < minDistance) {
      minDistance = normalizedDelta;
      chosen = item;
    }
  }

  return chosen;
}

export default function Home() {
  const nextEncounter = getNextEncounter();

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <ConstructionCampaignModal />

      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="Ir para o início"
          >
            <span className="size-11 shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-stone-200">
              <Image
                src="/fachada-otimizada.jpg"
                alt="Fachada da igreja"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-semibold tracking-wide text-ink">
                {CHURCH_NAME}
              </span>
              <span className="hidden text-xs uppercase tracking-[0.28em] text-sage sm:block">
                Casa de oração
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-cedar focus-visible:text-cedar"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ConstructionCampaignButton className="rounded-full bg-cedar px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cedar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar sm:px-5">
            Quero contribuir
          </ConstructionCampaignButton>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-5rem)] bg-cream">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fachada-otimizada.jpg')" }}
        />
        <div className="absolute inset-0 bg-cream/72" />
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_20%,rgba(56,105,96,0.16),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(187,138,80,0.16),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.62),rgba(244,239,228,0.18))]" />
        <motion.div
          className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            className="max-w-3xl lg:col-start-1 lg:row-start-1"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.p
              className="mb-5 inline-flex rounded-full border border-cedar/20 bg-white/70 px-4 py-2 text-sm font-semibold text-cedar shadow-sm"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              Uma comunidade para caminhar junto
            </motion.p>
            <motion.h1
              className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              Bem-vindo a uma igreja feita de pessoas, cuidado e Palavra.
            </motion.h1>
            <motion.p
              className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Somos uma comunidade cristã que deseja acolher, discipular e
              servir. Aqui você encontra espaço para conhecer Jesus, construir
              amizades e viver a fé no dia a dia.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl lg:col-start-2 lg:row-span-2 lg:justify-self-end"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-2xl shadow-stone-900/10">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#386960,#f3dcc0)] p-7 text-white">
                {nextEncounter.image ? (
                  <Image
                    src={nextEncounter.image}
                    alt={nextEncounter.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-ink/55" />
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,rgba(255,255,255,0.38)_0_1px,transparent_1px_42px)]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/75">
                    Próximo encontro
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold leading-tight">
                    {nextEncounter.dayLabel}: {nextEncounter.title}
                  </h2>
                </div>
                <div className="relative grid gap-3 rounded-3xl bg-white/20 p-5 backdrop-blur-md">
                  <p className="text-sm text-white/80">Culto principal</p>
                  <p className="text-3xl font-semibold">{nextEncounter.time}</p>
                  <p className="text-sm leading-6 text-white/80">
                    {nextEncounter.details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-0 flex flex-col gap-3 sm:flex-row lg:col-start-1 lg:row-start-2 lg:mt-0"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cedar px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cedar/20 transition hover:bg-cedar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar"
            >
              Falar com a igreja
            </a>
            <a
              href="#cultos"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/75 px-6 py-3.5 text-base font-semibold text-ink transition hover:border-cedar/40 hover:text-cedar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar"
            >
              Ver horários dos cultos
            </a>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="sobre"
        className="bg-white py-10 sm:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cedar">
              Sobre nós
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Uma igreja local, simples e presente.
            </h2>
          </div>
          <div className="grid gap-8">
            <p className="text-lg leading-8 text-muted">
              Este espaço pode contar a história da igreja, sua visão e o jeito
              como a comunidade vive o evangelho. A proposta é apresentar uma
              igreja acessível, fiel à Palavra e atenta às necessidades da
              cidade.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-stone-200 bg-stone-50 p-5"
                >
                  <p className="text-2xl font-semibold text-cedar">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="cultos"
        className="bg-linen py-10 sm:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cedar">
              Cultos e encontros
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Programe sua visita com tranquilidade.
            </h2>
          </div>

          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-3"
            variants={stagger}
          >
            {gatherings.map((gathering) => (
              <motion.article
                key={gathering.title}
                className="flex min-h-72 flex-col justify-between rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm"
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                {gathering.image ? (
                  <div className="mb-5 overflow-hidden rounded-2xl">
                    <Image
                      src={gathering.image}
                      alt={gathering.title}
                      width={640}
                      height={360}
                      className={`h-36 w-full object-cover ${gathering.day === "Quarta-feira" ? "object-top" : "object-center"}`}
                    />
                  </div>
                ) : null}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
                    {gathering.day}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold text-ink">
                    {gathering.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">
                    {gathering.description}
                  </p>
                </div>
                <p className="mt-8 text-3xl font-semibold text-cedar">
                  {gathering.time}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="ministerios"
        className="bg-white py-10 sm:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cedar">
                Ministérios
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Caminhos para servir, aprender e pertencer.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted">
              Cada ministério existe para cuidar de pessoas e ajudar cada membro
              a viver sua fé com maturidade, comunhão e generosidade.
            </p>
          </div>

          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
          >
            {ministries.map((ministry, index) => (
              <motion.article
                key={ministry.title}
                className="relative overflow-hidden rounded-[1.5rem] border border-stone-200 p-6"
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/60" />
                <span className="relative grid size-12 place-items-center rounded-2xl bg-white/20 text-lg font-semibold text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-6 text-xl font-semibold text-white">
                  {ministry.title}
                </h3>
                <p className="relative mt-3 leading-7 text-white/85">
                  {ministry.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section id="contato" className="bg-cedar py-10 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Localização e contato
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Quer visitar ou falar com a gente?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Envie uma mensagem pelo WhatsApp para confirmar horários, tirar
              dúvidas ou receber orientação para chegar. Será um prazer
              conversar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-cedar transition hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Abrir mapa
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              Endereço
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug">
              {ADDRESS}
            </p>
            <div className="mt-8 h-56 rounded-[1.25rem] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),rgba(255,255,255,0.05))]">
              <div className="h-full overflow-hidden rounded-2xl border border-white/30">
                <iframe
                  title="Mapa da igreja"
                  src="https://www.google.com/maps?q=Rua%20Manoel%20Pires%20Cordeiro%2C%20422%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            (c) {new Date().getFullYear()} {CHURCH_NAME}. Todos os direitos
            reservados.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm text-white/70">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
