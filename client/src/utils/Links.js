import { paths } from '../routes/Paths'

import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

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
                name: "Who We Are",
                path: `${paths.ABOUT}`
            },
            {
                name: "Campaigns",
                path: `${paths.ABOUT}#campaigns`
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

export const footerLinks = {
    Social: [
        {
            name: "Facebook",
            icon: <FaFacebookF />,
            path: "https://www.facebook.com/",
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            path: "https://www.twitter.com/",
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            path: "https://www.instagram.com/",
        }
    ],
    QuickLinks:  [
            {
                name: "Home",
                path: paths.LANDING,
            },
            {
                name: "About",
                path: paths.ABOUT,
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
                name: "Donate",
                path: paths.DONATE,
            }
        ],
    Blog: [
            {
                name: 'Technology can help Save Our Environment',
                path: '#',
            },
            {
                name: 'Technology can help Save Our Environment',
                path: '#',
            },
            {
                name: 'Technology can help Save Our Environment',
                path: '#',
            },
        ]
    }