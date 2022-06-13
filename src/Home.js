import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {

    return (
        <>
            <div className="home_container">
                
                <div className="home">

                    <div className="home_pic">
                        <img className="imgHome" src="images/simon.jpg"/>

                        <p className="textOnPic">Find the Disc for You</p>
                        <Link to={`/discs`}>
                            <button className="buttonOnPic">Shop Discs</button>
                        </Link>
                    </div>

                    <div className="homeAboutAndWhy">

                        <div className="home_about">
                            <h2>What is Discnanigans?</h2>
                            <p>Disc-Nanigans is a digital retailer of premium disc golf gear, including new and used discs, bags and apparel. Discnanigans was founded in 2021 with one purpose in mind, to grow the game. We help new and existing players find the gear that's right for them at an affordable cost.</p>
                            <img src="images/kids3.jpg"/>

                        </div>

                        <div className="home_why">
                            <h2>Why use Discnanigans?</h2>
                            <p>Why buy from Discnanigans instead of another retailer? It's a question we get a lot and the answer is simple. Discnanigans helps grow the game by donating 10% of every disc we sell to the Disc Golf Foundation, supporting local disc golf communities around the country.</p>
                            <img src="images/kids6.jpg"/>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}