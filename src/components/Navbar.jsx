import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useParams } from "react";

export default function Navbar() {

    const [currentPage, setCurrentPage] = useState("")

    function handlePageChange() {
        let page = document.location.toString().split("/").pop();
        setCurrentPage(page);
    }
    
    useEffect(() => {
        handlePageChange()
    }, []);

    return <header className="position-sticky top-0">
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list d-lg-none mx-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    Logan McDaniel
                </Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li onClick={handlePageChange} className="nav-item d-lg-block d-none">
                        <Link  className={currentPage === "aboutme" ? "nav-link disabled": "nav-link"} to={"aboutme"}>About Me</Link>
                    </li>
                    <li onClick={handlePageChange} className="nav-item d-lg-block d-none">
                        <Link className={currentPage === "portfolio" ? "nav-link disabled": "nav-link"} to={"portfolio"}>Portfolio</Link>
                    </li>
                    <li onClick={handlePageChange} className="nav-item d-lg-block d-none">
                        <Link className={currentPage === "contact" ? "nav-link disabled": "nav-link"} to={"contact"}>Contact</Link>
                    </li>
                    <li onClick={handlePageChange} className="nav-item d-lg-block d-none">
                        <Link className={currentPage === "resume" ? "nav-link disabled": "nav-link"} to={"resume"}>Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}