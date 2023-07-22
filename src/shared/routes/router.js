import Briefcase from '../../modules/briefcase/routes'

export default [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'briefcase' },
        component: () => import('../home.vue')
    },
    ...Briefcase
]