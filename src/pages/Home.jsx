import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../App.css'; 

function Home() {
  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Marketing Digital Estratégico — Consultoria, SEO e Tráfego Pago | Lucas Antignani</title>
        <meta name="description" content="Serviços de marketing digital estratégico: consultoria de marketing, SEO técnico e local, gestão de tráfego pago e planejamento anual. Soluções focadas em dados e performance para escalar o seu negócio." />
        <meta property="og:title" content="Marketing Digital Estratégico — Lucas Antignani" />
        <meta property="og:description" content="Consultoria, SEO técnico, tráfego pago e planejamento estratégico para escalar seu negócio no digital." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>
      <section className="section hero" style={{ paddingBottom: '2rem' }}>
        <h1 className="hero-title">MARKETING<br/>DIGITAL<br/>ESTRATÉGICO</h1>
        <p className="hero-subtitle">
          Soluções focadas em dados e performance para escalar o seu negócio no digital.
        </p>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="bento-brutalist">
          
          <div className="brutalist-card card-consultoria">
            <div className="card-header">
              <span className="card-number">01</span>
              <h3>Consultoria de Marketing</h3>
            </div>
            <p className="card-desc">Visão executiva e estratégica para reestruturar o seu marketing, alinhar canais e garantir que cada esforço traga resultados reais para o negócio.</p>
          </div>

          <div className="brutalist-card card-seo">
            <div className="card-header">
              <span className="card-number">02</span>
              <h3>SEO Técnico & Local</h3>
            </div>
            <p className="card-desc">Auditorias, otimização de conteúdo e melhorias técnicas para dominar as buscas orgânicas e atrair tráfego altamente qualificado.</p>
          </div>

          <div className="brutalist-card card-trafego">
            <div className="card-header">
              <span className="card-number">03</span>
              <h3>Gestão de Tráfego Pago</h3>
            </div>
            <p className="card-desc">Campanhas de alta performance focadas em conversão, otimizando o seu orçamento para gerar leads e vendas consistentes.</p>
          </div>

          <div className="brutalist-card card-planejamento">
            <div className="card-header">
              <span className="card-number">04</span>
              <h3>Planejamento Anual de Marketing</h3>
            </div>
            <p className="card-desc">Criação de um roadmap completo de marketing digital, definindo metas, orçamentos, canais e KPIs para o ano inteiro do seu negócio.</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
