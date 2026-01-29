/**
 * The News API (thenewsapi.com) service for fetching legal/law-related news.
 * Uses VITE_THE_NEWS_API_TOKEN from environment.
 */

const API_BASE = 'https://api.thenewsapi.com/v1/news/all';

/**
 * Default search: law, legal, court, cases, legislation, government, politics, India.
 * Includes Indian news and legal/government/politics coverage.
 */
const DEFAULT_SEARCH = 'law | legal | court | legislation | amendment | case | lawsuit | regulation | government | politics | judiciary | supreme court | India';

/** Get date N days ago in YYYY-MM-DD for published_after. */
function getPublishedAfterDaysAgo(days = 7) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

/**
 * Build query params for legal/government/politics news.
 * Default: only articles from the last 7 days (this week).
 */
function buildLegalNewsParams(options = {}) {
  const token = import.meta.env.VITE_THE_NEWS_API_TOKEN;
  if (!token) {
    throw new Error('VITE_THE_NEWS_API_TOKEN is not set in environment.');
  }

  const params = new URLSearchParams({
    api_token: token,
    language: 'en',
    limit: String(options.limit ?? 50),
    search: options.search ?? DEFAULT_SEARCH,
  });

  if (options.categories) params.set('categories', options.categories);
  if (options.exclude_categories) params.set('exclude_categories', options.exclude_categories);
  const publishedAfter = options.published_after ?? getPublishedAfterDaysAgo(7);
  params.set('published_after', publishedAfter);
  if (options.page != null) params.set('page', String(options.page));

  return params;
}

/**
 * Fetch legal/law-related news from The News API.
 * @param {Object} options - { limit, search, categories, published_after, page }
 * @returns {Promise<{ data: Array, meta: Object }>}
 */
export async function fetchLegalNews(options = {}) {
  const params = buildLegalNewsParams(options);
  const url = `${API_BASE}?${params.toString()}`;
  const res = await fetch(url);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`News API error ${res.status}: ${text || res.statusText}`);
  }

  const json = await res.json();
  return {
    data: json.data ?? [],
    meta: json.meta ?? { found: 0, returned: 0, limit: 0, page: 0 },
  };
}
