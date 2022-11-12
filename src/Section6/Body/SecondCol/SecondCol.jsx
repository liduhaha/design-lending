import React from "react";
import style from '../FirstCol/FirstCol.module.css'
import face5 from "../../img/face5.png";
import face6 from "../../img/face6.png";
import face7 from "../../img/face7.png";
import face8 from "../../img/face8.png";

const SecondCol = () => {
  return (
      <div className={style.col1}>
          <div className={style.item}>
              <article>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, ipsa!
              </article>
              <section>
                  <img src={face5} alt=""/>
                  <div className={style.about}>
                      <div>Sarah Ew</div>
                      <div>Manager @Social</div>
                  </div>
              </section>
          </div>
          <div className={style.item}>
              <article>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at blanditiis consequatur dolorem eaque eligendi eos, est, explicabo facere incidunt iste itaque labore minima officiis optio, repellendus suscipit veritatis voluptas?
              </article>
              <section>
                  <img src={face6} alt=""/>
                  <div className={style.about}>
                      <div>Debra Peters</div>
                      <div>CEO @Gen</div>
                  </div>
              </section>
          </div>
          <div className={style.item}>
              <article>
                  Lorem ipsum dolor sit amet.
              </article>
              <section className={style.about}>
                  <img src={face7} alt=""/>
                  <div className={style.about}>
                      <div>Vida Inman</div>
                      <div>Manager @Should</div>
                  </div>
              </section>
          </div>
          <div className={style.item}>
              <article>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga fugiat maiores odit optio placeat qui, soluta tempora? Alias animi aut commodi ducimus, enim error esse exercitationem illo mollitia nihil perspiciatis, quo sit suscipit ut.
              </article>
              <section>
                  <img src={face8} alt=""/>
                  <div>
                      <div>John Morg</div>
                      <div>CEO @Toys</div>
                  </div>
              </section>
          </div>
      </div>
  )
}

export default SecondCol