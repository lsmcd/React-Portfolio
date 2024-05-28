import {useEffect} from "react";
import screenshot1 from "../assets/screenshot1.jpg"
import screenshot2 from "../assets/screenshot2.jpg"
import screenshot3 from "../assets/screenshot3.jpg"
import screenshot4 from "../assets/screenshot4.jpg"
import screenshot5 from "../assets/screenshot5.jpg"
import screenshot6 from "../assets/screenshot6.jpg"

export default function PortfolioPage() {
    
    useEffect(() => {
        if(!localStorage.getItem("hasVisitedPortfolio")){
            localStorage.setItem("hasVisitedPortfolio", "true");

            document.location.pathname = "/aboutme"
        }
    });

    return <div className="text-light" id="portfoliopage">
        <h1>PortfolioPage</h1>
        <div className="d-lg-inline-flex flex-row justify-content-center">

            <div className="p-3 col-sm">
                <i><p>Note Taker</p></i>
                <img className="rounded img-fluid" src={screenshot1} alt="" />
                <a href="https://github.com/lsmcd/Note-Taker">
                    <button className="mt-3 col-6 btn btn-secondary btn-block">Repository</button>
                </a>
                <a href="https://note-taker-lsmcd-a2be44bdce42.herokuapp.com/">
                    <button className="mt-3 col-6 btn btn-secondary">Deployed App</button>
                </a>
            </div>
            <div className="p-3 col-sm">
                <i><p>Tech Blog</p></i>
                <img className="rounded img-fluid" src={screenshot2} alt="" />
                <a href="https://github.com/lsmcd/Tech-Blog">
                    <button className="mt-3 col-6 btn btn-secondary btn-block">Repository</button>
                </a>
                <a href="https://fathomless-island-98737-ee3b85198ec0.herokuapp.com/">
                    <button className="mt-3 col-6 btn btn-secondary">Deployed App</button>
                </a>
            </div>
            <div className="p-3 col-sm">
                <i><p>Weather Dashboard</p></i>
                <img className="rounded img-fluid" src={screenshot3} alt="" />
                <a href="https://github.com/lsmcd/weather-dashboard">
                    <button className="mt-3 col-6 btn btn-secondary btn-block">Repository</button>
                </a>
                <a href="https://lsmcd.github.io/weather-dashboard">
                    <button className="mt-3 col-6 btn btn-secondary">Deployed App</button>
                </a>
            </div>

        </div>

        <div className="d-lg-inline-flex flex-row justify-content-center">
            <div className="p-3 col-sm">
                <i><p>Programming Quiz</p></i>
                <img className="rounded img-fluid" src={screenshot4} alt="" />
                <a href="https://github.com/lsmcd/programming-quiz">
                    <button className="mt-3 col-6 btn btn-secondary btn-block">Repository</button>
                </a>
                <a href="https://lsmcd.github.io/programming-quiz">
                    <button className="mt-3 col-6 btn btn-secondary">Deployed App</button>
                </a>
            </div>
            <div className="p-3 col-sm">
                <i><p>Weather Click</p></i>
                <img className="rounded img-fluid" src={screenshot5} alt="" />
                <a href="https://github.com/lsmcd/sports-calendar">
                    <button className="mt-3 col-6 btn btn-secondary btn-block">Repository</button>
                </a>
                <a href="https://lsmcd.github.io/sports-calendar">
                    <button className="mt-3 col-6 btn btn-secondary">Deployed App</button>
                </a>
            </div>
            <div className="p-3 col-sm">
                <i><p>Fitrack</p></i>
                <img className="rounded img-fluid" src={screenshot6} alt="" />
                <a href="https://github.com/juliogallegosv/FiTrack">
                    <button className="mt-3 col-6 btn btn-secondary btn-block">Repository</button>
                </a>
                <a href="https://fi-track-f3175d32f96f.herokuapp.com">
                    <button className="mt-3 col-6 btn btn-secondary">Deployed App</button>
                </a>
            </div>
        </div>

    </div>

}