
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'petani', component: () => import('pages/petani/index.vue') },
      { path: 'petani/add', component: () => import('pages/petani/insert.vue') },
      { path: 'petani/edit/:id', component: () => import('pages/petani/insert.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
