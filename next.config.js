const path = require('path')


module.exports = {
    experimental: {
        scrollRestoration: false,
    },
    webpack5: false,
    webpack: (config, options) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader'
              },
            ],
           type: 'javascript/auto'
          })
        
        return config
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['res.cloudinary.com'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    async headers() {
        return [
          {
            // Apply these headers to all routes in your application.
            source: '/(.*)',
            headers: [
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block'
                },
                {
                    key: 'X-DNS-Prefetch-Control',
                    value: 'on'
                },
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=0; includeSubDomains; preload',
                }

            ]
          },
        ]
    },
  reactStrictMode: true,
}
