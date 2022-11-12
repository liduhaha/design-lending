import React from "react";
import Aside from "../Aside/Aside";
import Article from "../Article/Article";
import style from './FirstRow.module.css'

const FirstRow = () => {
  return (
      <div className={style.firstRow}>
          <Aside/>
          <Article/>
      </div>
  )
}

export default FirstRow