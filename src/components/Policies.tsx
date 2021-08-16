import React, {useEffect} from 'react';
import "../style/Policies.css"
import "aos/dist/aos.css";

const Aos = require("aos");

function Policies() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="policy-div">
            <h1 className="policy-header">Policies</h1>
            <div className="policy-discription">
                    {/* <p>All clients must be aware of the following:</p> */}
                <ul>
                    <li data-aos="fade-up">All clients must pay a guest fee or be a member at O'Malley's Gym.</li>
                    <li data-aos="fade-up">All clients must be deemed low risk and fill out the 2021 PAR-Q form.</li>
                    <li data-aos="fade-up">All payments must be made via Venmo, Zelle, or cash.</li>
                    <li data-aos="fade-up">All appointments must be scheduled directly through the trainer.</li>
                    <li data-aos="fade-up">All cancellations must occur prior to 24 hours before the scheduled session. If the cancellation is made within 24 hours, a 10 dollar fee is charged and the session may be rescheduled.</li>
                    <li data-aos="fade-up">All other services outside the training are subject to differing charges depending on what the trainer deems appropriate.</li>
                    <li data-aos="fade-up">If the trainer must reschedule a session, they must notify the client 24 hours prior to the schedule change. If the trainer fails to contact the client within 24 hours of the scheduled session, he/she will get an additional session free of charge.</li>
                    <li data-aos="fade-up">Private personal training sessions are one hour in length.</li>
                    <li data-aos="fade-up">The client is expected to arrive for the appointment on time, dressed, and ready to train. If the client arrives late for the appointment, he/she understands that the training session will end at the previously scheduled time.</li>
                    <li data-aos="fade-up">If the client does not show up for the scheduled training session, he/she will be charged for the full session.</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Policies;