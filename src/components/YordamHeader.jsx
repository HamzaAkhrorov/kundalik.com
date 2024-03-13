import "./YordamHeader.css";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

function YordamHeader() {
  const{t, i18n} =useTranslation();
  function changeLang(a){
    i18n.changeLanguage(a)
  }
  return (
    <>
    <div className="yordamheader-container">
    <div className="yordamheader-container-img">
    <img
          src="https://theme.zdassets.com/theme_assets/9178045/dd580e2e26390552e7621e6d1727be648a5a925d.ico"
          alt=""
        /> <p>{t("Yordam-header.n88")}</p>
    </div>
        <ul>
            
          <li>
          <select name="" id="" onClick={(e) => changeLang(e.target.value)}>
            <option value="uz">Uzb</option>
            <option value="ru">Rus</option>
          </select>
          </li>
          <li>
            <a href="">{t("Yordam-header.n89")}</a>
            <a href="">{t("Yordam-header.n90")}</a>
          </li>
         
         
        </ul>

    </div>
    
    </>
  )
}

export default YordamHeader