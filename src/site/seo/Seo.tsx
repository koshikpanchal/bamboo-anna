import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

type JsonLd = Record<string, unknown>;

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[] | string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noIndex?: boolean;
  canonicalPath?: string;
  jsonLd?: JsonLd | JsonLd[];
};

const SITE_NAME = 'Bamboo Anna';
const DEFAULT_IMAGE = '/LogoColor.png';

const getBaseUrl = () => {
  const envUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();
  if (envUrl) return envUrl.replace(/\/+$/, '');
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return '';
};

const toAbsoluteUrl = (pathOrUrl: string, baseUrl: string) => {
  if (!pathOrUrl) return '';
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (!baseUrl) return pathOrUrl;
  try {
    return new URL(pathOrUrl, baseUrl).toString();
  } catch {
    return pathOrUrl;
  }
};

const normalizeKeywords = (keywords?: string[] | string) => {
  const list = Array.isArray(keywords)
    ? keywords
    : typeof keywords === 'string'
      ? keywords.split(',').map((item) => item.trim())
      : [];

  const unique = Array.from(
    new Set(list.filter(Boolean).map((item) => item.toLowerCase()))
  );

  return unique.join(', ');
};

const Seo = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noIndex = false,
  canonicalPath,
  jsonLd,
}: SeoProps) => {
  const location = useLocation();
  const baseUrl = getBaseUrl();

  const finalTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = toAbsoluteUrl(canonicalPath ?? location.pathname, baseUrl);
  const ogImage = toAbsoluteUrl(image ?? DEFAULT_IMAGE, baseUrl);
  const keywordContent = normalizeKeywords(keywords);

  const jsonLdPayload = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywordContent ? <meta name="keywords" content={keywordContent} /> : null}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdPayload.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </Helmet>
  );
};

export default Seo;
