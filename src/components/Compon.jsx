import React from 'react'

export default function Compon({title,text,link}) {
  return (
    
        <div className="hero__box">
            <h2 className="hero__title titles">{title}.</h2>
            <div className='border'>
            <p className="hero__text">
              {text}
            </p>
            <div className='problem'> </div>
            </div>
            <a href="#about" className="hero__btn btn">
              {link}
            </a>
          </div>
  )
}
