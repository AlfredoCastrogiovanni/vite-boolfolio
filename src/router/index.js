import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: ProjectsView
    },
    {
      path: '/projects/:id',
      name: 'projects.show',
      component: ProjectView
    },
  ]
})

export default router
