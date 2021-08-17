import React from 'react';
import "../style/Footer.css"
import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi'
// import { SiTiktok } from "react-icons/si";

function Footer() {
    return (
        <div className="box">
            <h1 className="main-h1">Eddie Kahl</h1>
            <div className="">
                <div className="footer-row">
                    <div className="footer-column">
                        <p className="heading">Social Media</p>
                        <a
                            className="footerlink"
                            href="https://www.instagram.com/kahlfit_/"
                        >
                            <FiInstagram /> @kahlfit_
                        </a>
                        <a className="footerlink" href="tel:+19712847214">
                            <FiPhone /> 971-284-7214
                        </a>
                        <a
                            className="footerlink"
                            href="mailto:kahlfit@gmail.com"
                        >
                            <FiMail /> kahlfit@gmail.com
                        </a>
                    </div>
                    <div className="footer-column">
                        <p className="heading">Availability</p>
                        <ul>
                            <li className="footertext">
                                Wednesday 4 PM - 9 PM
                            </li>
                            <li className="footertext">Friday 4 PM - 9 PM</li>
                            <li className="footertext">
                                Saturday 12 PM - 3 PM
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p className="heading">Navigate</p>
                        <a className="footerlink" href="#About">
                            About
                        </a>
                        <a className="footerlink" href="#Policies">
                            Policies
                        </a>
                        <a className="footerlink" href="#Personal-Training">
                            Personal Training
                        </a>
                        <a className="footerlink" href="#Services">
                            Services
                        </a>
                        <a className="footerlink" href="#Location">
                            Location
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;