import { createRouter, createWebHistory } from 'vue-router'
import data from '@md-data'
import archive from '../components/archive.vue'
import post from '../components/post.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: archive,
      props: {
        data
      }
    },
    {
      path: '/posts/:post',
      component: post,
      props: (route) => {
        let title = route.params.post
        let pData = data.find((item: any) => {
          return item.filename == title
        })
        return { postData: pData }
      }
    }
  ]
})

export default router
