import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInscreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 75 },
    { skill: "Cpp", ratingPercentage: 80 },
    { skill: "DSA", ratingPercentage: 75 },
    { skill: "Express Js", ratingPercentage: 65 },
    { skill: "Mongo DB", ratingPercentage: 60 },
    { skill: "Core Java", ratingPercentage: 35 },
    { skill: "SQL", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Node Js", ratingPercentage: 45 },
  ];
  const projectDetails = [
    {
      title: "Coding Carnival Website",
      duration: { fromDate: "AUG ", toDate: "NOV 2023 " },
      description:
        "Developed a website utilizing the power of ReactJS. A simple website to introduce Coding Club Competition.",
      subHeading: "Technolgy Used ReactJs",
    },

    {
      title: "JioCinema-Clone",
      duration: { fromDate: "JUNE", toDate: "JULY 2023 " },
      description:
        "Developed JioCinema clone app using React.js, replicating functionalities of the popular streaming platform.Implemented movie database using TMDB API keys, content browsing, movie trailer playback, and enhanced UX on desktop.",

      subHeading: "Technolgy Used ReactJs and TMDB API",
    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"MASTER'S IN COMPUTER APPLICATION"}
        subHeading={"GL BAJAJ ITM, GREATER NOIDA"}
        fromDate={"SEP 2024"}
        toDate={"JUN 2026"}
      />
      <ResumeHeading
        heading={"BACHELOR'S IN COMPUTER APPLICATION"}
        subHeading={"CSJM University, Kanpur"}
        fromDate={"OCT 2021"}
        toDate={"JUN 2024"}
      />

      <ResumeHeading
        heading={"SENIOR SECONDARY EDUCATION, PCM"}
        subHeading={"SSM SEN. SEC. SCHOOL, GORAKHPUR"}
        fromDate={"JUN 2018"}
        toDate={"APR 2020"}
      />
      <ResumeHeading
        heading={"HIGH SCHOOL"}
        subHeading={"DON BOSCO SEN.SEC. SCHOOL, GORAKHPUR"}
        fromDate={"MAR 2016"}
        toDate={"APR 2018"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"TECH INTERN AT RAD.IO"}
        subHeading={"MERN STACK DEVELOPMENT"}
        fromDate={"SEP 23"}
        toDate={"OCT 23"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Gained experience in developing full stack applications using MERN.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - I contributed to both frontend and backend, optimized APIs, and
          collaborated in an agile team environment to meet project goals.
        </span>
        <br />
        <span className="resume-description-text">
          - It was a great opportunity to work in an experienced team.
        </span>
        <br />
        <span className="resume-description-text">
          - This opportunity has provided me valuable hands-experience in
          utilizing MERN stack for development.
        </span>
      </div>

      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>

      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Puzzles"
          description="I love to solve puzzles like Sudoko, Rubicks Cube and Many."
        />
        <ResumeHeading
          heading="Sports"
          description="I love to play Cricket, Chess and Badmintion."
        />
        <ResumeHeading
          heading="Games"
          description="I love to play coding games on various websites in free time."
        />
      </div>
    </div>,
  ];
  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    const bulletImages = [
      require("../../assets/Resume/education.svg").default,
      require("../../assets/Resume/work-history.svg").default,
      require("../../assets/Resume/programming-skills.svg").default,
      require("../../assets/Resume/projects.svg").default,
      require("../../assets/Resume/interests.svg").default,
    ];

    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bulletImages[index]}
          alt="Bullet Logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
