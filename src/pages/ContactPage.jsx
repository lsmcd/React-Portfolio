import {useEffect, useState} from "react";

export default function ContactPage() {

    const [nameRequired, setNameRequired] = useState("");
    const [emailRequired, setEmailRequired] = useState("");
    const [messageRequired, setMessageRequired] = useState("");

    function nameHandler(e){
        e.preventDefault();
        setNameRequired(true);
    }

    function emailHandler(e){
        e.preventDefault();
        setEmailRequired(true);
    }

    function messageHandler(e){
        e.preventDefault();
        setMessageRequired(true);
    }

    useEffect(() => {
        setNameRequired(false);
    }, [])

    return <div id="contactpage">
        <h1>Contact (WIP)</h1>
        <form>
            <div className="form-floating mb-3">
                <input onMouseOut={nameHandler} type="text" className="form-control" id="name"/>
                <label htmlFor="name" className="form-label">{nameRequired ? "Name (required)" : "Name"}</label>
            </div>
            <div className="form-floating mb-3">
                <input onMouseOut={emailHandler} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                <label htmlFor="email" className="form-label">{emailRequired ? "Email address (required)" : "Email address"}</label>
            </div>
            <div className="form-floating mb-3">
                <input onMouseOut={messageHandler} type="text" className="form-control" id="message"/>
                <label htmlFor="message" className="form-label">{messageRequired ? "Message (required)" : "Message"}</label>
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
    </div>
}