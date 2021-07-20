import Vue from 'vue'
import App from './App.vue'
import run from '@jamesives/github-pages-deploy-action'

run({
  token: process.env['ACCESS_TOKEN'],
  branch: 'gh-pages',
  folder: 'dist',
  repositoryName: 'JamesIves/github-pages-deploy-action',
  silent: true,
  workspace: 'src/project/location'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
