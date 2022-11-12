import React from "react";
import style from './Section3.module.css'
import Article from "../Article/Article";
import Aside from "../Aside/Aside";

const Section3 = () => {
  return (
      <div className={style.sec3}>
          <Article/>
          <Aside/>
      </div>
  )
}

export default Section3