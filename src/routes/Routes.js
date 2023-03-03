import React from "react";
import { Routes , Link , Route } from "react-router-dom";


export default function Root(){
    
    let isAuthorized = sessionStorage.getItem("isAuthorized");
    console.log(isAuthorized);
    return(
        <div>
            {!isAuthorized ? <Link to ="/login" />
                :
                    <Link to="/" />
            }
            <Routes>
                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/">
                    <Layout/>
                </Route>
            </Routes>
        </div>
    )
}