import "./TashkilotPage.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tashkilotimg from '../components/Tashkilotimg';
import { useTranslation } from "react-i18next";
function TashkilotPage() {
    const{t, i18n} =useTranslation();
  return (
    <>
    <Header/>
    <div className="tashkilot-background-container">
        <div className="tashkilot-kontainer">
            <div className="tashkilot-about-header">
                <a href="" className="tashkilot-yangiliklar">{t("Tashkilot.n106")}</a>
                <a href="" className="tashkilot-yangiliklar">{t("Tashkilot.n107")}</a>
                <a href="" className="tashkilot-yangiliklar">{t("Tashkilot.n108")}</a>
            </div>
            <div className="tashkilot-body">
                <p className="tashkilot-h1">{t("Tashkilot.n109")}</p>
                <p className="p">{t("Tashkilot.n110")} {t("Tashkilot.n111")}</p>
                <p className="p">{t("Tashkilot.n112")}</p>
                <ul className="tashkilot-ul1">
                    <li>{t("Tashkilot.n112")}</li>
                    <li>{t("Tashkilot.n113")}</li>
                    <li>{t("Tashkilot.n114")}</li>
                    <li>{t("Tashkilot.n115")}</li>
                    <li>{t("Tashkilot.n116")}</li>
                </ul>
                <p className="p"><a href="">{t("Tashkilot.n117")}</a> {t("Tashkilot.n118")}</p>
                <p className="p">{t("Tashkilot.n119")}</p>
                <p className="p">{t("Tashkilot.n120")}</p>
                <p className="p">{t("Tashkilot.n121")}</p>
                <p className="p">{t("Tashkilot.n122")} <strong>{t("Tashkilot.n123")}</strong> {t("Tashkilot.n124")}</p>
                <ul className="tashkilot-ul2">
                    <li>{t("Tashkilot.n125")}</li>
                    <li>{t("Tashkilot.n126")}</li>
                    <li>{t("Tashkilot.n127")}</li>
                    <li>{t("Tashkilot.n128")}</li>
                    <li>{t("Tashkilot.n129")}</li>
                    <li>{t("Tashkilot.n130")}</li>
                </ul>
                <p className="p">{t("Tashkilot.n131")}</p>
                <p className="p"><strong>{t("Tashkilot.n129")}</strong> {t("Tashkilot.n132")}</p> <br /> 
                <a href="" className="tashkilot-sahifa">{t("Tashkilot.n133")}</a>
                <br />
                <br />
                <a href="" className="tashkilot-sahifa">{t("Tashkilot.n134")}</a>
                <br />
                <br />
                <a href="" className="tashkilot-sahifa">{t("Tashkilot.n135")}</a>
                <br />
                <br />
                <a href="" className="tashkilot-sahifa">{t("Tashkilot.n136")}</a>
                <br />
                <br />
                <a href="" className="tashkilot-sahifa">{t("Tashkilot.n137")}</a>
            </div>
            <div className="tashkilot-hamkorlar">
                <p>{t("Tashkilot.n138")}</p>
                <Tashkilotimg/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default TashkilotPage