import React from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="footer_logo">
                    <img src="Images/trimmy2.png"/>
                </div>

                <div className="footer_symbols">
                    <i>Twitter </i>
                    <i>Instagram </i>
                    <i>Facebook </i>
                    <i>YouTube</i>
                </div>

            </div>
        </>
    )
}