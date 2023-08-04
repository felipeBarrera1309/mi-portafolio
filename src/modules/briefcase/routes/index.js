export default [
    {
        path: '/portafolio',
        name: 'briefcase',
        meta: { layout: 'default', title: 'main' },
        component: () => import('../pages/index.vue')
    }
]