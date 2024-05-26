import {useEffect, useState} from "react";
import { redirect } from "react-router-dom";

export default function PortfolioPage() {
    
    useEffect(() => {
        if(!localStorage.getItem("hasVisitedPortfolio")){
            localStorage.setItem("hasVisitedPortfolio", "true");

            document.location.pathname = "/aboutme"
        }
    });

    return <div id="portfoliopage">
        <h1>PortfolioPage</h1>
    </div>

}