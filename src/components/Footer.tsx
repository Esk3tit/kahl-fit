import React from 'react';
import "../style/footer.css"
import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi'

function Footer() {
    return (
        <div className="box">
            <h1>Eddie Kahl</h1>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <p className="heading">Social Media</p>
                        <a className="footerlink" href="https://www.instagram.com/kahlfit_/"><FiInstagram /></a>
                        <a className="footerlink" href="tel:+19712847214"><FiPhone />971-284-7214</a>
                        <a className="footerlink" href="mailto:kahlfit@gmail.com"><FiMail />kahlfit@gmail.com</a>
                    </div>
                    <div className="column">
                        <p className="heading">Availability</p>
                        <ul>
                            <li>Wednesday 4 PM - 9 PM</li>
                            <li>Friday 4 PM - 9 PM</li>
                            <li>Saturday 12 PM - 3 PM</li>
                        </ul>
                    </div>
                    <div className="column">
                        <p className="heading">Navigate</p>
                        <a href="#">About</a>
                        <a href="#">Policies</a>
                        <a href="#">Services</a>
                        <a href="#">Location</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;