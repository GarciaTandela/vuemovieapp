const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Default.vue'),
    children: [{ path: '', component: () => import('src/pages/Home.vue') }]
  },
  {
    path: '/details/:id',
    name: 'movie-detail',
    component: () => import('src/layouts/Default.vue'),
    children: [{ path: '', component: () => import('src/pages/MovieDetail.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/PageNotFound.vue')
  }
];

export default routes;
