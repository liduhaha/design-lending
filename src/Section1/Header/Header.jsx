import React from "react";
import style from './Header.module.css'

const Header = () => {
  return (
      <header className={style.sec1_Header}>
          <h1>Cornelia</h1>

          <div className={style.nav_btn}>
              <nav>
                  <ul className={style.ul_container}>
                      <li>
                          <button>Learn</button>
                      </li>
                      <li>
                          <button>About</button>
                      </li>
                      <li>
                          <button>Why</button>
                      </li>
                  </ul>
              </nav>

              <button className={style.download_btn}>Download</button>
          </div>
      </header>
  )
}

export default Header