import React from 'react'
import './home.css'
export default function Home() {
  return (
     <main className='main'>
      <section className='home section' id='home'>
        <div class='home__container container grid'>
          <div className='home__content grid'>
            <div classNmae='home__social'>
              <a href="/" className='home__social-icon'>
                <i class='bx bxl-github'></i>
              </a>
              <a href="/" className='home__social-icon'>
                <i class='bx bxl-medium'></i>
              </a>
              <a href="/" className='home__social-icon'>
              <i class='bx bxl-dribbble' ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
     </main>
  )
}

