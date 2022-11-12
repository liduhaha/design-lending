import React from "react";
import style from './Section4.module.css'
import FirstRow from "../FirstRow/FirstRow/FirstRow";
import SecondRow from "../SecondRow/SecondRow/SecondRow";

const Section4 = () => {
  return (
      <div className={style.sec4}>
          <FirstRow/>
          <SecondRow/>
      </div>
  )
}

export default Section4