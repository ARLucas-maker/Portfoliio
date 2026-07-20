import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../App.css'; // use existing styles

function About() {
  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Lucas Antignani Portfolio — Marketing Digital, SEO & CRO</title>
        <meta name="description" content="Conheça Lucas Antignani Rizzieri — Profissional de Marketing Digital com experiência em SEO, CRO, análise de dados e growth. Trajetória profissional, formação e conteúdos em destaque." />
        <meta property="og:title" content="Lucas Antignani Portfolio" />
        <meta property="og:description" content="Profissional de Marketing Digital com sólida experiência em SEO e CRO. Foco em performance digital sustentável." />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>
      
      {/* HERO SECTION */}
      <section className="section hero">
        <h1 className="hero-title">LUCAS<br/>ANTIGNANI<br/>RIZZIERI</h1>
        <p className="hero-subtitle">
          Profissional de Marketing Digital com sólida experiência em SEO e CRO. Foco em performance digital sustentável, unindo visão técnica, criativa e analítica.
        </p>
      </section>

      {/* LINKEDIN SECTION */}
      <section className="section linkedin-section">
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
                  Business Analyst | Analista de Dados | Growth, SEO & CRO | Marketing Analytics & Data Science
                </p>
                <p className="linkedin-location">
                  São Paulo, Brasil · <span>Dados de contato</span>
                </p>
                <p className="linkedin-connections">
                  Mais de 500 conexões
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a href="https://www.linkedin.com/in/lucasantignanirizzieri/" target="_blank" rel="noreferrer" className="linkedin-button">
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

        <div className="exp-item">
          <div className="exp-date">2025 — 2026<br/>Avivatec</div>
          <div className="exp-content">
            <h3>Analista de CRM & BI</h3>
            <p>Implementação e manutenção do ecossistema RD Station. Estruturação de Data Warehouse para análise de dados históricos e criação de réguas de relacionamento.</p>
            <div className="exp-tags">
              <span>RD Station</span>
              <span>CRM</span>
              <span>Data Warehouse</span>
            </div>
          </div>
        </div>

        <div className="exp-item">
          <div className="exp-date">2024 — 2025<br/>Chili Digital</div>
          <div className="exp-content">
            <h3>Analista de SEO & CRO</h3>
            <p>SEO Internacional para clientes LATAM. Foco em SEO técnico, conteúdo, auditorias, A/B testing e otimização da jornada do usuário para escalar resultados.</p>
            <div className="exp-tags">
              <span>SEO Técnico</span>
              <span>CRO</span>
              <span>A/B Testing</span>
            </div>
          </div>
        </div>

        <div className="exp-item">
          <div className="exp-date">2024 — 2024<br/>AIESEC</div>
          <div className="exp-content">
            <h3>Aquisição B2C (Voluntário)</h3>
            <p>Alcancei o recorde histórico de leads e conversões na unidade através de estratégias de campanhas digitais e SEO.</p>
            <div className="exp-tags">
              <span>Lead Generation</span>
              <span>Campanhas Digitais</span>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEOS & CONTEÚDO */}
      <section className="section">
        <h2 className="section-title">Conteúdo em Destaque</h2>
        <p className="hero-subtitle" style={{marginBottom: '0'}}>
          Apresentação como Analista de SEO discutindo estratégias de SEO Local.
        </p>

        <div className="videos-grid">
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
      <section className="section contact-section">
        <h2 className="section-title">Contato</h2>
        <br/>
        <a href="mailto:lucas.antignani99@gmail.com" className="contact-link">
          Vamos Trabalhar Juntos ↗
        </a>
      </section>

    </div>
  );
}

export default About;
