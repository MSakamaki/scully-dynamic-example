import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://gamma.stream',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/404'],
  routes: {
    '/products/:productId': {
      changeFreq: 'daily',
      priority: '0.9',
      sitemapFilename: 'sitemap-products.xml',
    },
  },
});

export const config: ScullyConfig = {
  projectRoot: './apps/homepage/src',
  projectName: 'homepage',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
  defaultPostRenderers: ['seoHrefOptimise'],
  extraRoutes: ['/db/p1', '/db/p2'],
};
