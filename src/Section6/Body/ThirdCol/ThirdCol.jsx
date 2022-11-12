import React from "react";
import style from '../FirstCol/FirstCol.module.css'
import face9 from "../../img/face9.png";
import face10 from '../../img/face10.png'

const ThirdCol = () => {
  return (
      <div className={style.col1}>
          <div className={style.item}>
              <article>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet eaque eos error expedita facere harum hic id, iusto minus nulla quasi suscipit, totam veritatis voluptatibus voluptatum? Accusantium culpa cupiditate deleniti deserunt distinctio eos excepturi exercitationem iste molestias nobis, nulla omnis quis quo, repellat sed tempore voluptate. Adipisci alias ipsam ipsum itaque natus porro praesentium quo soluta ut veniam.
              </article>
              <section>
                  <img src={face9} alt=""/>
                  <div className={style.about}>
                      <div>Larry Davis</div>
                      <div>Manager @Side</div>
                  </div>
              </section>
          </div>
          <div className={style.item}>
              <article>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis consectetur cupiditate dignissimos dolore est facere fugiat harum in, iure iusto modi molestias nobis nostrum possimus praesentium quam quasi quia quo quod sit unde, vel voluptatibus. Distinctio doloremque facere facilis quam voluptas. Enim est ex facere, harum ipsa minus vitae voluptatum? Ipsum iusto odio odit.
              </article>
              <section>
                  <img src={face10} alt=""/>
                  <div className={style.about}>
                      <div>Joe Lemb</div>
                      <div>Photographer @Street</div>
                  </div>
              </section>
          </div>
      </div>
  )
}

export default ThirdCol