import "./YordamPage.css";

import YordamHeader from '../components/YordamHeader';
import YordamFooter from '../components/YordamFooter';
import { Margin, WidthFull } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
function YordamPage() {
  const{t, i18n} =useTranslation();
  return (
    <>
    <YordamHeader/>
    <div className="Yordam-container">
      <div className="Yordam-container-searsh">
        
        <form>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" className="Yordam-container-searsh-icon" /></svg> 
          <input type="text" placeholder="Qidirish"/>
          <div className="yordam-body">
            <button className="button1">{t("Yordam-body.n91")}</button>
            <button className="button1">{t("Yordam-body.n92")}</button>
            <button className="button1">{t("Yordam-body.n93")}</button><br />
            <button className="button1">{t("Yordam-body.n94")}</button>
            <button className="button1">{t("Yordam-body.n95")}</button>
            <button className="button1">{t("Yordam-body.n96")}</button><br />
            <button className="button2">{t("Yordam-body.n97")}</button>
            <button className="button2">{t("Yordam-body.n98")}</button>
            <button className="button2">{t("Yordam-body.n99")}</button>
            <h4>{t("Yordam-body.n100")}</h4>
            <button className="button3"><a href="">{t("Yordam-body.n101")}</a></button>
            <button className="button3"><a href="">{t("Yordam-body.n102")}</a></button>
            <button className="button3"><a href="">{t("Yordam-body.n103")}</a></button><br />
            <button className="button3"><a href="">{t("Yordam-body.n104")}</a></button>
            <button className="button3"><a href="">{t("Yordam-body.n105")}</a></button>
          </div>
        </form>
      </div>
    </div>
    <YordamFooter/>
    </>
  )
}

export default YordamPage