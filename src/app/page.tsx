const CHURCH_NAME = "Nome da Igreja";
const WHATSAPP_URL = "https://wa.me/5500000000000";
const ADDRESS = "Rua Exemplo, 123 - Bairro, Cidade";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cultos", href: "#cultos" },
  { label: "Ministerios", href: "#ministerios" },
  { label: "Contato", href: "#contato" },
];

const gatherings = [
  {
    day: "Domingo",
    time: "09h e 19h",
    title: "Culto de adoracao",
    description: "Um tempo de louvor, Palavra e comunhao para toda a familia.",
  },
  {
    day: "Quarta-feira",
    time: "20h",
    title: "Encontro de oracao",
    description: "Uma noite simples e profunda para buscar direcao e cuidado.",
  },
  {
    day: "Sabado",
    time: "17h",
    title: "Estudo biblico",
    description: "Conversas abertas para crescer na fe e conhecer melhor a Biblia.",
  },
];

const ministries = [
  {
    title: "Familias",
    description: "Cuidado pastoral e encontros que fortalecem a vida em casa.",
  },
  {
    title: "Jovens",
    description: "Espacos de amizade, discipulado e servico com proposito.",
  },
  {
    title: "Criancas",
    description: "Ensino biblico com seguranca, afeto e linguagem para cada idade.",
  },
  {
    title: "Estudo biblico",
    description: "Formacao crista para quem esta chegando e para quem quer se aprofundar.",
  },
];

const stats = [
  { value: "Aberta", label: "para receber voce" },
  { value: "Semanal", label: "cultos e encontros" },
  { value: "Familiar", label: "ambiente de cuidado" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Ir para o inicio">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cedar text-lg font-bold text-white shadow-sm">
              NI
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-semibold tracking-wide text-ink">
                {CHURCH_NAME}
              </span>
              <span className="hidden text-xs uppercase tracking-[0.28em] text-sage sm:block">
                Casa de fe
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

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cedar px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cedar-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cedar sm:px-5"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-5rem)] bg-cream">
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_20%,rgba(56,105,96,0.16),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(187,138,80,0.16),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.62),rgba(244,239,228,0.18))]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cedar/20 bg-white/70 px-4 py-2 text-sm font-semibold text-cedar shadow-sm">
              Uma comunidade para caminhar junto
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Bem-vindo a uma igreja feita de pessoas, cuidado e Palavra.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Somos uma comunidade crista que deseja acolher, discipular e servir.
              Aqui voce encontra espaco para conhecer Jesus, construir amizades e
              viver a fe no dia a dia.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
                Ver horarios dos cultos
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-2xl shadow-stone-900/10">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#386960,#f3dcc0)] p-7 text-white">
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,rgba(255,255,255,0.38)_0_1px,transparent_1px_42px)]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/75">
                    Proximo encontro
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold leading-tight">
                    Domingo de comunhao e adoracao
                  </h2>
                </div>
                <div className="relative grid gap-3 rounded-3xl bg-white/20 p-5 backdrop-blur-md">
                  <p className="text-sm text-white/80">Culto principal</p>
                  <p className="text-3xl font-semibold">09h e 19h</p>
                  <p className="text-sm leading-6 text-white/80">
                    Traga sua familia. Ha lugar preparado para quem chega pela
                    primeira vez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cedar">
              Sobre nos
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Uma igreja local, simples e presente.
            </h2>
          </div>
          <div className="grid gap-8">
            <p className="text-lg leading-8 text-muted">
              Este espaco pode contar a historia da igreja, sua visao e o jeito
              como a comunidade vive o evangelho. A proposta e apresentar uma
              igreja acessivel, fiel a Palavra e atenta as necessidades da cidade.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-stone-200 bg-stone-50 p-5"
                >
                  <p className="text-2xl font-semibold text-cedar">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cultos" className="bg-linen py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cedar">
              Cultos e encontros
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Programe sua visita com tranquilidade.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {gatherings.map((gathering) => (
              <article
                key={gathering.title}
                className="flex min-h-72 flex-col justify-between rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
                    {gathering.day}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold text-ink">
                    {gathering.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">{gathering.description}</p>
                </div>
                <p className="mt-8 text-3xl font-semibold text-cedar">
                  {gathering.time}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ministerios" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cedar">
                Ministerios
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Caminhos para servir, aprender e pertencer.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted">
              Cada ministerio existe para cuidar de pessoas e ajudar cada membro a
              viver sua fe com maturidade, comunhao e generosidade.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.map((ministry, index) => (
              <article
                key={ministry.title}
                className="rounded-[1.5rem] border border-stone-200 bg-cream p-6"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-cedar text-lg font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-ink">
                  {ministry.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{ministry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-cedar py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Localizacao e contato
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Quer visitar ou falar com a gente?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Envie uma mensagem pelo WhatsApp para confirmar horarios, tirar
              duvidas ou receber orientacao para chegar. Sera um prazer conversar.
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
              Endereco
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug">{ADDRESS}</p>
            <div className="mt-8 h-56 rounded-[1.25rem] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),rgba(255,255,255,0.05))] p-5">
              <div className="flex h-full items-end rounded-2xl border border-dashed border-white/30 p-5">
                <p className="max-w-sm text-sm leading-6 text-white/75">
                  Area reservada para mapa ou foto da fachada quando os dados reais
                  forem adicionados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            (c) {new Date().getFullYear()} {CHURCH_NAME}. Todos os direitos reservados.
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
