import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPosts } from '../services/wordpress';
import '../App.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error('Erro ao carregar posts:', err);
        setError('Não foi possível carregar os artigos no momento.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Blog & Insights | SEO, CRO e Growth — Lucas Antignani</title>
        <meta name="description" content="Artigos, tutoriais e análises sobre SEO Técnico, CRO, Data Analytics e Growth Marketing por Lucas Antignani Rizzieri." />
        <meta property="og:title" content="Blog & Insights — Lucas Antignani" />
        <meta property="og:description" content="Estratégias avançadas de marketing digital, otimização de conversão e análise de dados." />
        <meta property="og:type" content="blog" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      {/* HERO DO BLOG */}
      <section className="section hero reveal-on-scroll" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h1 className="hero-title">BLOG &<br />INSIGHTS</h1>
        <p className="hero-subtitle">
          Artigos técnicos, estratégias de tráfego orgânico, experimentos de CRO e engenharia de dados aplicada ao marketing.
        </p>
      </section>

      {/* LISTA DE POSTS */}
      <section className="section blog-section">
        {loading ? (
          <div className="blog-loading-wrapper">
            <div className="brutalist-spinner"></div>
            <p className="status-message">Carregando artigos do WordPress...</p>
          </div>
        ) : error ? (
          <div className="blog-error-box">
            <p>{error}</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post, index) => (
              <article 
                key={post.id} 
                className={`blog-card reveal-on-scroll delay-${(index % 3) + 1}`}
                data-cursor-text="LER ARTIGO"
              >
                <div className="blog-card-image-wrapper">
                  <img src={post.featured_image} alt={post.title.rendered} className="blog-card-img" />
                  <span className="blog-card-category">{post.category_name}</span>
                </div>
                
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">
                      {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="blog-card-reading-time">{post.reading_time}</span>
                  </div>

                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </h2>

                  <div 
                    className="blog-card-excerpt"
                    dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
                  />

                  <div className="blog-card-footer">
                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                      Ler Artigo Completo ↗
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Blog;
