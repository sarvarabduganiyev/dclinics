export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/dashboard/all-table',
    name: 'dashboard-all-table',
    component: () => import('@/views/dashboard/analytics/AllTable.vue'),
  },
  {
    path: '/dashboard/add-table',
    name: 'dashboard-add-table',
    component: () => import('@/views/dashboard/analytics/AddTable.vue'),
  },
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
]
