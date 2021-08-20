import React from "react";
import {Button} from "react-bootstrap";
import "../style/PersonalTraining.css";

function PersonalTraining() {
    return (
        <div className="personal-training-div">
            <div className="personal-training-title">
                <h1 className="personal-training-header">Personal Training</h1>
                <div className="personal-training-hd">
                    <p>
                        All plans are based on a standard rate of 35
                        dollars/hour.{" "}
                        <b>
                            Both the 6 and 12 week programs offer significant
                            discounts and long term savings.
                        </b>
                    </p>
                </div>
            </div>

            <div className="personal-training-pricing">
               
                <ul>
                    <li>
                        <div className="personal-training-pricing-box">
                            <h6>One-time Personal Training Session</h6>
                            <h3>$35</h3>
                            <div className="personal-training-pricing-d">
                                words
                            </div>
                            <Button variant="outline-dark" className="personal-training-button">Buy now</Button>    
                        </div>
                    </li>

                    <li>
                        <div className="personal-training-pricing-box">
                            <h6>6 Week Personal Training</h6>
                            <h3>$380</h3>
                            <div className="personal-training-pricing-d">
                                This program allows the client to meet with the
                                trainer twice a week for 6 weeks for a total of
                                12 one hour training sessions. Included in this
                                program are an initial client consultation,
                                custom workout plan based on client goals and
                                fitness level, as well as the trainer’s phone
                                number and email regarding any questions.
                            </div>
                            <Button variant="outline-dark" className="personal-training-button">Buy now</Button>    
                        </div>
                    </li>

                    <li>
                        <div className="personal-training-pricing-box">
                            <h6>12 Week Personal Training</h6>
                            <h3>$730</h3>
                            <div className="personal-training-pricing-d">
                                This program allows the client to meet with the
                                trainer twice a week for 12 weeks a total of 24
                                one hour training sessions. Included in this
                                program are an initial client consultation,
                                custom workout plan based on client goals and
                                fitness level, as well as the trainer’s phone
                                number and email regarding any questions.
                            </div>
                            <Button variant="outline-dark" className="personal-training-button">Buy now</Button>    
                        </div>
                    </li>

                    <li>
                        <div className="personal-training-pricing-box">
                            <h6>Beginner Hypertrophy Workout Program</h6>
                            <h3>$20</h3>
                            <div className="personal-training-pricing-d">
                                This program introduces the new lifter to the
                                fundamentals of resistance training and primes
                                the central nervous system to fundamental mind
                                muscle connection. The goal of this program is
                                to provide a base of knowledge and training
                                regimen for the new lifter. Other principles
                                integrated in this program include progressive
                                overload and nonlinear periodization training
                                principles.
                            </div>
                            <Button variant="outline-dark" className="personal-training-button">Buy now</Button>    
                        </div>
                    </li>
                    <li>
                        <div className="personal-training-pricing-box">
                            <h6>Advanced Hypertrophy Workout Program</h6>
                            <h3>$30</h3>
                            <div className="personal-training-pricing-d">
                                This program is suitable for someone who has
                                been consistently resistance training for a year
                                or longer. This program will utilize concepts of
                                progressive overload and “shocking” the muscle
                                in order to provide adequate stimulus for
                                growth. Moreover, this program utilizes flexible
                                nonlinear periodization, which is suitable for
                                advanced lifters who know how to self assess
                                during training. Please note that this program
                                is advanced in nature. The consumer should have
                                a strong knowledge base of repair and recovery
                                outside of the gym in order to make the most of
                                this program and reduce the risk of
                                overtraining.
                            </div>
                            <Button variant="outline-dark" className="personal-training-button"> Buy Now </Button>    
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PersonalTraining;
