import { useState, useCallback } from 'react'
import { Play, Menu, X } from 'lucide-react'

const GP_LOGO = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="none">
    <path d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z" fill="white" />
  </svg>
)

const NAV_LINKS = ['SOBRE', 'PROCESSO', 'PROJETOS', 'DASHBOARDS', 'TECH', 'CONTATO']

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="flex items-center justify-between px-6 py-6">
        {GP_LOGO}
        <button onClick={onClose} className="p-2 hover:opacity-70 transition-opacity">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link}
            href="#"
            onClick={onClose}
            className="text-2xl tracking-widest text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-70"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(1rem)',
              transitionDelay: isOpen ? `${100 + i * 60}ms` : '0ms',
            }}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = useCallback(() => setMenuOpen(true), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
        autoPlay muted loop playsInline
        className="absolute inset-0 h-full w-full min-h-full object-cover lg:scale-[1.2]"
      />

      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex-shrink-0">{GP_LOGO}</div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm tracking-wide text-white/90 hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            onClick={openMenu}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
          >
            <Menu size={24} />
          </button>
        </nav>
        <MobileMenu isOpen={menuOpen} onClose={closeMenu} />

        {/* FOUR-COLUMN META GRID */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 grid-flow-row">

          {/* COL 1 */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-lg md:text-xl tracking-wide leading-tight font-normal">
              LUCAS
              <br />
              <span className="font-pixel text-2xl md:text-3xl">ANTIGNANI</span>
            </h2>
            <span className="text-[10px] text-white/50 mt-3 inline-block">*</span>
            <p className="font-pixel mt-1 text-xs text-white/60 leading-relaxed tracking-wide">
              Combinando minha base em publicidade com visão técnica.
              <br />
              Utilizo automação, infraestrutura de dados
              <br />
              e estratégias de performance para escalar
              <br />
              resultados reais.
            </p>
          </div>

          {/* COL 2 */}
          <div className="col-span-2 lg:col-span-1 text-right lg:text-left">
            <h2 className="text-lg md:text-xl tracking-wide leading-tight font-normal">
              MARKETING DIGITAL
              <br />
              <span className="font-pixel text-2xl md:text-3xl tracking-wide">&amp; DADOS</span>
            </h2>
          </div>

          {/* COL 3 */}
          <div className="col-span-2 lg:col-span-1 lg:col-start-3 text-right lg:text-left">
            <p className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">What I Do</p>
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
              Desenvolvo arquiteturas de marketing focadas em conversão, suportadas por análises de dados precisas e CRM.
            </p>
          </div>

          {/* COL 4 */}
          <div className="col-span-2 lg:col-span-1 text-right lg:text-left">
            <p className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">Services</p>
            <ul className="text-sm text-white/90 leading-relaxed space-y-1">
              <li>SEO &amp; CRO</li>
              <li>Análise de Dados &amp; Dashboards</li>
              <li>Gestão de Tráfego</li>
              <li>Engenharia e Modelagem de Dados</li>
              <li>CRM Analytics &amp; Automação</li>
              <li>Desenvolvimento Web &amp; Deploy</li>
            </ul>
          </div>

        </div>

        {/* FLEX SPACER */}
        <div className="flex-1" />

        {/* BOTTOM SECTION */}
        <div className="pb-4">

          {/* ROW A */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end">

            {/* LEFT — Hero headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] tracking-wide uppercase font-normal"
              style={{ lineHeight: 0.78 }}
            >
              CONECTO ESTRATÉGIA, PERFORMANCE
              <br />
              E DADOS PARA ALAVANCAR
              <br />
              NEGÓCIOS
            </h1>

            {/* RIGHT */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-end">

              {/* VER PROJETOS button */}
              <button className="self-start flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                <Play size={14} fill="white" />
                <span className="text-sm tracking-wider">VER PROJETOS</span>
              </button>

              {/* Tools badges */}
              <div className="self-start lg:self-end flex flex-wrap items-stretch gap-2 sm:gap-3">
                <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm tracking-tight">Power BI</span>
                </div>
                <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm tracking-tight">SQL Server</span>
                </div>
                <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm tracking-tight">Google Ads</span>
                </div>
                <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm tracking-tight">Python</span>
                </div>
              </div>

            </div>

          </div>

          {/* ROW B — footer strip */}
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4">
            <p className="text-xs text-white/60">
              Aberto a novos desafios e projetos.{' '}
              <a href="#" className="text-red-500 hover:text-red-400 transition-colors">Agende um bate-papo</a>
            </p>
            <p className="text-xs text-white/60 sm:text-right">
              Campanhas de Performance &bull; Dashboards Estratégicos &bull; Pipelines de Dados
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App