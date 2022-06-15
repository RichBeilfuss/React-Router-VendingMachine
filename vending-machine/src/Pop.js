import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import popImg from "./Pop.png";
import "./Pop.css";

function Pop() {
    return (
        <div className="Pop">
            <img src={popImg} alt="pop can" />
            <Message>
                <h1>THAT SWEET NECTAR</h1>
                <h1><Link to="/">Go back to the Vending Machine</Link></h1>
            </Message>
            <img src={popImg} alt="pop can" />
        </div>
    );
}

export default Pop;