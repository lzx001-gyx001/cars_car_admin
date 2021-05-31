const path = require('path')

module.exports = {
    //使用svg
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .use('svg-sprite-loader')
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]",
                include: ["./src/icons"]
            })
    },
    configureWebpack: (config) => {
        config.resolve = {//配置解析别名
            extensions: ['.js', '.json', '.vue'],
            alias: {
                'vue': 'vue/dist/vue.js',
                '@': path.resolve(__dirname, './src'),
                '@s': path.resolve(__dirname, './static'),
            }
        }

    },
    devServer: {
        proxy: {
            "/api": {
                target: "https://mallapi.duyiedu.com", //http://localhost:5008  "  `http://www.web-jshtml.cn/productapi`
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },
    //css
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/styles/config.scss"`
            },
            sass: {
                prependData: `@import "@/styles/config.scss"`
            },
        }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
    },
}