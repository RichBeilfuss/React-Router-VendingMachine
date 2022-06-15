import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

function VendingMachine() {
    return (
        <div
          className="VendingMachine"
          style={{ backgroundImage: `url(${vendingMachineImg})` }}>
            <Message>
                <h1>Hello! You are at the vending machine. What would you like?</h1>
            </Message>
            <Message>
                <h1><Link to="/pop">Pop</Link></h1>
                <h1><Link to="/chips">Chips</Link></h1>
                <h1><Link to="/sardines">Sardines</Link></h1>
            </Message>
          </div>
    );
}

export default VendingMachine;