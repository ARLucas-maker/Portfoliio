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
- **Frontend:** HTML5, CSS3, Tailwind CSS 4, JavaScript Puro (Vanilla JS)
- **Roteamento:** Server-side via `.htaccess` (Apache mod_rewrite)
- **Blog:** WordPress headless via Hostinger hosting
- **Hospedagem:** Hostinger (arlucas.com.br), plano com addon domain
- **Deploy:** Hostinger MCP (`hostinger-api-mcp`) via stdio transport
- **CI/CD:** Nenhum — deploy manual via Hostinger MCP

### Detalhes da Hospedagem
- **Hostinger Username:** `u836743426`
- **Domain:** `arlucas.com.br`
- **Order ID:** `1005503980`
- **Root Directory:** `/home/u836743426/domains/arlucas.com.br/public_html`
- **WordPress Blog PT-BR:** `/blog/` (locale: pt_BR)
- **WordPress Blog EN:** `/en/blog/` (locale: en_US)

### Regras de Estilização & Limpeza de Código
- **Sem CSS Legado Conflitante:** Nunca reinserir regras CSS globais legadas em `src/App.css` ou `src/index.css` que sobrescrevam utilitários do Tailwind (ex: seletores genéricos de headings, `.section`, `.brutalist-card` legados).
- **Design System Puro:** Toda a estilização deve utilizar classes utilitárias do Tailwind 4 combinadas com as variáveis do `@theme` definidas em `src/index.css`.
- **Performance de Cursor & DOM:** Não utilizar cursores customizados em JavaScript (`CustomCursor.jsx`) que interfiram na usabilidade nativa do navegador ou em dispositivos móveis.

---

## 3. Estrutura de Rotas e Páginas
- `/` -> `site/index.html` (Homepage PT-BR, SEO, Growth & Marketing Science)
- `/en/` -> `site/en/index.html` (Homepage EN)
- `/about/` -> `site/about/index.html` (Sobre PT-BR)
- `/en/about/` -> `site/en/about/index.html` (Sobre EN)
- `/servicos/` -> `site/services/index.html` (Serviços PT-BR)
- `/en/servicos/` -> `site/en/services/index.html` (Serviços EN)
- `/contact/` -> `site/contact/index.html` (Contato PT-BR)
- `/en/contact/` -> `site/en/contact/index.html` (Contato EN)
- `/blog/` -> WordPress (Blog PT-BR, locale: pt_BR, instalado via Hostinger MCP)
- `/en/blog/` -> WordPress (Blog EN, locale: en_US, instalado via Hostinger MCP)

---

## 4. Integração com WordPress (Blog Headless)
- **Serviço de Hospedagem:** Hostinger MCP (`hostinger-api-mcp`)
- **Ferramenta MCP:** `hosting_installWordPressV1` (instalação WordPress via API)
- **Ferramenta MCP:** `hosting_deployStaticWebsite` (deploy de site estático)
- **Ferramenta MCP:** `hosting_listWebsitesV1` (listar websites)
- **Ferramenta MCP:** `hosting_listWordPressInstallationsV1` (listar instalações WP)
- **Variável de Ambiente:** `HOSTINGER_USERNAME=u836743426`, `HOSTINGER_DOMAIN=arlucas.com.br`
- **Autenticação:** OAuth 2.0 com PKCE (credenciais em `%APPDATA%\hostinger-mcp\credentials.json`)
- **WordPress Root:** Já existe (`id: 30459633`) - sobrescrito por site estático
- **Status:** WordPress PT-BR e EN instalados em `/blog/` e `/en/blog/` (requests aceitos)

---

## 5. Configuração MCP Hostinger
- **Config Global:** `~/.config/opencode/opencode.jsonc`
- **Config Projeto:** `opencode.json` (raiz do projeto)
- **MCP Servers:**
  - `hostinger` -> `hostinger-api-mcp` (todas as operações de hosting)
  - `hostinger-wordpress` -> `hostinger-wordpress-mcp` (operações WordPress específicas)
- **Autenticação:** OAuth via `hostinger-api-mcp --login` (credencial já configurada)
- **Transporte:** stdio (padrão)
- **Ferramentas Disponíveis:** 382 tools via `hosting_*`, `VPS_*`, `domain_*`, `mail_*`, etc.

---

## 6. Design System Neon-Brutalismo (HTML/CSS)
- **Cores Principais:**
  - Background: `#0a0a0b` (ink)
  - Accent: `#ccff00` (neon green)
  - Text: `#ffffff` (white), `#71717a` (zinc-400)
- **Regras Visuais:**
  - Backgrounds semi-transparentes: `bg-white/[0.03]`, `bg-white/5`
  - Bordas sutis: `border border-white/10`
  - Efeitos de hover com acento: `hover:border-accent/50`, `hover:text-accent`
  - Animações: `reveal`, `heroUp`, `marquee`, `scrollPulse`
- **Tipografia:**
  - Display: `Space Grotesk` (pesos 500, 700)
  - Body: `Plus Jakarta Sans` (pesos 400-800)
  - Mono/Labels: `JetBrains Mono` (pesos 400, 700)
