import planting from './earth-growing-together.jpg'
import globe from './earth-globe.jpg';
import growth from './earth-growth.jpg';
import lake from './earth-lake.jpg';
import leaf from './earth-leaf.jpg'



const slides = [
    {
        title: '10,000 Trees Planted in 2018',
        subtitle: 'Join us in our conservation journey',
        image: planting,
        button: {
            text: 'Volunteer',
            link: '/register'
        }
    },
    {
        title: 'Save The World',
        subtitle: 'Planting Trees In Your Surrounding',
        image: growth,
    },
    {
        title: 'Together',
        subtitle: 'We can Heal the Earth',
        image: globe,
    },
    {
        title: 'Make The World',
        subtitle: 'A Better Place',
        image: lake,
    },
    {
        title: 'Environmental Concern',
        subtitle: 'Support our cause to make a better world',
        image: leaf,
        button : {
            text: 'Donate',
            link: '/donate'
        }
    }
]

export default slides;