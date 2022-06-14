import path from 'path'
export default {
    mode: 'universal',
    server: {
        port: 4000,
        host: '0.0.0.0'
    },
    head: {
        title: 'xblog',
        htmlAttrs: {
            lang: 'en',
        },
        script: [{
                src: "http://pv.sohu.com/cityjson?ie=utf-8",
                type: 'text/javascript',
                asnyc: 'async'
            },
            // {
            //     src: "https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/ribbon.js",
            //     size: "150",
            //     alpha: '0.3',
            //     zIndex: '-2',
            //     type: 'text/javascript',
            //     body: true,
            //     asnyc: 'async',
            // },
            {
                src: 'https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/canvasNext.js',
                color: '255,0,0',
                opacity: '0.7',
                count: '80',
                type: 'text/javascript',
                body: true,
                asnyc: 'async',
            },
            {
                async: 'async',
                type: 'text/javascript',
                src: 'https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/intersection-polyfill.js'
            },
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'Xuwenhao BLOG', name: 'XWH', content: 'Xblog' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },


    css: [{ src: '~assets/scss/index.scss', lang: 'sass' }],


    plugins: [
        { src: '~/plugins/antd.js' },
        { src: '~/plugins/marked.js' },
        { src: '~/plugins/highlight.js' },
    ],

    components: true,


    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/style-resources'
    ],
    styleResources: {

    },
    modules: [],
    router: {
        scrollBehavior: function(to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },
    build: {
        transpile: [/ant-design-vue/],
        // analyze: true,
        optimizeCSS: true,
        devtools: false,
        sourceMap: false,
        terser: {
            parallel: true,
            cache: false,
            sourceMap: false,
            terserOptions: {
                compress: {
                    drop_console: true //生产环境删除所有console
                },
                sourceMap: false
            }
        },
        productionSourceMap: false,
        extend(config) {
            config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './plugins/antd-icon.js') // 引入需要的
            config.resolve.alias['@'] = path.resolve(__dirname, '../plugins')
        },
        html: {
            minify: {
                collapseWhitespace: false,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                removeComments: false,
                removeTagWhitespace: false,
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                name: 'vendors',
                minSize: 20000,
                minChunks: 2,
                maxAsyncRequests: 7,
                cacheGroups: {
                    marked: {
                        name: 'chunk-marked',
                        test: /[\\/]node_modules[\\/]marked[\\/]/,
                        minChunks: 2,
                        chunks: 'all',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    antd: {
                        name: 'chunk-ant-design-vue',
                        test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
                        minChunks: 2,
                        chunks: 'all',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                },
            },
        },
    }
}