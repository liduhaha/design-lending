import React from "react";
import style from './Aside.module.css';
import img from '../img/bg1.png'

const Aside = () => {
  return (
      <div className={style.sec3_aside}>
          <img src={img} alt="img"/>
      </div>
  )
}

export default Aside