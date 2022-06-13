import React from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    
    const navigate = useNavigate();
    
    const location = useLocation();

    return (
                <>
                    {/* <div className="imagesDiv">
                        <img className="leftDisc" src="images/d3.png" />
                        <img className="rightDisc" src="images/d3.png" />
                    </div> */}
                    
                    <div className="headerAndNav">

                        <div className="nav_logo_container">
                            <img className="nav_logo" src="Images/trimmy2.png"/>
                        </div>

                        <ul className="navbar">

                            <li className="navbar__item">
                                <Link className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                            </li>

                            <li className="navbar__item">
                                <Link className={`navbar__link ${location.pathname === '/discs' ? 'active' : ''}`} to="/Discs">Discs</Link>
                            </li>

                            <li className="navbar__item">
                                <Link className={`navbar__link ${location.pathname === '/sell' ? 'active' : ''}`} to="/Bags">Learn</Link>
                            </li>

                            {/* <li className="navbar__item">
                                <Link className="navbar__link" to="/" onClick={handleLogout}> Logout </Link>
                            </li> */}
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/login">Login</Link>
                            </li>
                                
                        </ul>

                    </div>
                    
                </>
            )
}
