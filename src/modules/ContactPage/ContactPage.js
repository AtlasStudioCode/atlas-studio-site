import React from 'react';
import IconRow from './IconRow/IconRow';
import { Button } from 'react-bootstrap';

import './ContactPage.css';

import profile_img from '../../data/profile.png'
import email_img from '../../data/email.png';
import phone_img from '../../data/phone.png';
import github_img from '../../data/github.png';
import linkedin_img from '../../data/linkedin.png';
import resume from '../../data/resume.pdf';

function ContactPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col header-col">
                    <div className="text-uppercase header-name">Danny O'Brien<br/><span className="position-text">GIS Specialist & Developer</span></div>
                </div>
            </div>
            <div className="row body-row">
                <div className="col-md-4 order-md-2 body-col">
                    <img src={profile_img} className="profile-img" />
                </div>
                <div className="col-md-4 order-md-1 body-col">
                    <div className="icon-container">
                        <IconRow 
                            href="mailto:danny@atlasstud.io"
                            src={email_img}
                            alt="Email"
                            text="danny@atlasstud.io"
                        />
                        <IconRow 
                            href="tel: (949) 257-5690"
                            src={phone_img}
                            alt="Phone"
                            text="(949) 257-5690"
                        />
                        <IconRow 
                            href="https://github.com/AtlasStudioCode"
                            src={github_img}
                            alt="Github"
                            text="AtlasStudioCode"
                        />
                        <IconRow 
                            href="https://www.linkedin.com/in/danny-obrien-gis/"
                            src={linkedin_img}
                            alt="LinkedIn"
                            text="danny-obrien-gis"
                        />
                    </div>
                </div>
                <div className="col-md-4 order-md-3 body-col">
                    <p className="desc-text">I seek to craft solutions for technical challenges facing companies in a variety of industries using my skills and knowledge in GIS software, full stack development, and drone operations. My experience working with consulting firms and research labs shows a clear track record of successful project completion and continued improvement over time. Please reach out with any employment inquiries or work contracts. I look forward to working with you!</p>
                </div>
            </div>
            <div className="row">
                <div className="col button-col">
                    <Button
                        size="lg"
                        variant="light"
                        className="resume-button text-uppercase"
                        href={resume} >
                        View Resume
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;