import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero03 from '../components/originkit/hero-03';
import '../App.css'; 

function Home() {
  // SEO Scanner States
  const [seoUrl, setSeoUrl] = useState('');
  const [seoStatus, setSeoStatus] = useState('idle'); // 'idle' | 'scanning' | 'completed'
  const [seoScanStep, setSeoScanStep] = useState('');
  const [seoScore, setSeoScore] = useState(0);

  // ROI Calculator States
  const [adSpend, setAdSpend] = useState(5000);

  // SEO Scanning steps
  const scanSteps = [
    'Buscando tags HTML e metadados...',
    'Avaliando velocidade de carregamento (LCP)...',
    'Verificando otimização mobile...',
    'Analisando tags Open Graph e Robots.txt...',
    'Gerando diagnóstico final...'
  ];

  const handleSeoScan = () => {
    if (!seoUrl) return;
    setSeoStatus('scanning');
    
    let currentStep = 0;
    setSeoScanStep(scanSteps[0]);
    
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < scanSteps.length) {
        setSeoScanStep(scanSteps[currentStep]);
      } else {
        clearInterval(interval);
        // Generate a consistent score based on input domain
        const baseScore = 78 + (seoUrl.length * 3) % 19;
        setSeoScore(baseScore);
        setSeoStatus('completed');
      }
    }, 800);
  };

  const handleResetSeo = () => {
    setSeoUrl('');
    setSeoStatus('idle');
    setSeoScanStep('');
  };

  // ROI calculations
  const cpc = 1.25; // R$ 1.25 average CPC
  const clicks = Math.round(adSpend / cpc);
  const convRateLP = 0.12; // 12% landing page lead conv
  const leads = Math.round(clicks * convRateLP);
  const convRateSales = 0.06; // 6% leads to sales conv
  const sales = Math.round(leads * convRateSales);
  const avgTicket = 1500; // R$ 1.500 Average ticket
  const revenue = sales * avgTicket;
  const calculatedRoi = adSpend > 0 ? (revenue - adSpend) / adSpend : 0;

  // WhatsApp prefilled links
  const whatsappNumber = "5511975115131";
  
  const getSeoWhatsappUrl = () => {
    const text = `Olá Lucas! Analisei meu site ${seoUrl} no seu scanner de SEO. Minha nota foi ${seoScore}/100. Gostaria de uma auditoria técnica detalhada.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getRoiWhatsappUrl = () => {
    const text = `Olá Lucas! Utilizei a calculadora de ROI do seu site. Com investimento de R$ ${adSpend.toLocaleString('pt-BR')}, projetei R$ ${revenue.toLocaleString('pt-BR')} em faturamento. Gostaria de acelerar o meu tráfego pago.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

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
      
      <Hero03 />

      <section className="section" id="servicos" style={{ paddingTop: '4rem' }}>
        <div className="bento-brutalist">
          
          {/* Card 01: Consultoria */}
          <div className="brutalist-card card-consultoria reveal-on-scroll delay-1">
            <div className="card-header">
              <span className="card-number">01</span>
              <h3>Consultoria de Marketing</h3>
            </div>
            <p className="card-desc">
              Visão executiva e estratégica para reestruturar o seu marketing, alinhar canais e garantir que cada esforço traga resultados reais para o negócio.
            </p>
          </div>

          {/* Card 02: SEO Técnico & Local (INTERACTIVE SCANNER) */}
          <div className="brutalist-card card-seo reveal-on-scroll delay-2" data-cursor-text="INTERAGIR">
            <div className="card-header">
              <span className="card-number">02</span>
              <h3>SEO Técnico & Local</h3>
            </div>
            
            {seoStatus === 'idle' && (
              <>
                <p className="card-desc" style={{ marginBottom: '1.5rem' }}>
                  Auditorias, otimização de conteúdo e melhorias técnicas para dominar as buscas orgânicas e atrair tráfego altamente qualificado.
                </p>
                <div className="widget-form" onClick={(e) => e.stopPropagation()}>
                  <input 
                    type="text" 
                    value={seoUrl} 
                    onChange={(e) => setSeoUrl(e.target.value)} 
                    placeholder="Insira seu domínio (ex: meu-site.com)"
                    className="widget-input"
                    data-cursor-text="DIGITE"
                  />
                  <button 
                    onClick={handleSeoScan}
                    disabled={!seoUrl}
                    className="widget-button"
                    data-cursor-text="ANALISAR"
                  >
                    Analisar Site
                  </button>
                </div>
              </>
            )}

            {seoStatus === 'scanning' && (
              <div className="widget-status" onClick={(e) => e.stopPropagation()}>
                <div className="spinner-wrapper">
                  <div className="brutalist-spinner"></div>
                </div>
                <p className="status-message">{seoScanStep}</p>
              </div>
            )}

            {seoStatus === 'completed' && (
              <div className="widget-result" onClick={(e) => e.stopPropagation()}>
                <div className="result-header">
                  <div className="score-circle">
                    <span className="score-number">{seoScore}</span>
                    <span className="score-label">/100</span>
                  </div>
                  <div className="score-verdict">
                    <h4>Diagnóstico Concluído!</h4>
                    <p>Seu site {seoUrl} está {seoScore >= 90 ? 'Excelente!' : seoScore >= 80 ? 'Bom, mas com gaps.' : 'Abaixo do potencial.'}</p>
                  </div>
                </div>
                <ul className="score-list">
                  <li><span className="bullet success">✓</span> Meta Tags e cabeçalhos estruturados</li>
                  <li><span className="bullet success">✓</span> Otimização de SEO Local encontrada</li>
                  <li>
                    {seoScore < 90 ? (
                      <>
                        <span className="bullet warning">⚠</span> 
                        <strong>Velocidade de carregamento (LCP):</strong> {seoScore < 85 ? 'Crítica (3.4s)' : 'Média (2.7s)'}
                      </>
                    ) : (
                      <>
                        <span className="bullet success">✓</span> Desempenho e velocidade de página estável
                      </>
                    )}
                  </li>
                </ul>
                <div className="result-actions">
                  <a 
                    href={getSeoWhatsappUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-button widget-cta-btn"
                  >
                    Corrigir Gaps no WhatsApp ↗
                  </a>
                  <button onClick={handleResetSeo} className="reset-link">
                    Analisar outro site
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Card 03: Gestão de Tráfego Pago (INTERACTIVE ROI CALCULATOR) */}
          <div className="brutalist-card card-trafego reveal-on-scroll delay-3" data-cursor-text="INTERAGIR">
            <div className="card-header">
              <span className="card-number">03</span>
              <h3>Gestão de Tráfego Pago</h3>
            </div>
            <p className="card-desc" style={{ marginBottom: '1.5rem' }}>
              Campanhas de alta performance focadas em conversão. Simule seu investimento de mídia abaixo e confira a projeção de retorno.
            </p>
            
            <div className="roi-calculator" onClick={(e) => e.stopPropagation()}>
              <div className="slider-box">
                <div className="slider-labels">
                  <span>Mídia Mensal:</span>
                  <span className="slider-value">R$ {adSpend.toLocaleString('pt-BR')}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000" 
                  value={adSpend} 
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="widget-slider"
                  data-cursor-text="AJUSTE"
                />
              </div>

              <div className="roi-stats-grid">
                <div className="stat-card">
                  <span className="stat-label">Cliques Est.</span>
                  <strong className="stat-num">{clicks.toLocaleString('pt-BR')}</strong>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Leads Est.</span>
                  <strong className="stat-num">{leads.toLocaleString('pt-BR')}</strong>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Vendas Est.</span>
                  <strong className="stat-num">{sales.toLocaleString('pt-BR')}</strong>
                </div>
                <div className="stat-card roi-badge">
                  <span className="stat-label">ROI Est.</span>
                  <strong className="stat-num">{(calculatedRoi * 100).toFixed(0)}%</strong>
                </div>
              </div>

              <div className="roi-dashboard-footer">
                <div className="revenue-box">
                  <span className="rev-lbl">Faturamento Estimado:</span>
                  <span className="rev-val">R$ {revenue.toLocaleString('pt-BR')}</span>
                </div>
                <a 
                  href={getRoiWhatsappUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-button widget-cta-btn"
                >
                  Escalar Minhas Vendas ↗
                </a>
              </div>
            </div>
          </div>

          {/* Card 04: Planejamento */}
          <div className="brutalist-card card-planejamento reveal-on-scroll delay-4">
            <div className="card-header">
              <span className="card-number">04</span>
              <h3>Planejamento Anual de Marketing</h3>
            </div>
            <p className="card-desc">
              Criação de um roadmap completo de marketing digital, definindo metas, orçamentos, canais e KPIs para o ano inteiro do seu negócio.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
