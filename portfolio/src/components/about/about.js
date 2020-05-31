import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (

            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            Experienced Software Developer skilled in problem solving, full-stack development, and project management. Fluent in Java, JavaScript and Python. Strong interest in Cloud Computing, Data Analytics, Web Development and Automation.<br />
                            Aside from technical interests, I spend my time playing hockey, lifting weights/exercising, hiking and attending professional/social networking events. 
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Deepinder Bhuller</span>
                                    <span><br />San Francisco Bay Area</span><br />
                                    <span>deeep285@gmail.com</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="../Download/DeepBhullerResume_052020.pdf" download className="button"><i className="fa fa-download" />Download Resume</a>
                                </p>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end .main-col */}
                </div>
            </section>
        );
    }
}