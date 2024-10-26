import React,{useState, usestate} from "react";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { FaArrowUp } from "react-icons/fa";
import Typical from "react-typical";
import axios from "axios"; 
import {toast} from 'react-toastify';
import './ContactMe.css'

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInscreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [message, setMessage]=useState("")
    const [banner, setBanner]=useState("")
    const [bool, setBool]=useState(false)

    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleMessage=(e)=>{
        setMessage(e.target.value);
    }
    const submitForm=async(e)=>{
        e.preventDefault();
        try{
            let data={
                name,
                email,
                message,
            };
            setBool(true)
            const res= await axios.post(`/contact`,data)
                if(name.length===0 || email.length===0 ||message.length===0){
                        setBanner(res.data.msg)
                        toast.error(res.data.msg)
                        setBool(false)
                }else if (res.status===200){
                    setBanner(res.data.msg)
                    toast.success(res.data.msg)
                    setBool(false)

                    setName("")
                    setEmail("")
                    setMessage("")

                }
        }catch(error){
            console.log(error)
        }
       
    };

  return (
    <div className="main-container " id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className='title'>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Get In Touch",
                1000,
                "Email Me",
                1000,
                "Contact Me Here",
                1000,
               
              ]}
            />
          </h2>
          <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                    <a href="https://instagram.com/sanjeev___yadav_?igshid=NGExMmI2YTkyZg==">
                    <i className="fa fa-instagram"></i>

                    </a>
                    <a href="https://github.com/GitNerdSavvy">
                        <i className="fa fa-github-square"></i>
                    </a>
                    
                   
                   
                    <a href="mailto:sanjeev8400yadav@gmail.com">
                        <i className="fa fa-envelope-square"></i>
                    </a>
                   
                   
        </div>
        <div className="back-form">
            <div className="img-back">
                <h4>Send Your Email Here</h4>
                <img src={imgBack} alt='nooo.'/>
            </div>
            <form onSubmit={submitForm}>
            
                <p>{banner}</p>
                <label htmlFor="name" >Name</label>
                <input type="text" 
                onChange={handleName} value={name}/>

                <label htmlFor="email" >Email</label>
                <input type="email"
                onChange={handleEmail} value={email} />

                <label htmlFor="message" >Message</label>
                <textarea type="text"
                onChange={handleMessage} value={message} />
                <div className="send-btn">
                    <button type='submit'>
                    send <i className='fa fa-paper-plane'/>
                    {bool?(<b className='load'>
                    <img src={load1} alt='nops...'/>
                   </b> ):("")}
                    </button>
                </div>
            </form>
          
        </div>
         <button className="btn highlighted-btn"
         style={{'width':'3rem','height':'3rem','borderRadius':'40%'}}
                    onClick={() => ScrollService.scrollHandler.scrollToHome()}>
                  <FaArrowUp /> </button> 
      
      </div>
    </div>
  );
}
