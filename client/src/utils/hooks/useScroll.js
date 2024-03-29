import { useState, useEffect } from 'react'

const useScroll = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        } );
    } , []);

    return scroll;
}

export default useScroll;