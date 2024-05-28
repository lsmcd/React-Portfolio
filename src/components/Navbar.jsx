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
                <a className="navbar-brand">Logan McDaniel</a>
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
                <Link className="nav-link d-lg-none" to={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                </Link>
            </div>
        </nav>
    </header>
}