import HomePage from './components/HomePage'
import PostReview from './components/PostReview'
import LoginPage from './components/Login'

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
  }

]
