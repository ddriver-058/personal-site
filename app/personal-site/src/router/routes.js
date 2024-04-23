import { readConfig } from '../utility/readConfig';

const cfg = readConfig();
const children = [];

for(const x of cfg.Routes) {
  children.push(
    { path: x.path, component: () => import(`../pages/${x.import}.vue`) }
  )
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: children
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
