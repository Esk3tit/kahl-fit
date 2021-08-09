import React from 'react';
import "../style/About.css";



function About() {
    return (
        <div className="about-div">
            <img src="https://cdn.discordapp.com/attachments/808530804702707803/874127356091060274/IMG_6826.jpeg" alt="big Ed" height="300"/>
            <div className="about-me">
                <h1>About Me</h1>
                <div className="about-description">
                    <p>
                        Eddie Kahl is an ACSM certified fitness trainer in Portland, Oregon. 
                        Eddie has been resistance training for 3 years and strives to make a positive, 
                        healthy impact on all those wanting to use resistance training as a hobby and health remedy.
                    </p>
                    <p>
                        To see programs, offers, and rates, please visit the Services page.
                    </p>
                    <p>
                        For an initial consultation, please contact Eddie directly via text at <em>971-284-7214</em>. 
                    </p>  
                </div>
                
            </div>
            
        </div>
    );
}

export default About;