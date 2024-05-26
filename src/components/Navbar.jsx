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

    return <header>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Logan McDaniel</a>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li onClick={handlePageChange} className="nav-item">
                        <Link  className={currentPage === "aboutme" ? "nav-link disabled": "nav-link"} to={"aboutme"}>About Me</Link>
                    </li>
                    <li onClick={handlePageChange} className="nav-item">
                        <Link className={currentPage === "portfolio" ? "nav-link disabled": "nav-link"} to={"portfolio"}>Portfolio</Link>
                    </li>
                    <li onClick={handlePageChange} className="nav-item">
                        <Link className={currentPage === "contact" ? "nav-link disabled": "nav-link"} to={"contact"}>Contact</Link>
                    </li>
                    <li onClick={handlePageChange} className="nav-item">
                        <Link className={currentPage === "resume" ? "nav-link disabled": "nav-link"} to={"resume"}>Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}