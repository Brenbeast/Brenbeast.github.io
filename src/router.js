import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import Earth from './views/Nasa.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Faq from './views/Faq.vue'
Vue.use(Router)
/**
 * @description
 * 
 * @param {string} path
 * @param {string} name
 * @param {string} component
 * @param {string} icon
 * @param {string} meta
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/earth',
      name: 'earth',
      component: Earth
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ]
})
