import React from "react";
import style from "./Body.module.css";
import img from '../img/img1.png'

const Body = () => {
  return (
      <div className={style.sec1_body}>
          <div className={style.sec1_bg}>

          </div>
          <div className={style.sec1_front}>
              <div>Cornelia <br/>is the new</div>
              <img src={img} alt="img"/>
              <div>black</div>
          </div>
      </div>
  )
}

export default Body