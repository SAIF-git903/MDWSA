import React, { useEffect } from 'react'
import Content from '../../Components/Main Page Content'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';


function Home() {

    const navigate = useNavigate();

   
    return (
        <>
            <div className='content_cont'>
                <NavBar />
                <Content />
            </div>
        </>
    )
}

export default Home