import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../App.css'; // use existing styles

function About() {
  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Lucas Antignani Portfolio — Marketing Digital, SEO &amp; CRO</title>
        <meta name="description" content="Conheça Lucas Antignani Rizzieri — Profissional de Marketing Digital orientado a dados, com sólida experiência em SEO, CRO, CRM Analytics e Business Intelligence. Trajetória profissional, formação e conteúdos em destaque." />
        <meta property="og:title" content="Lucas Antignani Portfolio" />
        <meta property="og:description" content="Profissional de Marketing Digital orientado a dados, integrando estratégias técnicas e de negócios para escalar crescimento sustentável." />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>
      
      {/* HERO SECTION */}
      <section className="section hero reveal-on-scroll">
        <h1 className="hero-title">LUCAS<br/>ANTIGNANI<br/>RIZZIERI</h1>
        <p className="hero-subtitle">
          Profissional de Marketing Digital orientado a dados, com sólida experiência em SEO, CRO e CRM Analytics — integrando estratégias técnicas e de negócios para escalar crescimento sustentável.
        </p>
      </section>

      {/* LINKEDIN SECTION */}
      <section className="section linkedin-section reveal-on-scroll">
        <div className="linkedin-widget">
          
          {/* Cover */}
          <div className="linkedin-cover">
            <span className="linkedin-cover-text">You didn't come up with a big idea<br/><span style={{fontSize: '0.9rem', fontWeight: 400}}>just to share a small one.</span></span>
          </div>

          <div className="linkedin-body">
            {/* Profile Pic */}
            <div className="profile-pic-wrapper">
              <img src="/profile.jfif" alt="Lucas Antignani Rizzieri" />
            </div>

            <div className="profile-info-row">
              {/* Text Info */}
              <div className="profile-text">
                <div className="linkedin-name-row">
                  <h2 className="linkedin-name">Lucas Antignani Rizzieri</h2>
                </div>
                
                <p className="linkedin-headline">
                  CRM &amp; BI Analyst | SEO &amp; CRO | Marketing Analytics &amp; Data Science | Growth &amp; Performance
                </p>
                <p className="linkedin-location">
                  São Paulo, Brasil · <span>Dados de contato</span>
                </p>
                <p className="linkedin-connections">
                  Mais de 500 conexões
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a href="https://www.linkedin.com/in/lucasantignanirizzieri/" target="_blank" rel="noopener noreferrer" className="linkedin-button" data-cursor-text="CONECTAR ↗">
                    Conecte-se comigo
                  </a>
                </div>
              </div>

              {/* Companies */}
              <div className="profile-companies">
                <div className="company-item">
                  <div className="company-logo avivatec-logo">A</div>
                  Avivatec
                </div>
                <div className="company-item">
                  <div className="company-logo" style={{backgroundColor: '#e63946', color: '#fff', fontSize: '7px'}}>CHILI</div>
                  Chili Digital
                </div>
                <div className="company-item">
                  <div className="company-logo" style={{backgroundColor: '#1d3557', color: '#fff', fontSize: '7px'}}>GEAR</div>
                  Gear SEO
                </div>
                <div className="company-item">
                  <div className="company-logo fiap-logo">FIAP</div>
                  FIAP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA PROFISSIONAL */}
      <section className="section">
        <h2 className="section-title">Trajetória Profissional</h2>

        <div className="exp-item reveal-on-scroll">
          <div className="exp-date">Set 2025 — Jun 2026<br/>Avivatec</div>
          <div className="exp-content">
            <h3>Analista de CRM &amp; BI</h3>
            <p>Liderou projeto de construção de ecossistema automatizado de extração de dados para CRM, otimizando o fluxo de informações corporativas. Atuou em orquestração de marketing, gestão estratégica de campanhas e planejamento estrutural de banco de dados.</p>
            <p>Utilizou Power BI para análise de dados, monitoramento de KPIs e criação de dashboards focados em previsão e performance. Colaborou na integração de ferramentas externas e agentes de IA para escalar processos e automatizar workflows de qualificação.</p>
            <div className="exp-tags">
              <span>RD Station</span>
              <span>CRM</span>
              <span>Data Warehouse</span>
              <span>Power BI</span>
              <span>Automação</span>
              <span>IA</span>
            </div>
          </div>
        </div>

        <div className="exp-item reveal-on-scroll">
          <div className="exp-date">Dez 2024 — Set 2025<br/>Chili Digital</div>
          <div className="exp-content">
            <h3>Analista de SEO</h3>
            <p>Desenvolveu estratégias de crescimento orgânico focadas em construção de clusters de conteúdo e linkagem interna estruturada. Implementou melhorias de CRO (Conversion Rate Optimization), otimizando páginas de categoria e reduzindo fricção na jornada do usuário.</p>
            <p>Traduziu métricas de tráfego, intenção de busca e dados do Search Console em inteligência de negócios e receita previsível para clientes. Executou diagnósticos técnicos de SEO, priorizando ações estruturais (Quick Wins) para demonstrar ROI rápido e consistente.</p>
            <div className="exp-tags">
              <span>SEO Técnico</span>
              <span>CRO</span>
              <span>Content Clusters</span>
              <span>Search Console</span>
              <span>Quick Wins</span>
            </div>
          </div>
        </div>

        <div className="exp-item reveal-on-scroll">
          <div className="exp-date">Jul 2022 — Set 2024<br/>Gear SEO</div>
          <div className="exp-content">
            <h3>Analista de SEO II — SMB &amp; Local</h3>
            <p>Liderou estratégias de SEO local e de performance para PMEs (Pequenas e Médias Empresas), com foco direto em alavancagem de aquisição de clientes.</p>
            <p>Melhorou a visibilidade orgânica de clientes da agência, conectando desempenho de ranqueamento a resultados de geração de leads qualificados. Responsável pela gestão da plataforma de SEO, automação de relatórios e garantia de análises eficientes e ágeis para tomada de decisão.</p>
            <div className="exp-tags">
              <span>SEO Local</span>
              <span>Performance SEO</span>
              <span>Lead Generation</span>
              <span>PMEs</span>
              <span>Automação de Relatórios</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRABALHO VOLUNTÁRIO — AIESEC */}
      <section className="section">
        <h2 className="section-title">Voluntariado</h2>

        <div className="exp-item reveal-on-scroll">
          <div className="exp-date">2024<br/>AIESEC</div>
          <div className="exp-content">
            <h3>Aquisição B2C — Voluntário</h3>
            <p>Atuou como voluntário na AIESEC, a maior organização de liderança jovem do mundo, liderando a frente de aquisição B2C da unidade local.</p>
            <p>Alcançou o <strong>recorde histórico de leads e conversões</strong> da unidade através de estratégias de campanhas digitais e SEO — conectando propósito social à expertise em marketing de performance.</p>
            <div className="exp-tags">
              <span>Lead Generation</span>
              <span>Campanhas Digitais</span>
              <span>SEO</span>
              <span>Liderança Jovem</span>
              <span>Impacto Social</span>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAÇÃO ACADÊMICA */}
      <section className="section">
        <h2 className="section-title">Formação Acadêmica</h2>

        <div className="exp-item reveal-on-scroll">
          <div className="exp-date">Jan 2021 — Dez 2022<br/>FIAP</div>
          <div className="exp-content">
            <h3>Bacharelado em Marketing Digital &amp; Data Science</h3>
            <p>Currículo brasileiro padrão com foco em marketing digital orientado a dados. <strong>GPA: 8.88/10</strong></p>
            <ul className="about-cert-list">
              <li>🥇 <strong>Certificação Gold</strong> em Estratégia de Marketing e Inovação em Negócios (2022)</li>
              <li>🥈 <strong>Certificações Silver</strong> em Marketing Digital, UX/Total Experience e Decisões Orientadas a Dados (2021)</li>
            </ul>
            <div className="exp-tags">
              <span>Marketing Digital</span>
              <span>Data Science</span>
              <span>UX</span>
              <span>Business Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETÊNCIAS DIGITAIS & ANALÍTICAS */}
      <section className="section">
        <h2 className="section-title">Competências</h2>

        <div className="about-skills-grid reveal-on-scroll">
          {/* Digital & Analytical */}
          <div className="about-skill-card">
            <h3>🎯 Digital &amp; Analytics</h3>
            <ul>
              <li>Especialista em <strong>Business SEO</strong>, transformando métricas de vaidade em indicadores claros de performance financeira e crescimento de e-commerce</li>
              <li>Modelagem de relatórios e dashboards em <strong>Power BI</strong> para suporte a decisões corporativas orientadas a dados</li>
              <li>Capacidade comprovada de estruturar <strong>arquiteturas de dados CRM</strong> para campanhas segmentadas e personalização em massa</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="about-skill-card">
            <h3>🛠️ Skills Técnicos</h3>
            <ul>
              <li><strong>SEO:</strong> Técnico e Informacional</li>
              <li><strong>CRM:</strong> Arquitetura de dados e automação</li>
              <li><strong>Power BI:</strong> Dashboards e modelagem de dados</li>
              <li><strong>Python:</strong> Programação básica para automação</li>
              <li><strong>Data Science:</strong> Modelagem básica</li>
              <li><strong>Otimização de Funil</strong> e Metodologias Ágeis</li>
              <li><strong>Microsoft Office:</strong> Pacote completo</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="about-skill-card">
            <h3>💡 Soft Skills</h3>
            <ul>
              <li>Proatividade</li>
              <li>Resolução de problemas</li>
              <li>Pensamento analítico</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="about-skill-card">
            <h3>🌐 Idiomas</h3>
            <ul>
              <li><strong>Português:</strong> Nativo</li>
              <li><strong>Inglês:</strong> Proficiente (B2/C1)</li>
              <li><strong>Alemão:</strong> Básico (em aprendizado)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VÍDEOS & CONTEÚDO */}
      <section className="section">
        <h2 className="section-title">Conteúdo em Destaque</h2>
        <p className="hero-subtitle" style={{marginBottom: '0'}}>
          Apresentação como Analista de SEO discutindo estratégias de SEO Local.
        </p>

        <div className="videos-grid reveal-on-scroll">
          <div className="video-container">
            <iframe 
              src="https://www.instagram.com/p/C3p24H3qZhO/embed" 
              width="400" 
              height="480" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency="true"
              title="SEO Local Vídeo 1"
            ></iframe>
          </div>
          <div className="video-container">
            <iframe 
              src="https://www.instagram.com/p/Czem7uZOIyw/embed" 
              width="400" 
              height="480" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency="true"
              title="SEO Local Vídeo 2"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section reveal-on-scroll">
        <h2 className="section-title">Contato</h2>
        <br/>
        <a href="mailto:lucas.antignani99@gmail.com" className="contact-link" data-cursor-text="EMAIL ✉">
          Vamos Trabalhar Juntos ↗
        </a>
      </section>

    </div>
  );
}

export default About;
