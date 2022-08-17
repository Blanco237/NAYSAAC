import { lazy } from 'react';
import { paths } from './Paths'

export const routes = [
    {
        path: paths.LANDING,
        element: lazy(() => import('../pages/Home/Home')),
        exact: true,
    },
    {
        path: paths.ABOUT,
        // component: () => import(/* webpackChunkName: "about" */ './About'),
    },
    {
        path: paths.SERVICES,
        // component: () => import(/* webpackChunkName: "services" */ './Services'),
        element: lazy(() => import('../pages/Services/Services')),
        exact: true,
    },
    {
        path: paths.EVENTS,
        // component: () => import(/* webpackChunkName: "events" */ './Events'),
        element: lazy(() => import('../pages/Events/Events')),
        exact: true,
    },
    {
        path: paths.CONTACT,
        // component: () => import(/* webpackChunkName: "contact" */ './Contact'),
        exact: true,
    },
    {
        path: paths.LOGIN,
        // component: () => import(/* webpackChunkName: "login" */ './Login'),
        exact: true,
    },
    {
        path: paths.REGISTER,
        // component: () => import(/* webpackChunkName: "register" */ './Register'),
        exact: true,
    },
    {
        path: paths.DONATE,
        // component: () => import(/* webpackChunkName: "donate" */ './Donate'),
        exact: true,
    },
    {
        path: paths.USER_DASHBOARD,
        // component: () => import(/* webpackChunkName: "user-dashboard" */ './UserDashboard'),
        exact: false,
    }
];