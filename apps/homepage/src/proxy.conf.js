const PROXY_CONFIG = {
  '/': {
    // target: '',
    secure: false,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
};

module.exports = PROXY_CONFIG;
