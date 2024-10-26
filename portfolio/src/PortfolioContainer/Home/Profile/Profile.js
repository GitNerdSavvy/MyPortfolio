import React from 'react'
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon"> 
                    <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                    <a href="https://github.com/GitNerdSavvy">
                        <i className="fa fa-github-square"></i>
                    </a>
                    <a href="https://instagram.com/sanjeev___yadav_?igshid=NGExMmI2YTkyZg==">
                    <i className="fa fa-instagram"></i>

                    </a>
                    <a href="https://twitter.com/Stranger7489215?t=v8lXdt-WYRy2Bva2DyQfbg&s=09">
                        <i className="fa fa-twitter-square"></i>

                    </a>
                    
                    
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {""}
                        Hello I'm <span className="highlighted-text">Sanjeev</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                            loop={Infinity}
                            steps={[
                                "A Coder",
                                2000,
                                "A Developer",
                                2000,
                                "A Web Designer",
                                2000,
                                "A Problem Solver",
                                2000,
                            ]}
                        />
                    </h1>
                    <span className="profile-role-tagline">
                        A developer trying to get an innovative solution. 
                    </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        
                        Hire Me
                    </button>
                    <a href="SanjeevResume.pdf" download="Sanjeev Resume">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>

    </div>
  )
}

