import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

        const [show, handleShow] = useState(false);

        useEffect(()=>{
                window.addEventListener("scroll",()=>{
                    if(window.scrollY> 100){
                        handleShow(true);
                    }else{
                        handleShow(false);
                    }

                });
                return () =>{
                    window.removeEventListener("scroll");
                };
        },[])


    return (
        <div className={`nav ${show && "nav__black"} `} >
            <img 
            className="nav__logo"
            src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" 
            alt="Netflix Logo"/>

            <img
             className="nav__avatar"
             src="https://previews.123rf.com/images/juristka/juristka1705/juristka170500007/77884667-cartoon-monster-face-vector-halloween-blue-smiling-fairy-tale-avatar-vector-illustration-.jpg" 
             alt="Avatar Logo"/>
            
        </div>
    )
}

export default Nav
