import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebase';
import Login from '../views/LoginView.vue';
import Dashboard from '../views/DashboardView.vue';
import Votes from '../views/VotesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/votes',
      name: 'votes',
      component: Votes,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Listen for changes in the authentication state
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (requiresAuth && !user) {
      // If the route requires authentication and the user is not authenticated, redirect to login
      next('/');
    } else if (!requiresAuth && user) {
      // If the route does not require authentication and the user is authenticated, redirect to dashboard
      next('/dashboard');
    } else {
      // Allow access to the route
      next();
    }

    // Stop listening for further changes
    unsubscribe();
  });
});

export default router;
