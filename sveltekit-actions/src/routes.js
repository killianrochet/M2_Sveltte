// src/routes.js

import { createRoutes } from '@sveltejs/kit';

const routes = createRoutes([
  {
    name: 'product',
    pattern: '/products/:id',
    component: 'src/routes/products/[id]'
  }
]);

export default routes;