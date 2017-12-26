import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import ComponentsCat from '@/ComponentsCat';
import Test from '@/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/componentsCat',
      name: 'ComponentsCat',
      component: ComponentsCat,
      children: [
        {
          path: 'test',
          name: 'Test',
          component: Test,
        },
      ],
    },
  ],
});
