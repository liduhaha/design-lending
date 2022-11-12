import React from "react";
import style from './Aside.module.css';
import img from '../../img/img1.png'

const Aside = () => {
  return (
      <div className={style.firstRow_aside}>
          <img src={img} alt="img"/>
      </div>
  )
}

export default Aside