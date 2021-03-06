import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#039be5',
        secondary: '#fbc02d'
      },
      dark: {
        primary: '#455a64',
        secondary: '#e91e63'
      }
    }
  }
})
