import React, { useEffect, useState } from 'react'
import "./style.css"


function NavBar() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolling, isScrolling] = useState(false);


    useEffect(() => {

        function handleScroll() {
            setScrollPosition(window.scrollY);
            isScrolling(true);
            clearTimeout(timeoutRef.current);
        }

        const timeoutRef = { current: null };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className='navbar_container'>
            <h4
                className="app-name"
                style={{
                    visibility: scrollPosition > 0 ? "hidden" : "visible",
                    marginLeft: "42px"
                }}
            >
                MDWSA
            </h4>
            <div
                style={{
                    display: scrollPosition > 0 && scrolling ? "flex" : "none",
                    paddingLeft: "42px",
                    gap: "35px"
                }}
                className="navbar">
                <a className="app-name-two">MDWSA</a>
                <a>Trending Movies</a>
            </div>
        </div>
    )
}

export default NavBar