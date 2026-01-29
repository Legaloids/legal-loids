import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blog from '../components/Blog';
import GoToTop from '../components/GoToTop';
import { fetchLegalNews } from '../services/newsApi';

gsap.registerPlugin(ScrollTrigger);

const INITIAL_LIMIT = 9;
const LOAD_MORE_LIMIT = 3;

const INDIAN_MATCH = /\b(india|indian)\b/i;

function isIndianArticle(article) {
  const text = [article.title, article.description, article.snippet, article.source].filter(Boolean).join(' ');
  return INDIAN_MATCH.test(text) || article.locale === 'in';
}

function sortIndianFirst(articles) {
  return [...articles].sort((a, b) => {
    const aIndian = isIndianArticle(a);
    const bIndian = isIndianArticle(b);
    if (aIndian && !bIndian) return -1;
    if (!aIndian && bIndian) return 1;
    return 0;
  });
}

const NewsEventsPage = () => {
  const heroRef = useRef(null);
  const newsSectionRef = useRef(null);
  const eventsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [news, setNews] = useState([]);
  const [meta, setMeta] = useState(null);
  const [nextPage, setNextPage] = useState(1 + Math.ceil(INITIAL_LIMIT / LOAD_MORE_LIMIT)); // 4: first "load more" fetches page 4 (items 10–12)
  const [newsLoading, setNewsLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [newsError, setNewsError] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  // Initial load: 9 news
  useEffect(() => {
    let cancelled = false;
    setNewsLoading(true);
    setNewsError(null);
    fetchLegalNews({ limit: INITIAL_LIMIT, page: 1 })
      .then(({ data, meta: resMeta }) => {
        if (!cancelled) {
          setNews(sortIndianFirst(data));
          setMeta(resMeta);
          setNextPage(1 + Math.ceil(INITIAL_LIMIT / LOAD_MORE_LIMIT));
          setNewsError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setNewsError(err.message || 'Failed to load news.');
          setNews([]);
          setMeta(null);
        }
      })
      .finally(() => {
        if (!cancelled) setNewsLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const totalFound = meta?.found ?? 0;
  const hasMore = totalFound > news.length && !loadMoreLoading;

  const loadMoreNews = () => {
    if (loadMoreLoading || !hasMore) return;
    setLoadMoreLoading(true);
    fetchLegalNews({ limit: LOAD_MORE_LIMIT, page: nextPage })
      .then(({ data, meta: resMeta }) => {
        setNews((prev) => sortIndianFirst([...prev, ...data]));
        setMeta(resMeta);
        setNextPage((p) => p + 1);
      })
      .catch(() => {})
      .finally(() => setLoadMoreLoading(false));
  };

  const formatNewsDate = (publishedAt) => {
    if (!publishedAt) return '';
    try {
      return new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4">News & Events</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-4">
            Stay updated with our latest news and upcoming events
          </p>
        </div>
      </section>

      {/* News Section */}
      <section ref={newsSectionRef} className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 px-4">Latest News</h2>
          <p className="text-xs sm:text-sm text-primary-600 font-medium mb-2 px-4">This week&apos;s stories · India, law, government & politics</p>
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12 px-4 max-w-3xl">
            Law, new cases, legislation, amendments, government, politics, and Indian legal developments—curated for legal professionals.
          </p>

          {newsLoading && (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-600">Loading news...</p>
            </div>
          )}

          {newsError && !newsLoading && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center max-w-2xl mx-auto">
              <p className="text-amber-800 font-medium mb-2">Unable to load news</p>
              <p className="text-sm text-amber-700 mb-4">{newsError}</p>
              <p className="text-xs text-gray-600">
                Add <code className="bg-white px-1 rounded">VITE_THE_NEWS_API_TOKEN</code> to your <code className="bg-white px-1 rounded">.env</code> file.
              </p>
            </div>
          )}

          {!newsLoading && !newsError && news.length > 0 && (
            <div className="space-y-8 sm:space-y-10">
              {/* Grid: all loaded news (initial 9 + 3 per "View more") */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                {news.map((item, index) => (
                  <article
                    key={item.uuid || index}
                    ref={(el) => (eventsRef.current[index] = el)}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col h-full"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col h-full"
                    >
                      <div className="relative aspect-[16/10] sm:aspect-video bg-gray-100 overflow-hidden">
                        {item.image_url ? (
                          <img
                            src={item.image_url}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                          </div>
                        )}
                        <div className="absolute top-2 left-2">
                          {item.source && (
                            <span className="inline-block px-2 py-0.5 rounded bg-white/90 text-[10px] sm:text-xs font-semibold text-gray-700">
                              {item.source}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 flex flex-col flex-grow">
                        <p className="text-[10px] sm:text-xs text-gray-500 mb-1.5">{formatNewsDate(item.published_at)}</p>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                          {item.title}
                        </h3>
                        {(item.description || item.snippet) && (
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 flex-grow mb-3">
                            {item.description || item.snippet}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:gap-1.5 transition-all mt-auto">
                          Read more
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                      </div>
                    </a>
                  </article>
                ))}
              </div>

              {/* View more news: append 3 at a time */}
              <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-200">
                {totalFound > 0 && (
                  <p className="text-sm text-gray-500">
                    Showing {news.length} of {totalFound.toLocaleString()} articles
                  </p>
                )}
                {hasMore && (
                  <button
                    type="button"
                    onClick={loadMoreNews}
                    disabled={loadMoreLoading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm sm:text-base hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none transition-colors"
                    aria-label="Load more news"
                  >
                    {loadMoreLoading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Loading…
                      </>
                    ) : (
                      <>
                        View more news
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {!newsLoading && !newsError && news.length === 0 && (
            <p className="text-gray-500 text-center py-8 px-4">No news articles found.</p>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <Blog />

      <GoToTop />
    </>
  );
};

export default NewsEventsPage;

