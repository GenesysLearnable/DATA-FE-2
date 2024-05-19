import React from 'react'
import { Button } from '../components/Button'
import { Inputs } from '../components/Inputs'
import './Pages.css'



const Signin = () => {
  return (
    <main className='mainStyle'>
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
                        <p id='forgotPassword'>Forgot password?</p>
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
  )
}

export default Signin
