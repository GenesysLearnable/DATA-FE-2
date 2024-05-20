import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Pages.css'
import { Inputs } from './Inputs'
import { Button } from './Button'

export const PopupModal = ({open, close, vector, smsTracking, h3Title, paragragh, type, placeholder, names, value, footerSentence, footerLink}) => {
    if (!open) { return null };
    
    return (
        <>
            <div className="pop-up">

                <div className="modal-wrapper">

                    <section className='verify-container'>
                        <img className='vector' src={vector} alt="" onClick={close}/>
                            
                        <section className='verify-container2'>
                            <div className='div1'>
                                <img src={smsTracking} alt="" />
                                <h3>{h3Title}</h3>
                                <p>{paragragh}</p>
                            </div>

                            <div className='verificationInput'>
                                <Inputs
                                    type={type}
                                    placeholder={placeholder}
                                    names={names} 
                                />
                                <Button customStyle='verificationButton' value={value}/>
                            </div>

                            <footer className='p3'>{footerSentence}<Link className='p3child'>{footerLink}</Link></footer>
                        </section>
                    </section>

                </div>
           
            </div>
    
        </>
  )
}

