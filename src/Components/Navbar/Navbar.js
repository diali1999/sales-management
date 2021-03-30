import React, { Component } from 'react';
import { AnyButton } from "../AnyButton";
import { MenuItems } from "./MenuItems"
import './Navbar.css'

function Navbar({setAuthToken, setUser, user}) {
     const state = { clicked: false }

    const logout = () => {
        sessionStorage.clear('token');
        sessionStorage.clear('user');
        setAuthToken('');
        setUser('');
    }

        return(
            <nav className="NavbarItems">
                <h1 className="menu-icon">Sales Management</h1>
                <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <div className="dropdown">
                            <li key={index} className={item.cName}>
                                {item.title}
                                <div class="dropdown-content" >
                                {JSON.parse(sessionStorage.getItem('user'))?.user==item.user &&
                                    <a href ={item.Formurl}>Form</a>
                                }
                                <a href ={item.Listurl}>List</a>
                                </div>
                            </li>
                            </div>
                        )
                    })}
                     <AnyButton onClick={logout}>Log out</AnyButton>
                </ul>
            </nav>
        )
    }

export default Navbar