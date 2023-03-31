export default [
  {
    header: 'Jadvallar',
  },
  {
    title: 'Jadval',
    icon: 'FileTextIcon',
    children: [
      {
        title: 'Barcha Jadvallar',
        // route: 'dashboard-ecommerce',
        route: 'dashboard-all-table',
        icon: 'ListIcon',
      },
      {
        title: 'Jadval qo\'shish',
        // route: 'dashboard-analytics',
        route: 'dashboard-add-table',
        icon: 'PlusIcon',
      },
    ],
  },
]
