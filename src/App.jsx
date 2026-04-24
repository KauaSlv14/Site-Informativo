import { motion } from 'framer-motion'
import {
  AtSign,
  ArrowUpRight,
  Award,
  Bot,
  Boxes,
  Braces,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  GitBranch,
  Globe,
  Image,
  Mail,
  Server,
} from 'lucide-react'
import projetos from './data/projetos.json'
import eventos from './data/eventos.json'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: BriefcaseBusiness,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: GitBranch,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: Image,
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
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  show: (idx) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: idx * 0.06 },
  }),
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid bg-[length:42px_42px] opacity-25" />
      <div className="pointer-events-none absolute -left-36 top-16 h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 top-80 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pt-16">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionReveal}
          className="glass-card rounded-3xl border border-white/10 p-6 md:p-12"
        >
          <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
            <motion.img
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src="/avatar/avatar.jpg"
              alt="Avatar de Kaua Almeida"
              className="mx-auto h-40 w-40 rounded-2xl border border-cyan-300/30 object-cover shadow-glass md:h-52 md:w-52"
            />

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                Portfolio + Link da Bio
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                Kaua Almeida
              </h1>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/90 md:text-base">
                Desenvolvedor | Oracle APEX | Python | n8n | AWS Builder
              </p>
              <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
                Apaixonado por tecnologia, automacoes e criacao de solucoes que
                resolvem problemas reais.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        item.href.startsWith('http')
                          ? 'noreferrer noopener'
                          : undefined
                      }
                      className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-300/70 hover:bg-cyan-400/15"
                    >
                      <Icon size={16} className="text-cyan-300" />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>

              <a
                href="#projetos"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:translate-y-[-2px] hover:bg-cyan-300"
              >
                Ver meus projetos
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionReveal}
          className="pt-16 md:pt-24"
          id="sobre"
        >
          <SectionHeader
            eyebrow="Sobre Mim"
            title="Tecnologia, comunidade e solucoes praticas"
            description="Uma jornada construida em aprendizado continuo, curiosidade tecnica e vontade de transformar ideias em produtos funcionais."
          />

          <div className="glass-card rounded-3xl border border-white/10 p-6 md:p-10">
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              Sou Kaua Almeida, desenvolvedor apaixonado por tecnologia,
              automacoes e inovacao. Sou de Fortaleza - CE e me formei em 2025
              no ensino medio profissionalizante com formacao tecnica em Redes de
              Computadores. Atualmente curso Ciencia da Computacao na Unifanor
              (Campus Dunas), com previsao de conclusao em 2030.
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
              Minha trajetoria sempre foi muito voltada para aprender na pratica,
              explorar novas tecnologias e construir solucoes reais. Tenho
              experiencia com Oracle APEX, PL/SQL, Python, automacoes com n8n,
              desenvolvimento de aplicacoes web e integracoes entre sistemas.
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
              Tenho grande interesse em inteligencia artificial, automacoes,
              desenvolvimento backend, cloud computing, networking e comunidades
              tech. Atualmente faco parte do programa AWS Builder Student Leader,
              participando de eventos, iniciativas e atividades voltadas a
              comunidade de tecnologia e cloud. Gosto de participar de eventos,
              fazer networking e compartilhar aprendizados.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionReveal}
          className="pt-16 md:pt-24"
          id="tecnologias"
        >
          <SectionHeader
            eyebrow="Stack"
            title="Tecnologias que uso no dia a dia"
            description="Uma base tecnica focada em automacao, backend, cloud e desenvolvimento de produtos web."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((tech, idx) => {
              const Icon = tech.icon
              return (
                <motion.article
                  key={tech.name}
                  custom={idx}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardReveal}
                  className="group glass-card rounded-2xl border border-white/10 p-4 transition duration-300 hover:border-cyan-300/50"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <p className="font-medium text-slate-100">{tech.name}</p>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="projetos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          className="pt-16 md:pt-24"
        >
          <SectionHeader
            eyebrow="Projetos"
            title="Construindo solucoes com foco em resultado"
            description="Projetos com automacao, dados e produtos web para casos reais, com stack moderna e integracoes inteligentes."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {projetos.map((projeto, idx) => (
              <motion.article
                key={projeto.titulo}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardReveal}
                className={`glass-card overflow-hidden rounded-3xl border p-4 transition duration-300 hover:translate-y-[-4px] md:p-5 ${
                  projeto.destaque
                    ? 'border-cyan-300/50 bg-cyan-400/10'
                    : 'border-white/10'
                }`}
              >
                <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="h-full w-full object-cover"
                  />
                  {projeto.destaque && (
                    <span className="absolute left-3 top-3 rounded-full border border-cyan-200/40 bg-cyan-100/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
                      Projeto destaque
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-semibold text-white">
                  {projeto.titulo}
                </h3>
                <p className="mt-3 line-clamp-3 text-slate-300">
                  {projeto.descricao}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={projeto.linkProjeto}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
                  >
                    <Globe size={16} />
                    Ver projeto
                  </a>
                  {projeto.linkGithub && (
                    <a
                      href={projeto.linkGithub}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300/60"
                    >
                      <GitBranch size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="eventos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          className="pt-16 md:pt-24"
        >
          <SectionHeader
            eyebrow="Eventos"
            title="Experiencias em comunidade e ecossistema tech"
            description="Participacao ativa em eventos de tecnologia, cloud e networking para evoluir tecnicamente e contribuir com a comunidade."
          />

          <div className="space-y-5">
            {eventos.map((evento, idx) => (
              <motion.article
                key={`${evento.titulo}-${evento.data}`}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardReveal}
                className="glass-card overflow-hidden rounded-3xl border border-white/10 p-4 md:p-5"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-stretch">
                  <div className="w-full shrink-0 md:w-[40%]">
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                      <img
                        src={evento.imagem}
                        alt={evento.titulo}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                          {evento.categoria}
                        </span>
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                          {evento.data}
                        </span>
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                          {evento.local}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-semibold text-white">
                        {evento.titulo}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-slate-300">
                        {evento.descricao}
                      </p>
                    </div>

                    {evento.link && (
                      <a
                        href={evento.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:border-cyan-300/60"
                      >
                        Link externo
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
