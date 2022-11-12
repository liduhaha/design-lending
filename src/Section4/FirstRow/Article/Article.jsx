import React from "react";
import style from './Article.module.css'
import img from '../../img/small.png'

const Article = () => {
  return (
      <div className={style.firstrow_article}>
          <h2>Always <br/>Go further</h2>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, cupiditate esse incidunt ipsum, laborum nostrum quos recusandae sequi, soluta sunt tenetur voluptas? Aliquid at ea ipsam iusto officia quibusdam sequi!</div>
          <div className={style.scroll}>
              <img src={img} alt="img"/>
              <div>scroll to know more</div>
          </div>
      </div>
  )
}

export default Article