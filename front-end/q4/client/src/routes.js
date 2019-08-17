import NotFound from './views/404.vue'
import BookList from './views/BookList.vue'
import BookDetail from './views/BookDetail.vue'

let routes = [
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*',
    redirect: { path: '/404' }
  },
  {
    path: '/',
    component: BookList,
    name: 'book-list'
  },
  {
    path: '/book/:slug',
    component: BookDetail,
    name: 'book-detail'
  }
];

export default routes;