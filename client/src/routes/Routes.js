import { paths } from './Paths'

export const routes = [
    {
        path: paths.LANDING,
        // component: () => import(/* webpackChunkName: "landing" */ './Landing'),
        exact: true,
    },
    {
        path: paths.ABOUT,
        // component: () => import(/* webpackChunkName: "about" */ './About'),
        exact: true,
    },
    {
        path: paths.SERVICES,
        // component: () => import(/* webpackChunkName: "services" */ './Services'),
        exact: true,
    },
    {
        path: paths.EVENTS,
        // component: () => import(/* webpackChunkName: "events" */ './Events'),
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