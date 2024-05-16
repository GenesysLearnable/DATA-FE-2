import React from 'react'
import { Button } from '../components/Button'
import { Inputs } from '../components/Inputs'
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';


export const Signup = () => {
    function SocialButton({ src, alt }) {
        return (
          <div className="social-button">
            <img src={src} alt={alt} className="social-icon" />
          </div>
        );
      }
      
      const socialButtons = [
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a9d85f687ce0a89320f3b43c3bf9b366c4b4445796c478b441301578b192e2e?apiKey=bc155cd4463f4c48a216b01c1991193c&",
          alt: "Google Logo",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5220ac6808577307483f4c6309ba82b2f918bee7db497bec7b6c16a4295cbe5a?apiKey=bc155cd4463f4c48a216b01c1991193c&",
          alt: "Facebook Logo",
        },
      ];
            

    return (
        <main className="mainStyle">
            <header className='mediaLogoDiv'>
                <img src="/Media Hub Logo 2 1.png" alt="logo" />
            </header>
            <section className='formWrapper'>
                <form>
                    <div className='topheading'>
                        <h2>Let's get you started</h2>
                        <p>
                        Become a MediaHubber today and Keep track of all your Media
                        consumption
                        </p>
                    </div>
                    <div className='formContainer'>
                        <div className='inputgap'>                   
                            <Inputs
                                inputStyles="signupInput"
                                type={"text"}
                                placeholder={"Full Name"}
                                names={"Usersname"} 
                            />
                            <Inputs
                                type={"email"}
                                placeholder={"Email"}
                                names={"emailAddress"}
                                inputIcon={<IoIosMail/>} 
                            />
                            <Inputs
                                type={"password"}
                                placeholder={"Password"}
                                names={"passId"}
                                inputIcon={<FaRegEyeSlash/>}
                            />
                        </div>
                        <Button value={"Sign Up"} />
                        <div className='formFooter'>
                            <p className="p3">Or</p>
                            <div className="socialButtons">
                            {socialButtons.map(({ src, alt }) => (
                                <SocialButton key={src} src={src} alt={alt} />
                            ))}
                            </div>
                            <p className='p3'>Already have an account?<a className='p3child' href="/"> Sign in</a></p>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
    }
