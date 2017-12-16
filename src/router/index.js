import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import logo from '@/components/logo/logo'
import iWantYou from '@/components/iwantyou/iWantYou'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/msgContent',
      name: 'msgContent',
      component: (resolve) => {require(['@/components/msgContent/msgContent'],resolve)}
    },
    {
      path: '/freeWorkMsg',
      name: 'freeWorkMsg',
      component: (resolve) => require(['@/components/msgContent/freeWorkMsg'],resolve)
    },
    {
      path: '/logo',
      name: 'logo',
      component: logo
    },
    {
      path: '/desc',
      name: 'desc',
      component: (resolve) => require(['@/components/desc/desc'],resolve)
    },
    {
      path: '/iwantyou',
      name: 'iWantYou',
      component: iWantYou
    }


    ]
})
