import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { CgBrowse } from "react-icons/cg";
import { RxCaretRight, RxCaretDown, RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import DropDown from "../DropDown";


import "./style.css"

function SideBar() {

  const [isActive, setIsActive] = useState(true);
  const [isDropDownActive, setDropDownActive] = useState(false)

  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const handleDropDown = () => {
    setDropDownActive(!isDropDownActive)
  }

  return (
    <nav id='sidebar' className={isActive ? "active" : ""}>

      <div style={{ position: "fixed", flexDirection: "column", backgroundColor: "transparent", height: "100vh", zIndex: "3" }} className="centered">
        <div className='nav_link' onClick={() => navigate("/")}>
          <div className="nav-link-icon centered">
            <GrHomeRounded size={20} className="nav_icon" />
          </div>
          {isActive ? null : (
            <a className='nav-link-text' onClick={() => console.log("Clicking")}>Home</a>
          )}
        </div>
        <div className='nav_link'>
          <div className="nav-link-icon centered">
            <CgBrowse size={20} className="nav_icon" />
          </div>
          {isActive ? null : (
            <a className='nav-link-text' href='#'>Browse</a>
          )}
        </div>

        {/* <div className='nav_link'>
          <div className="nav-link-icon centered">
            <IoCreateOutline size={20} className="nav_icon" color="black" />
          </div>
          {isActive ? null : (
            <a className='nav-link-text' href='#'>Sign Up</a>
          )}
        </div> */}


        <div onClick={toggleSidebar} className="caret_cont">
          {isActive ? <RxCaretRight size={25} /> : <RxCaretLeft size={25} />}
        </div>
        {/* 
        <div className="auth_dropDown" onClick={() => handleDropDown()}>
          <div style={{ display: "flex" }} className="nav_link">
            <div className="centered">
              <FiUsers size={20} className="nav_icon" color="black" />
            </div>
            <a>Authentication</a>
            <div className="centered">
              <RxCaretDown style={{ marginLeft: "-5px" }} size={20} />
            </div>
          </div>
          <div className={isDropDownActive ? "nav_link" : "inactiveDropDown"}>
            <div className="centered">
              <IoCreateOutline size={20} className="nav_icon" color="black" />
            </div>
            <a>Something</a>
          </div>
        </div> */}
        {/* <DropDown /> */}

      </div>
    </nav>
  )
}

export default SideBar

// https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&api_key=583d43563d202f1e6dd6e28704ca9624 ALL TIME T