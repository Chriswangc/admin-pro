export default {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/layout/index.vue'),
    meta: {
        role: ['common', 'admin']
    },
    children: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
            meta: {
                isShow: true,
                title: '项目介绍',
                role: ['common', 'admin']
            }
        },
        {
            path: '/user',
            name: 'UserPage',
            component: import(/* webpackChunkName: "user" */ '@/views/user/index.vue'),
            meta: {
                title: '用户列表',
                isShow: true
            }
        },
        {
            path: '/role',
            name: 'RolePage',
            component: import(/* webpackChunkName: "role" */ '@/views/role/index.vue'),
            meta: {
                title: '角色列表',
                isShow: true
            }
        },
        {
            path: '/auth',
            name: 'AuthPage',
            component: import(/* webpackChunkName: "auth" */ '@/views/auth/index.vue'),
            meta: {
                title: '权限列表',
                isShow: true
            }
        }
    ]
};
