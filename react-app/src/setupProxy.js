const { createProxyMiddleware } = require('http-proxy-middleware');

const rewriteFn = function (path, req) {
  return path.replace('/api', '');
};


module.exports = (app) => {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_BASE_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/' // remove base path
      }
    })
  );
};
