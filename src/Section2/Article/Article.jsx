import React from "react";
import style from './Article.module.css'

const Article = () => {
  return (
      <div className={style.sec1_article}>
          <h1>Toward infinity <br/>and beyond</h1>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis doloremque doloribus ducimus facilis fugit hic id, iusto nihil non, officiis, omnis suscipit ullam unde ut veritatis voluptates! Quibusdam, similique suscipit.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum explicabo, <span>officia quaerat quos vitae?</span></div>
      </div>
  )
}

export default Article