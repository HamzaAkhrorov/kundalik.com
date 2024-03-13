import "./Header.css";
import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
function Header() {
  const{t, i18n} =useTranslation();
  function changeLang(a){
    i18n.changeLanguage(a)
  }
  return (
    <>
    <div className="header-container">
    <img
          src="https://static.emaktab.uz/img/logotypes/uzlogotype.png"
          alt=""
        />
        <ul>
        <li>
          <Link to={"/TashkilotPage"}>{t("footer.n7")}</Link>
          </li>
          <li><Link to={"/ImkoniyatlarPage"}>{t("header.n2")}</Link></li>
          <li><Link to={"/HamkorlargaPage"}>{t("header.n3")}</Link></li>
          <li><Link to={"/YordamPage"}>{t("header.n4")}</Link></li>          
          <li>
          <select name="" id="" onClick={(e) => changeLang(e.target.value)}>
            <option value="uz">Uzb</option>
            <option value="ru">Rus</option>
          </select>
          </li>
          <li>
          
            <div className="button-enter">
            <Link to={"/"} className="link">{t("header.n5")}</Link>
            </div>
          </li>
          <button className="button_header">{t("header.n6")}</button>
        </ul>

    </div>
    </>
  )
}

export default Header