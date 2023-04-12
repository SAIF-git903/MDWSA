import React, { useState } from 'react'
import { ImLinkedin } from "react-icons/im";
import "./style.css"
import { BsGithub } from "react-icons/bs";

function Footer() {

    const [hovering, IsHovering] = useState(false)
    const [hoveringGh, IsHoveringGh] = useState(false)

    const handleMouseOverli = () => {
        IsHovering(true)
    }

    const handleMouseOutli = () => {
        IsHovering(false)
    }

    const handleMouseOvergh = () => {
        IsHoveringGh(true)
    }

    const handleMouseOutgh = () => {
        IsHoveringGh(false)
    }

    return (
        <footer className="site-footer">
            <div className='footer-container'>
                <a href='https://www.linkedin.com/in/saif-mughal/' target={"_blank"} onMouseOver={handleMouseOverli} onMouseOut={handleMouseOutli} id="icon-link-li">
                    <ImLinkedin size={30} color={hovering ? "#0A66C2" : "gray"} style={{ backgroundColor: hovering ? "white" : "", borderRadius: "6px" }} />
                </a>
                <a href='https://github.com/SAIF-git903' target={"_blank"} onMouseOver={handleMouseOvergh} onMouseOut={handleMouseOutgh} id="icon-link-gh">
                    <BsGithub size={30} color={hoveringGh ? "white" : "gray"} style={{ backgroundColor: hoveringGh ? "black" : "", borderRadius: "50%" }} />
                </a>
            </div>
        </footer>
    )
}

export default Footer