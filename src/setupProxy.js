const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://43.201.249.197',
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware('/*', {
            target: 'https://sports-phinf.pstatic.net',
            changeOrigin: true,
        })
    );
};
