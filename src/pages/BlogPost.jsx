import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug } from '../services/wordpress';
import '../App.css';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);
        const data = await getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        console.error('Erro ao carregar artigo:', err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadPost();
    }
  }, [slug]);

  const cleanTitle = post?.title?.rendered?.replace(/<[^>]+>/g, '') || 'Artigo';
  const cleanExcerpt = post?.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '';

  return (
    <div className="app-wrapper">
      {post && (
        <Helmet>
          <title>{`${cleanTitle} — Lucas Antignani`}</title>
          <meta name="description" content={cleanExcerpt} />
          <meta property="og:title" content={cleanTitle} />
          <meta property="og:description" content={cleanExcerpt} />
          <meta property="og:image" content={post.featured_image} />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="pt_BR" />
        </Helmet>
      )}

      <div className="single-post-container">
        <Link to="/blog" className="back-link" data-cursor-text="VOLTAR">
          ← Voltar para todos os artigos
        </Link>

        {loading ? (
          <div className="blog-loading-wrapper" style={{ minHeight: '300px' }}>
            <div className="brutalist-spinner"></div>
            <p className="status-message">Carregando conteúdo do artigo...</p>
          </div>
        ) : !post ? (
          <div className="blog-error-box">
            <h2>Artigo não encontrado</h2>
            <p>O conteúdo solicitado pode ter sido removido ou o slug está incorreto.</p>
            <Link to="/blog" className="action-button" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Ver outros artigos
            </Link>
          </div>
        ) : (
          <article className="single-post-article reveal-on-scroll">
            <header className="single-post-header">
              <div className="single-post-tags">
                <span className="post-tag">{post.category_name}</span>
                <span className="post-reading-time">{post.reading_time}</span>
              </div>
              
              <h1 
                className="single-post-title"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
              />

              <div className="single-post-author-row">
                <div className="author-avatar-badge">L</div>
                <div className="author-details">
                  <span className="author-name">{post.author_name}</span>
                  <span className="post-date">
                    {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </header>

            {post.featured_image && (
              <div className="single-post-image-wrapper">
                <img src={post.featured_image} alt={cleanTitle} className="single-post-featured-img" />
              </div>
            )}

            <div 
              className="single-post-body wp-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            <footer className="single-post-footer">
              <div className="share-box">
                <h3>Gostou deste artigo?</h3>
                <p>Compartilhe ou entre em contato para discutirmos soluções estratégicas para o seu negócio.</p>
                <div className="share-actions">
                  <a 
                    href={`https://wa.me/5511975115131?text=${encodeURIComponent(`Olá Lucas! Li seu artigo "${cleanTitle}" no site e gostaria de conversar.`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-button"
                  >
                    Falar no WhatsApp ↗
                  </a>
                  <Link to="/blog" className="secondary-button">
                    Mais Artigos
                  </Link>
                </div>
              </div>
            </footer>
          </article>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
