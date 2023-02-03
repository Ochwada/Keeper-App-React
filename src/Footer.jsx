import React from "react";


const myName = "Ochwada";
const year = new Date().getFullYear();

function Footer() {
    return (
        <div>
            <p> By {myName} </p>
            <p>copyright@{year}</p>
        </div>
    )
}

export default Footer;