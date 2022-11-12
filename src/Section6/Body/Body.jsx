import React from "react";
import style from './Body.module.css'
import FirstCol from "./FirstCol/FirstCol";
import SecondCol from "./SecondCol/SecondCol";
import ThirdCol from "./ThirdCol/ThirdCol";


const Body = () => {
  return (
      <div className={style.sec6_body}>
          <FirstCol/>
          <SecondCol/>
          <ThirdCol/>
      </div>
  )
}

export default Body;