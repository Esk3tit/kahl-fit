import React, { useEffect } from "react";
import "../style/About.css";
import "aos/dist/aos.css";
// import Rellax from 'react-rellax';

const Aos = require("aos");

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="about-div">
            {/* TODO: FIX EDDIE PLEASE */}
            {/* <img
                src="https://cdn.discordapp.com/attachments/808530804702707803/874127356091060274/IMG_6826.jpeg"
                alt="big Ed"
                height="300"
            /> */}
            <div className="about-me">
                <h1 className="about-section">About Me</h1>
                <div className="about-description" data-aos="fade-up">
                    <h5>Who I Am</h5>
                    <p>
                        I’m <b>Eddie Kahl</b>, and <b>I operate as a private personal trainer in the PDX area</b>. 
                        I offer <b>one on one personal training</b>; tailored to each clients specific needs, goals, and fitness level. 
                        The training style utilizes <b>resistance training, endurance exercises, and biomechanical functionality</b> in order to facilitate muscular growth and strength to bring your health and body to a new level. 
                        No matter your goals, if you are here to better your health, we can design and implement a <b>personalized program</b> to <b>make YOUR goals happen</b>. <em>Please reach out with any questions you may have</em>. 
                    </p>
                    <h5>More About Eddie</h5>
                    <p>
                        Eddie Kahl is an ACSM certified fitness trainer in
                        Portland, Oregon. Eddie has been resistance training for
                        3 years and strives to make a positive, healthy impact
                        on all those wanting to use resistance training as a
                        hobby and health remedy.
                    </p>
                    <p>
                        To see programs, offers, and rates, please visit the
                        Services page.
                    </p>
                    <p>
                        For an initial consultation, please contact Eddie
                        directly via text at <em>971-284-7214</em>.
                    </p>
                    <h5>Possible Goals</h5>
                    <div className="goal-section">
                        <dl>
                            <dt>Build Muscle</dt>
                            <dd>It feels good to look good.</dd>
                            <dt>Lose Fat</dt>
                            <dd>Weightlifting and exercise can increase your metabolic rate, which will support your weight loss journey.</dd>
                            <dt>Increase Mobility</dt>
                            <dd>Function better outside the gym and increase your quality of life.</dd>
                            <dt>Improve Coordination</dt>
                            <dd>Reduce the risk of falls, injury, and become more athletic.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
