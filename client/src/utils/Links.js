import { paths } from '../routes/Paths'

export const headerLinks = [
    {
        name: "Home",
        path: paths.LANDING,
    },
    {
        name: "About",
        path: paths.ABOUT,
        dropdown: [
            {
                name: "Campaigns",
                path: `${paths.ABOUT}#campaigns`
            },
            {
                name: "Who We Are",
                path: `${paths.ABOUT}#who-we-are`
            },
            {
                name: "Our History",
                path: `${paths.ABOUT}#history`
            },
            {
                name: "Our Team",
                path: `${paths.ABOUT}#team`
            },
            {
                name: "Testimonials",
                path: `${paths.ABOUT}#testimonials`
            },
            {
                name: "Faq",
                path: `${paths.ABOUT}#faq`
            },
        ]
    },
    {
        name: "Services",
        path: paths.SERVICES,
    },
    {
        name: "Events",
        path: paths.EVENTS,
    },
    {
        name: "Contact",
        path: paths.CONTACT,
    },
    {
        name: "Login",
        path: paths.LOGIN,
    },
    {
        name: "Register",
        path: paths.REGISTER,
    },
    {
        name: "Donate",
        path: paths.DONATE,
    }


]