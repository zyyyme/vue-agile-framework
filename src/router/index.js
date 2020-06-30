import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import Rationale from '@/components/Rationale'
import Roles from '@/components/Roles'
import Stages from '@/components/Stages'
import Practices from '@/components/Practices'
import Artifacts from '@/components/Artifacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/rationale',
      name: 'Rationale',
      component: Rationale
    },
    {
      path: '/roles',
      name: 'Roles',
      component: Roles
    }, 
    {
      path: '/stages',
      name: 'Stages',
      component: Stages
    },
    {
      path: '/practices',
      name: 'Practices',
      component: Practices
    },
    {
      path: '/artifacts',
      name: 'Artifacts',
      component: Artifacts
    }
  ]
})
