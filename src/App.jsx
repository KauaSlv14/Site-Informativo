import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  AtSign,
  Award,
  Bot,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  GitBranch,
  Globe,
  Lightbulb,
  MapPin,
  Rocket,
  Server,
} from 'lucide-react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import projetos from './data/projetos.json'
import eventos from './data/eventos.json'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kau%C3%A3-almeida-silva/',
    iconPath: '/social/linkedin.svg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/KauaSlv14',
    iconPath: '/social/github.svg',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    iconPath: '/social/instagram.svg',
  },
  {
    label: 'Contato',
    href: 'mailto:kaua.almeida@email.com',
    icon: AtSign,
  },
  {
    label: 'Curriculo',
    href: '/curriculo.pdf',
    icon: Award,
  },
]

const TECH_STACK = [
  { name: 'Oracle APEX', icon: Database },
  { name: 'PL/SQL', icon: Server },
  { name: 'Python', icon: Code2 },
  { name: 'n8n', icon: Bot },
  { name: 'JavaScript', icon: FileCode2 },
  { name: 'HTML', icon: Braces },
  { name: 'CSS', icon: Braces },
  { name: 'Bootstrap', icon: Boxes },
  { name: 'Git/GitHub', icon: GitBranch },
  { name: 'Docker', icon: Boxes },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Cloud },
]

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  show: (idx) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: idx * 0.05 },
  }),
}

function AppShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid bg-[length:42px_42px] opacity-25" />
      <div className="pointer-events-none absolute -left-36 top-16 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-72 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        {children}
      </main>
    </div>
  )
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  )
}

function BackToHome() {
  return (
    <Link
      to="/"
      className="mb-7 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 transition-all duration-300 hover:scale-105 hover:border-cyan-300/60 hover:bg-cyan-400/10"
    >
      <ArrowLeft size={16} />
      Voltar para inicio
    </Link>
  )
}

function HomePage() {
  const sections = [
    {
      title: 'Sobre',
      to: '/sobre',
    },
    {
      title: 'Tecnologias',
      to: '/tecnologias',
    },
    {
      title: 'Projetos',
      to: '/projetos',
    },
    {
      title: 'Eventos',
      to: '/eventos',
    },
  ]

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={sectionReveal}
      className="glass-card rounded-3xl border border-white/10 p-6 md:p-12"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        <motion.img
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          whileHover={{ scale: 1.03 }}
          src="/avatar/avatar.jpg"
          alt="Avatar de Kaua Almeida"
          className="mx-auto h-36 w-36 shrink-0 rounded-2xl border border-cyan-300/40 object-cover shadow-[0_20px_50px_rgba(10,18,38,0.65)] ring-1 ring-cyan-300/25 transition-all duration-300 hover:shadow-[0_18px_45px_rgba(34,211,238,0.2)] md:mx-0 md:h-44 md:w-44"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="w-full"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Portfolio
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.02] text-white md:text-6xl">
            Kaua Almeida
          </h1>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/85 md:text-sm">
            Desenvolvedor | Oracle APEX | Python | n8n | AWS Builder
          </p>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-slate-300 md:text-xl">
            Transformando ideias em solucoes reais atraves da tecnologia.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon
              const isPrimary = item.label === 'LinkedIn'
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 ${
                    isPrimary
                      ? 'border border-cyan-200/40 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-[0_8px_24px_rgba(34,211,238,0.35)] hover:from-cyan-300 hover:to-sky-300'
                      : 'border border-white/20 bg-white/5 text-slate-100 hover:border-cyan-300/70 hover:bg-cyan-400/15 hover:shadow-[0_8px_22px_rgba(34,211,238,0.22)]'
                  }`}
                >
                  {item.iconPath ? (
                    <img
                      src={item.iconPath}
                      alt={`Icone ${item.label}`}
                      className="h-4 w-4 object-contain"
                    />
                  ) : (
                    <Icon
                      size={14}
                      className={isPrimary ? 'text-slate-900' : 'text-cyan-300'}
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 md:text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <Rocket size={14} className="text-cyan-300" />
              AWS Builder Student Leader
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lightbulb size={14} className="text-cyan-300" />
              Foco em Automacoes e Backend
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-cyan-300" />
              Fortaleza - CE
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="mt-9 border-t border-white/10 pt-5"
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:flex-nowrap md:gap-x-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              custom={idx}
              initial="hidden"
              animate="show"
              variants={cardReveal}
            >
              <Link
                to={section.to}
                className="group relative inline-flex items-center gap-1.5 py-1 text-base font-semibold text-slate-300 transition-colors duration-300 hover:text-white md:text-lg"
              >
                <span>{section.title}</span>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-cyan-300 transition group-hover:translate-x-[2px] group-hover:translate-y-[-2px]"
                />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

function SobrePage() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={sectionReveal}
      className="glass-card rounded-3xl border border-white/10 p-6 md:p-10"
    >
      <BackToHome />
      <SectionHeader
        eyebrow="Sobre"
        title="Sobre"
        description="Minha trajetoria e o tipo de solucao que busco construir."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
          Fortaleza - CE
        </span>
        <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
          AWS Builder Student Leader
        </span>
        <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
          Automacoes e Backend
        </span>
      </div>

      <div className="max-w-4xl space-y-5 text-slate-300 md:text-lg">
        <p>
          Sou Kaua Almeida, desenvolvedor apaixonado por tecnologia, automacoes e
          inovacao. Sou de Fortaleza - CE e me formei em 2025 no ensino medio
          profissionalizante com formacao tecnica em Redes de Computadores.
          Atualmente curso Ciencia da Computacao na Unifanor (Campus Dunas), com
          previsao de conclusao em 2030.
        </p>
        <p>
          Minha trajetoria sempre foi muito voltada para aprender na pratica,
          explorar novas tecnologias e construir solucoes reais. Tenho
          experiencia com Oracle APEX, PL/SQL, Python, automacoes com n8n,
          desenvolvimento de aplicacoes web e integracoes entre sistemas.
        </p>
        <p>
          Tenho grande interesse em inteligencia artificial, automacoes,
          desenvolvimento backend, cloud computing, networking e comunidades
          tech. Atualmente faco parte do programa AWS Builder Student Leader,
          participando de eventos, iniciativas e atividades voltadas a
          comunidade de tecnologia e cloud.
        </p>
      </div>
    </motion.section>
  )
}

function TecnologiasPage() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={sectionReveal}
      className="glass-card rounded-3xl border border-white/10 p-6 md:p-10"
    >
      <BackToHome />
      <SectionHeader
        eyebrow="Stack"
        title="Tecnologias"
        description="Stack que uso no dia a dia para desenvolver e automatizar solucoes."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_STACK.map((tech, idx) => {
          const Icon = tech.icon
          return (
            <motion.article
              key={tech.name}
              custom={idx}
              initial="hidden"
              animate="show"
              variants={cardReveal}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
            >
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex rounded-lg border border-cyan-300/20 bg-cyan-400/10 p-2 text-cyan-300">
                  <Icon size={16} />
                </span>
                <p className="text-sm font-medium text-slate-100">{tech.name}</p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}

function ProjetosPage() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={sectionReveal}
      className="glass-card rounded-3xl border border-white/10 p-6 md:p-10"
    >
      <BackToHome />
      <SectionHeader
        eyebrow="Cases"
        title="Projetos"
        description="Projetos com foco em resultado, automacao e produto funcional."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projetos.map((projeto, idx) => (
          <motion.article
            key={projeto.titulo}
            custom={idx}
            initial="hidden"
            animate="show"
            variants={cardReveal}
            whileHover={{ y: -3 }}
            className={`overflow-hidden rounded-2xl border p-4 transition-all duration-300 ${
              projeto.destaque
                ? 'border-cyan-300/50 bg-cyan-400/10'
                : 'border-white/10 bg-white/5 hover:border-cyan-300/40 hover:bg-cyan-400/5'
            }`}
          >
            <div className="mb-4 aspect-video overflow-hidden rounded-xl">
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h3 className="font-display text-2xl font-semibold text-white">
              {projeto.titulo}
            </h3>
            <p className="mt-2 text-slate-300">{projeto.descricao}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {projeto.tecnologias.map((tech) => (
                <span
                  key={`${projeto.titulo}-${tech}`}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={projeto.linkProjeto}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-200/45 bg-gradient-to-r from-cyan-400 to-sky-400 px-3 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:from-cyan-300 hover:to-sky-300"
              >
                <Globe size={15} />
                Ver projeto
              </a>
              {projeto.linkGithub && (
                <a
                  href={projeto.linkGithub}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 transition-all duration-300 hover:scale-105 hover:border-cyan-300/60 hover:bg-cyan-400/10"
                >
                  <GitBranch size={15} />
                  GitHub
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

function EventosPage() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={sectionReveal}
      className="glass-card rounded-3xl border border-white/10 p-6 md:p-10"
    >
      <BackToHome />
      <SectionHeader
        eyebrow="Comunidade"
        title="Eventos"
        description="Participacao ativa em comunidade e ecossistema de tecnologia."
      />

      <div className="space-y-4">
        {eventos.map((evento, idx) => (
          <motion.article
            key={`${evento.titulo}-${evento.data}`}
            custom={idx}
            initial="hidden"
            animate="show"
            variants={cardReveal}
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/5"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="w-full overflow-hidden rounded-xl md:w-64">
                <img
                  src={evento.imagem}
                  alt={evento.titulo}
                  className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                    {evento.categoria}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {evento.data}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {evento.local}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-white">
                  {evento.titulo}
                </h3>
                <p className="mt-2 text-slate-300">{evento.descricao}</p>

                {evento.link && (
                  <a
                    href={evento.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-cyan-300/60 hover:bg-cyan-400/10"
                  >
                    Link externo
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/tecnologias" element={<TecnologiasPage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/eventos" element={<EventosPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
