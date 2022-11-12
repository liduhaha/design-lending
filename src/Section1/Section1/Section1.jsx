import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import style from './Section1.module.css'

const Section1 = () => {
  return (
      <div className={style.sec1_container}>
          <Header/>
          <Body/>
      </div>
  )
}

export default Section1