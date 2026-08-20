/**
 * WordPress REST API Service
 * Interage com o WordPress Headless (Hostinger ou outro servidor)
 */

const DEFAULT_WP_URL = import.meta.env.VITE_WORDPRESS_API_URL || 'https://demo.wp-api.org/wp-json/wp/v2';

/**
 * Posts de demonstração caso a API do WordPress não esteja configurada ou retorne vazio/erro.
 */
const MOCK_POSTS = [
  {
    id: 101,
    slug: 'guia-seo-tecnico-2026',
    date: '2026-07-28T14:30:00',
    title: { rendered: 'Guia Completo de SEO Técnico & Performance para 2026' },
    excerpt: { 
      rendered: '<p>Descubra os principais pilares de SEO técnico: Core Web Vitals, otimização de crawl budget, estruturação de Schema.org e SEO para mecanismos de busca por IA.</p>' 
    },
    content: {
      rendered: `
        <p>O ecossistema de busca evoluiu drasticamente. Com a ascensão das buscas orientadas por inteligência artificial e atualizações constantes de algoritmos, o SEO técnico deixou de ser apenas a inclusão de meta tags e passou a exigir excelência em arquitetura de dados e velocidade.</p>
        
        <h2>1. Core Web Vitals e Performance Visual</h2>
        <p>Métricas como LCP (Largest Contentful Paint), INP (Interaction to Next Paint) e CLS (Cumulative Layout Shift) são fatores determinantes para o posicionamento orgânico e experiência do usuário.</p>
        
        <blockquote>
          "Sites rápidos não apenas ranqueiam melhor no Google, mas convertem até 3x mais visitantes em leads qualificados."
        </blockquote>

        <h2>2. Dados Estruturados e Schema.org</h2>
        <p>Para ajudar os crawlers a compreenderem a entidade da sua empresa, é indispensável a implementação precisa de marcações Schema.org em formato JSON-LD para produtos, serviços e artigos.</p>

        <h2>3. Otimização de Conteúdo para IA</h2>
        <p>A otimização de conteúdo agora requer autoridade contextual (E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness). Produza conteúdos aprofundados com dados reais e casos de estudo práticos.</p>
      `
    },
    author_name: 'Lucas Antignani Rizzieri',
    category_name: 'SEO & Performance',
    reading_time: '5 min de leitura',
    featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 102,
    slug: 'cro-otimizacao-conversao-landing-pages',
    date: '2026-07-15T10:00:00',
    title: { rendered: 'CRO na Prática: Como Aumentar a Taxa de Conversão da Sua Landing Page' },
    excerpt: { 
      rendered: '<p>Técnicas comprovadas de psicologia de consumo, testes A/B, otimização de copywriting e redução de fricção para maximizar o retorno das suas páginas.</p>' 
    },
    content: {
      rendered: `
        <p>Aumentar o tráfego do seu site é importante, mas garantir que o tráfego existente converta é a forma mais rápida de acelerar o faturamento sem inflacionar o orçamento de anúncios.</p>

        <h2>Redução de Fricção e Proposta de Valor Clara</h2>
        <p>Sua landing page deve responder a três perguntas em menos de 5 segundos:</p>
        <ul>
          <li>O que o seu negócio oferece?</li>
          <li>Qual problema específico ele resolve para o cliente?</li>
          <li>Qual é o próximo passo claro (Call to Action)?</li>
        </ul>

        <h2>Testes A/B Orientados a Hipóteses</h2>
        <p>Evite testes aleatórios. Crie hipóteses baseadas em análise de mapas de calor (Hotjar/Clarity), comportamento de rolagem e testes de usuários reais.</p>
      `
    },
    author_name: 'Lucas Antignani Rizzieri',
    category_name: 'CRO & Growth',
    reading_time: '4 min de leitura',
    featured_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 103,
    slug: 'data-driven-marketing-crm-bi',
    date: '2026-06-30T16:45:00',
    title: { rendered: 'Data-Driven Marketing: Unindo CRM, Data Warehouse e Business Intelligence' },
    excerpt: { 
      rendered: '<p>Entenda como estruturar um pipeline de dados conectando plataformas como RD Station, Google BigQuery e dashboards executivos para decisões baseadas em dados.</p>' 
    },
    content: {
      rendered: `
        <p>A maioria das empresas acumula dados em silos isolados: dados de anúncios no Meta/Google Ads, dados de leads no CRM e faturamento no ERP. Integrar essa visão é o grande diferencial executivo.</p>

        <h2>Construindo o Data Warehouse</h2>
        <p>Centralizar eventos de conversão e jornadas de compra em um repositório como o BigQuery permite cruzar o CAC (Custo de Aquisição) real com o LTV (Lifetime Value) dos clientes.</p>

        <h2>Réguas de Relacionamento Automatizadas</h2>
        <p>Com dados unificados, é possível disparar automações personalizadas no momento exato em que o lead demonstra alto interesse de compra.</p>
      `
    },
    author_name: 'Lucas Antignani Rizzieri',
    category_name: 'Data & Analytics',
    reading_time: '6 min de leitura',
    featured_image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80'
  }
];

/**
 * Retorna o endpoint da API configurado no ambiente
 */
export const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_WORDPRESS_API_URL;
  if (!envUrl) return DEFAULT_WP_URL;
  return envUrl.replace(/\/$/, '');
};

/**
 * Busca todos os posts da API do WordPress
 */
export async function getPosts(params = {}) {
  const baseUrl = getApiUrl();
  
  try {
    const queryParams = new URLSearchParams({
      _embed: 'true',
      per_page: params.per_page || 10,
      page: params.page || 1,
      ...params
    });

    const response = await fetch(`${baseUrl}/posts?${queryParams.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Erro WP REST API: ${response.status} ${response.statusText}`);
    }

    const rawPosts = await response.json();

    if (!Array.isArray(rawPosts) || rawPosts.length === 0) {
      console.warn('WP REST API retornou 0 posts. Exibindo posts mock de demonstração.');
      return MOCK_POSTS;
    }

    return rawPosts.map(post => ({
      id: post.id,
      slug: post.slug,
      date: post.date,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author_name: post._embedded?.author?.[0]?.name || 'Lucas Antignani',
      category_name: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Marketing Digital',
      featured_image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      reading_time: `${Math.ceil((post.content?.rendered?.replace(/<[^>]+>/g, '').split(' ').length || 300) / 200)} min de leitura`
    }));

  } catch (error) {
    console.warn('Não foi possível conectar à API do WordPress. Utilizando fallback local:', error.message);
    return MOCK_POSTS;
  }
}

/**
 * Busca um único post pelo slug
 */
export async function getPostBySlug(slug) {
  const baseUrl = getApiUrl();

  try {
    const response = await fetch(`${baseUrl}/posts?slug=${encodeURIComponent(slug)}&_embed=true`);
    
    if (response.ok) {
      const posts = await response.json();
      if (Array.isArray(posts) && posts.length > 0) {
        const post = posts[0];
        return {
          id: post.id,
          slug: post.slug,
          date: post.date,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          author_name: post._embedded?.author?.[0]?.name || 'Lucas Antignani Rizzieri',
          category_name: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Marketing Digital',
          featured_image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          reading_time: `${Math.ceil((post.content?.rendered?.replace(/<[^>]+>/g, '').split(' ').length || 300) / 200)} min de leitura`
        };
      }
    }
  } catch (error) {
    console.warn('Erro ao carregar post por slug da API. Verificando fallback:', error.message);
  }

  const mockMatch = MOCK_POSTS.find(p => p.slug === slug);
  return mockMatch || MOCK_POSTS[0];
}
