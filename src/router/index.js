import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import ComponentsCat from '@/ComponentsCat';
import Test from '@/Test';
import News from '@/Test2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      // meta: { allowBack: false },
    },
    {
      path: '/componentsCat',
      name: 'ComponentsCat',
      component: ComponentsCat,
      meta: { allowBack: false },
      children: [
        {
          path: 'test',
          name: 'Test',
          component: Test,
        },
        {
          path: '/home',
          component: Test,
          children: [
            { path: 'login', component: Test },
            { path: 'reg', component: Test },
          ],
        },
        {
          path: '/news',
          component: News,
          children: [
            {
              path: 'news1',
              component: News,
              children: [
                { path: 'content1', component: News },
                { path: 'content2', component: News },
              ],
            },
            {
              path: 'news2',
              component: News,
              children: [{ path: 'content', component: News }],
            },
          ],
        },
      ],
    },
  ],
});
