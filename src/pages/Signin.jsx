import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Inputs } from '../components/Inputs';
import { PopupModal } from '../components/PopupModal';
import './Pages.css';


const Signin = () => {
    const [openPopUp, setOpenPopUp] = useState(false);     //To handle the display of the popup 

    const handleForgotPassword = () => {
        setOpenPopUp(true);
    }

    const afterPopupDisplay = {  //after displaying the popup, this handles the blurring of the other elements
        filter: openPopUp ? 'blur(5px)' : 'none',
        pointerEvents: openPopUp ? 'none' : null,
    }


    return (
    <>
        <main className='mainStyle' style={afterPopupDisplay}>
        <header className='mediaLogoDiv'>
            <img src="/Media Hub Logo 2 1.png" alt="logo" />
        </header>
        <section className="formWrapper">            
            <form>
                <div className='topheading'>
                    <h2>Welcome back!</h2>
                    <p>Kindly Fill in your Correct Log in Details</p>
                </div>
                <div className='formContainer'>
                    <div className='inputgap'>
                        <Inputs
                            type={"email"}
                            placeholder={"Email"}
                            names={"emailAddress"} 
                        />
                        
                        <div className='passgap'>
                        <Inputs
                            type={"password"}
                            placeholder={"Password"}
                            names={"passId"} 
                        />
                              <p id='forgotPassword' onClick={handleForgotPassword}>
                                  Forgot password?</p>
                        </div>
                        {/* <input
                            type="email"
                            placeholder='Email'
                            name='emailAddress'
                            value={inputs.emailAddress || ""}
                            onChange={handleChange}
                            required
                        />
                        <div className="passwordEye">
                            <input
                                type="password"
                                placeholder='Password'
                                name='passId'
                                value={inputs.passId || ""}
                                onChange={handleChange}
                                required
                            />
                            <img src='/eye-slash.png'/>
                        </div> */}
                        
                    </div>
                    
                    <Button value={"Sign In"}/>
                </div>
            </form>
          </section>
         
        </main>
            
        <PopupModal 
            open={openPopUp} close={() => setOpenPopUp(false)}
            vector={"/Vector.png"} 
            smsTracking={"/sms-tracking.png"} 
            h3Title={"Forgot your password?"} 
            paragragh={"Enter your email address below to receive a reset code"}
            // type={"email"}
            // placeholder={"Enter email address"} 
            // names={"ForgotPassword"}
            inputs={[
                {
                    type: 'email', placeholder: 'Enter email address', names: 'forgotPassword', inputStyles: 'inputClass'
                }
            ]}
            value={"Reset password"}         
            footerSentence={"Didnt recieve a code?"} 
            footerLink={"Try Again"}
        />
      
    </>
  )
}

export default Signin;
