import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { Discs } from "./Discs"
import { Learn } from "./Learn"

export const ApplicationViews = () => {
    
    return (
        <>
            <Routes>
                    <Route exact path="/" element={
                            <Home/> 
                    } />
                    <Route exact path="/discs" element={
                            <Discs/> 
                    } />
                    <Route exact path="/learn" element={
                            <Learn/> 
                    } />

                    <Route exact path="/login"/>
                    <Route exact path="/register"/>
                   
            </Routes>
        </>
    )
}