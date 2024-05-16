import React from 'react'

export const Onboarding = () => {
  return (
    <main className='mainStyle'>
      <div className='mediaLogoDiv'>
      <img src="/Media Hub Logo 2 1.png" alt="logo" />
      </div>
      <section>
        <div className='mediah1pDiv'>
          <h1>Select your Media accounts</h1>
          <p>Kindly select the accounts you want to connect to Media hub</p>
        </div>
        <section className='mediaSection'>
          <div>
            <img src="/public/Media 1.png" alt="" />
            <img src="/public/Media 2.png" alt="" />
            <img src="/public/Media 3.png" alt="" />
          </div>
          <div>
            <img src="/public/Media 4.png" alt="" />
            <img src="/public/Media 5.png" alt="" />
            <img src="/public/Media 6.png" alt="" />
          </div>
          <div>
            <img src="/public/Media 7.png" alt="" />
            <img src="/public/Media 8.png" alt="" />
            <img src="/public/Media 9.png" alt="" />
          </div>
        </section>
        <div className='mediaButtonDiv'>
          <button>Skip</button>
          <button className='mediaDoneButton'>Done</button>
        </div>
      </section>
    </main>
         
  )
}
