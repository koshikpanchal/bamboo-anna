import fs from 'fs';
import path from 'path';

const envUrl = process.env.VITE_SITE_URL || process.env.SITE_URL;
const baseUrl = (envUrl || 'http://localhost:5173')
  .trim()
  .replace(/\/+$/, '');
if (!envUrl) {
  console.warn('VITE_SITE_URL not set. Using http://localhost:5173 for sitemap URLs.');
}

const pages = [
  '/',
  '/about-us',
  '/collections',
  '/catalogue',
  '/impact',
  '/custom',
  '/gallery',
  '/contact',
];

const productSlugs = [
  'softBristleToothbrush',
  'bambooToothbrush',
  'tongueCleaner',
  'comb',
  'pocketComb',
  'straw',
  'razor',
  'pencil',
  'pen',
];

const urls = [...pages, ...productSlugs.map((slug) => `/product/${slug}`)];
const lastmod = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`sitemap.xml generated at ${outputPath}`);
