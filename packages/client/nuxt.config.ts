import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  /**
   * @see https://go.nuxtjs.dev/config-target
   */
  target: 'static',

  /**
   * @see https://go.nuxtjs.dev/config-components
   */
  components: false,

  telemetry: false,

  ...require('./config/nuxt/build').default,
  ...require('./config/nuxt/css').default,
  ...require('./config/nuxt/env').default,
  ...require('./config/nuxt/head').default,
  ...require('./config/nuxt/hooks').default,
  ...require('./config/nuxt/modules').default,
  ...require('./config/nuxt/plugins').default,
}

export default nuxtConfig
