import React, { useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Home from "../Screens/Home/index"
import MovieDetail from '../Screens/Movie Detail';
import { useNavigate } from 'react-router-dom';

function RouterRoutes() {
  const navigate = useNavigate()

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname, navigate]);
    return children
  }

  return (
    // <Router>
    <Wrapper>
      <div className='wrapper'>
        <SideBar />
        <div className='content_cont'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviedetail" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>

      {/* <Route path="/services" element={<Services />}> */}
      {/* <Route path="/" element={<ServicesList />} /> */}
      {/* <Route path=":id" element={<ServiceDetails />} /> */}
      {/* </Route> */}
    </Wrapper>
    // </Router>
  )
}

export default RouterRoutes