import React from 'react';
import { Link } from 'react-router-dom';
import './Landing_Page.css';

const Landing_Page = () => {
    return (
        <section className="hero-section">
            <div>
                <div data-aos="fade-up" className="flex-hero">
                    <h1>
                        Your Health<br/>
                        <span className="text-gradient">
                        
                        Our Responsibility
                        </span>
                    </h1>
                    <div className="blob-cont">
                        <div className="blue blob"></div>
                    </div>
                    <div className="blob-cont">
                        <div className="blue1 blob"></div>
                    </div>
                    <div className="blob-cont">
                        <div className="blue2 blob"></div>
                    </div>
                    <div className="blob-cont">
                        <div className="blue3 blob"></div>
                    </div>
                    <h4>
                        Wherever you are, whenever you need it, we are here to take your appointment! At the distance of a few clicks. As easy as it gets!
                    </h4>
                    <a href="#services">
                        <button class="button">Get Started</button>
                    </a>      
                </div>
            </div>
        </section>
    );
};

export default Landing_Page;