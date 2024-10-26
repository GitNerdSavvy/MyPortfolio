import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './About.css';
export default function About(props) {
    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInscreen !==props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription= 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    

    const SCREEN_CONSTANTS={
        description: "As a MERN stack developer, I possess a comprehensive skill set that enables me to handle all aspects of web development from server-side programming to front-end design. I am proficient in multiple programming languages and Frameworks. ",
        highlights: {
            bullets:[
                "MERN Stack Developer",
                "Interactive Front End as per as the design",
                "Improving Experience in Backend Development",
                "Working on Improving MERN Proficiency",
                "Developed multiple projects using MERN Stack",
                "Proficient in programming language Cpp",
                "Using Netlify and Render for Deploying projects",
                "Fluent in English and Hindi",
                "Managing Database using MongoDB",
                "Creating and Maintaining APIs on Dailybasis",
                "Solving DSA Questions On Daily Basis",
                "Learning New Techs"
            ],
            heading: "Here are few Highlights"
        }
    }
    const renderHighlight =()=>{
         return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                        <span>{value}</span>
                    
                </div>
            ))
         )

    }
  return (
    <div className="about-me-container screen-container " id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"} />
        <div className="about-me-card">
            <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderHighlight()}
                    </div>
                    <div className="about-me-options">
                    <button className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                    Hire Me </button>                  
                    <a href="SanjeevResume.pdf" download="Sanjeev Resume">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>  
                    </div>
                </div>
                
            </div>
        </div>
      
    
  );
}
