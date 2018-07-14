import HomePage from './components/HomePage'
import PostReview from './components/PostReview'
import LoginPage from './components/Login'
import Agreement from './components/Agreement'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/post-review',
    component: PostReview
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/agreement',
    component: Agreement
  }

]
