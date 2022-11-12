import React from "react";
import style from './Body.module.css'
import figma from '../img/Figma.png'
import sketch from '../img/Sketch.png'

const Body = () => {
  return (
      <div className={style.sec7_body}>
          <h1>Get started with <br/>Cornelia today</h1>
          <div className={style.sec7_btnContainer}>
              <button>
                  <img src={figma} alt="figma"/>
                  <div>Download for Figma</div>
              </button>
              <button>
                  <img src={sketch} alt="sketch"/>
                  <div>Download for Sketch</div>
              </button>
          </div>
      </div>
  )
}

export default Body