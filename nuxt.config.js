module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'babke',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Le site de Babké - Kebab gourmet' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // Customize postcss-cssnext default options
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    }
  },
  css: [
    { src: '~assets/main.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/sitemap'
  ]
}
