import React from "react";


const myName = "Ochwada";
const year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p> By {myName} - 
                copyright@{year}</p>
        </footer>
    )
}

export default Footer;