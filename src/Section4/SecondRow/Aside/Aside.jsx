import React from "react";
import style from './Aside.module.css';
import img from '../../img/img2.png'

const Aside = () => {
  return (
      <div className={style.secondRow_aside}>
          <img src={img} alt="img"/>
      </div>
  )
}

export default Aside