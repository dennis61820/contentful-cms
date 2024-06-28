import React from 'react'
import heroSvg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h2>Contentful CMS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            quidem aliquam aspernatur sapiente, soluta fugit. Aut sed aperiam
            molestiae facilis!
          </p>
        </div>
        <div className='img-container'>
          <img src={heroSvg} alt='' className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
