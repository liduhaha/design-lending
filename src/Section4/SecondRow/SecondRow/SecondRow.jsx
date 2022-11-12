import React from "react";
import style from './SecondRow.module.css'
import Article from "../Article/Article";
import Aside from "../Aside/Aside";

const SecondRow = () => {
  return (
      <div className={style.secondRow}>
          <Article/>
          <Aside/>
      </div>
  )
}

export default SecondRow