import { Link } from "react-router-dom"

export default function HomePage() {
    return <div className="text-light" id="homepage">
        <h1>HomePage</h1>
        <div className="d-flex flex-column justify-content-center">
            <div className="mx-auto col-10">
                <Link to={"aboutme"}>
                    <button type="button" className="my-3 btn btn-lg btn-secondary col-12">About Me</button>
                </Link>
            </div>
            <div className="mx-auto col-10">
                <Link to={"portfolio"}>
                    <button type="button" className="my-3 btn btn-lg btn-secondary col-12">Portfolio</button>
                </Link>
            </div>
            <div className="mx-auto col-10">
                <Link to={"contact"}>
                    <button type="button" className="my-3 btn btn-lg btn-secondary col-12">Contact</button>
                </Link>
            </div>
            <div className="mx-auto col-10">
                <Link to={"resume"}>
                    <button type="button" className="my-3 btn btn-lg btn-secondary col-12">Resume</button>
                </Link>
            </div>
        </div>
    </div>
}