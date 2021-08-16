import React, {useEffect} from 'react';
// import Aos from "aos";
import "../style/Services.css";
import "aos/dist/aos.css";

const Aos = require('aos');


function Services() {

    useEffect(()=> {
       Aos.init({duration: 2000});
    }, []);


    return (
        <div className="services-div">
            <div className="service">
                <h1 className="service-header">Services</h1>

                <p className="service-header">
                    All programs are bought directly through the trainer.
                    Contact options include phone <em>(971-284-7214)</em> and
                    email <em>(kahlfit@gmail.com)</em>.
                </p>

                <div className="service-price" data-aos="fade-up">
                    <h2>6 Week Personal Training - $380</h2>
                    <p className="service-price-description">
                        This program allows the client to meet with the trainer
                        twice a week for 6 weeks for a total of 12 one hour
                        training sessions. Included in this program are an
                        initial client consultation, custom workout plan based
                        on client goals and fitness level, as well as the
                        trainer’s phone number and email regarding any
                        questions.
                    </p>
                </div>

                <div className="service-price" data-aos="fade-up">
                    <h2>12 Week Personal Training - $730</h2>
                    <p className="service-price-description">
                        This program allows the client to meet with the trainer
                        twice a week for 12 weeks a total of 24 one hour
                        training sessions. Included in this program are an
                        initial client consultation, custom workout plan based
                        on client goals and fitness level, as well as the
                        trainer’s phone number and email regarding any
                        questions.
                    </p>
                </div>

                <div className="service-price" data-aos="fade-up">
                    <h2>Beginner Hypertrophy Workout Program - $20</h2>
                    <p className="service-price-description">
                        This program introduces the new lifter to the
                        fundamentals of resistance training and primes the
                        central nervous system to fundamental mind muscle
                        connection. The goal of this program is to provide a
                        base of knowledge and training regimen for the new
                        lifter. Other principles integrated in this program
                        include progressive overload and nonlinear periodization
                        training principles.
                    </p>
                </div>

                <div className="service-price" data-aos="fade-up">
                    <h2>
                        Advanced Hypertrophy Workout Program - $30 (COMING SOON)
                    </h2>
                    <p className="service-price-description">
                        This program is suitable for someone who has been
                        consistently resistance training for a year or longer.
                        This program will utilize concepts of progressive
                        overload and “shocking” the muscle in order to provide
                        adequate stimulus for growth. Moreover, this program
                        utilizes flexible nonlinear periodization, which is
                        suitable for advanced lifters who know how to self
                        assess during training. Please note that this program is
                        advanced in nature. The consumer should have a strong
                        knowledge base of repair and recovery outside of the gym
                        in order to make the most of this program and reduce the
                        risk of overtraining.
                    </p>
                </div>

                <div className="service-notes">
                    <strong>
                        <p>
                            NOTES: All services provided are consumed at the
                            buyer’s risk. The trainer is not responsible for any
                            physiological or psychological injury for any of the
                            bought services.
                        </p>
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default Services;