/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        // svg to react component loader
        config.module.rules.push({
            test: /\.svg$/,
            use: {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'preset-default',
                                params: {
                                    overrides: {
                                        removeViewBox: false
                                    },
                                },
                            },
                        ],
                    }
                }
            }
        })

        return config
    }
}

module.exports = nextConfig
