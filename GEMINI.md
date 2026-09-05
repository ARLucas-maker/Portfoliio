# Contexto do Projeto: Portfolio Lucas Antignani (arlucas.com.br)

Este arquivo serve como **guia contextual permanente** para o Antigravity IDE, otimizando a compreensão do projeto sem a necessidade de varredura completa dos arquivos.

---

## 1. Dados Reais & Fatos do Titular (Lucas Antignani Rizzieri)
> ⚠️ **REGRA CRÍTICA DE CONTEÚDO:** Nunca alucinar ou alterar as informações abaixo por dados genéricos de templates (ex: nunca usar "Engenharia de Software" ou "mais de 10 anos de experiência").

- **Nome Completo:** Lucas Antignani Rizzieri
- **Localização:** Jundiaí / São Paulo, Brasil
- **Contatos Oficiais:**
  - WhatsApp: `+55 11 97511-5131` (ou `5511975115131`)
  - E-mail: `lucas.antignani99@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/lucasantignanirizzieri/`
- **Formação Acadêmica:**
  - **FIAP** (2021 — 2022): Bacharelado / CST em *Marketing Digital & Data Science*.
  - **Desempenho:** GPA 8.88/10.
  - **Certificações FIAP:** Gold em Estratégia de Marketing e Inovação em Negócios; Silver em UX e Decisões Orientadas a Dados.
- **Histórico Profissional Real:**
  - **Avivatec** (09/2025 — 06/2026): Analista de CRM & BI — Implantação e manutenção do ecossistema RD Station (CRM + Marketing), réguas de relacionamento para prospecção/nutrição, estrutura de Data Warehouse e dashboards em Power BI.
  - **Chili Digital** (12/2024 — 09/2025): Analista de SEO & CRO — Estratégias de SEO Internacional na América Latina, testes A/B, análise de comportamento de usuário e CRO.
  - **Gear SEO** (08/2022 — 09/2024): Analista de SEO — Estratégias de SEO Local e performance orgânica para PMEs/SMBs, geração de leads e automação de relatórios.
  - **AIESEC** (2024): Membro Voluntário no Time de Aquisição B2C — Recorde histórico de leads da unidade e reconhecimento nacional como equipe com maior volume de conversões do Brasil.
  - **Zygon AdTech & Data Solutions**: AdOps e Assistente de Marketing.
  - **NanoXD Extended Performance**: Growth Hacker.
- **Principais Competências Técnicas:**
  - SEO Técnico, SEO Local & Internacional, Core Web Vitals, Schema.org
  - CRO (Conversion Rate Optimization), Testes A/B, Redução de Fricção de Funil
  - CRM & Automação de Marketing (RD Station CRM e Marketing)
  - Data Analytics, Data Science & BI (Power BI, Data Warehouse, BigQuery, Google Analytics 4, Search Console, Python básico para automação)

---

## 2. Stack Tecnológica & Arquitetura
- **Framework:** React 19 + Vite 8
- **Roteamento:** `react-router-dom` (SPA com `<ScrollToTop />` e âncoras suaves)
- **Estilização:** Tailwind CSS 4 + Neo-Brutalismo Customizado (`src/index.css` e `src/App.css`)
- **SEO & Metatags:** `react-helmet-async`
- **Shader WebGL:** Componente nativo em Canvas/WebGL (`src/components/ShaderBackground.jsx`)

### Regras de Estilização & Limpeza de Código
- **Sem CSS Legado Conflitante:** Nunca reinserir regras CSS globais legadas em `src/App.css` ou `src/index.css` que sobrescrevam utilitários do Tailwind (ex: seletores genéricos de headings, `.section`, `.brutalist-card` legados).
- **Design System Puro:** Toda a estilização deve utilizar classes utilitárias do Tailwind 4 combinadas com as variáveis do `@theme` definidas em `src/index.css`.
- **Performance de Cursor & DOM:** Não utilizar cursores customizados em JavaScript (`CustomCursor.jsx`) que interfiram na usabilidade nativa do navegador ou em dispositivos móveis.


---

## 3. Estrutura de Rotas e Páginas
- `/` -> `src/pages/Home.jsx`:
  - Hero com Shader WebGL dinâmico (`ShaderBackground.jsx`) e título de alto impacto.
  - Grid de Serviços 01-04 (Consultoria de Marketing & Dados, SEO Técnico & Local com Scanner Interativo, Tráfego Pago & CRO com Calculadora de ROI, Planejamento & CRM).
  - Seção de Autoridade & Performance baseada em dados reais.
- `/sobre` -> `src/pages/About.jsx`:
  - Hero com foto de perfil em moldura brutalista (`profile.jfif`).
  - Trajetória Profissional em 3 cards elevados (Formação Acadêmica FIAP, Experiência de Mercado, Skills & Voluntariado).
  - Seção de Diferenciais (*Por que escolher a Lucas A. R.?*).
  - Conteúdo em Destaque (Vídeos do Instagram de SEO Local incorporados).
- `/blog` -> `src/pages/Blog.jsx`:
  - Listagem de artigos com tags, tempo de leitura e data de publicação.
- `/blog/:slug` -> `src/pages/BlogPost.jsx`:
  - Visualização de artigo individual com suporte a rich text, imagem destacada e CTA direto de WhatsApp.

---

## 4. Integração com WordPress (Blog Headless)
- **Serviço Central:** `src/services/wordpress.js`
- **Variável de Ambiente:** `VITE_WORDPRESS_API_URL` (padrão configurável no `.env` ou servidor).
- **Fallback Automático:** Caso a API esteja temporariamente offline ou não configurada, o serviço utiliza mocks técnicos predefinidos sem quebrar a UI.

---

## 5. Design System Neo-Brutalismo (Google Stitch)
- **Cores Principais:**
  - Primary: `#0055ff` (Azul vibrante)
  - Secondary: `#ffcc00` (Amarelo vibrante)
  - Tertiary: `#ff6b00` (Laranja)
  - WhatsApp / Ação: `#25D366` / `#4ADE80`
  - Superfície: `#ffffff` e `#000000`
- **Regras Visuais:**
  - Bordas pretas sólidas de 4px (`border-4 border-black`).
  - Sombras duras de alto contraste sem desfoque (`shadow-[6px_6px_0px_#000000]`, `shadow-[10px_10px_0px_#0055ff]`, etc.).
  - Efeito flutuante em botões de conversão (`animate-float`).
- **Tipografia:**
  - Títulos e Display: `Hanken Grotesk` (pesos 700, 800, 900)
  - Dados, Código e Labels: `JetBrains Mono` (pesos 500, 700)
  - Ícones: `Material Symbols Outlined`
