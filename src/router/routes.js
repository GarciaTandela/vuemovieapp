const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Default.vue'),
    children: [{ path: '', component: () => import('src/pages/Home.vue'), name: 'home' }]
  },
  {
    path: '/details/:id',
    component: () => import('src/layouts/Default.vue'),
    children: [
      { path: '', component: () => import('src/pages/MovieDetail.vue'), name: 'movie-detail' }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/PageNotFound.vue')
  }
];

export default routes;
