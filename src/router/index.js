import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import iView from 'iview'
import 'iView/dist/styles/iview.css'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import HelloWorld from '@/components/HelloWorld'
import Administrator from '@/components/Administrator'
import Reader from '@/components/Reader'
import SuperAdministrator from '@/components/SuperAdministrator'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(iView)
// Vue.use(VueQuillEditor,{default global options})
Vue.use(VueQuillEditor)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/administrator',
      component: Administrator
    },
    {
      path: '/reader',
      component: Reader
    },
    {
      path: '/superAdministrator',
      component: SuperAdministrator
    }
  ]
})
