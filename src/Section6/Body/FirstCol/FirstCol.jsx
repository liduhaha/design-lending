import React from "react";
import style from './FirstCol.module.css'
import face1 from "../../img/face1.png";
import face2 from "../../img/face2.png";
import face3 from "../../img/face3.png";
import face4 from "../../img/face4.png";

const FirstCol = () => {
  return (
      <div className={style.col1}>
              <div className={style.item}>
                  <article>
                      Lorem ipsum dolor sit is amet, consectetur adipisicing elit. Corporis iusto quaerat ratione soluta tenetur. Pariatur!
                  </article>
                  <section>
                      <img src={face1} alt=""/>
                      <div className={style.about}>
                          <div>Peter Miguel</div>
                          <div>CEO @Combinator</div>
                      </div>
                  </section>
              </div>
              <div className={style.item}>
                  <article>
                      Lorem ipsum dolor sit.
                  </article>
                  <section>
                      <img src={face2} alt=""/>
                      <div className={style.about}>
                          <div>Linda Huff</div>
                          <div>Manager @Sky</div>
                      </div>
                  </section>
              </div>
              <div className={style.item}>
                  <article>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur delectus doloremque, eaque earum facilis in incidunt iusto mollitia, nesciunt odio pariatur placeat possimus quidem rem reprehenderit sequi vel. Alias culpa deserunt dolor est explicabo nesciunt totam. Inventore, minus, necessitatibus!
                  </article>
                  <section>
                      <img src={face3} alt=""/>
                      <div className={style.about}>
                          <div>Valentine Sut</div>
                          <div>Designer @Tools</div>
                      </div>
                  </section>
              </div>
              <div className={style.item}>
                  <article>
                      Lorem ipsum dolor sit amet.
                  </article>
                  <section>
                      <img src={face4} alt=""/>
                      <div className={style.about}>
                          <div>Sarah Ewin</div>
                          <div>Manager @Social</div>
                      </div>
                  </section>
          </div>
      </div>
  )
}

export default FirstCol