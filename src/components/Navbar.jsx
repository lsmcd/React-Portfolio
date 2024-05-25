import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Logan McDaniel</a>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" to={"aboutme"}>About Me</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"portfolio"}>Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"contact"}>Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"resume"}>Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}