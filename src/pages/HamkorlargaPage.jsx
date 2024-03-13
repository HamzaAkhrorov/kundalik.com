import './HamkorlargaPage.css'
import Header from "../components/Header"
import Footer from '../components/Footer'
import { useTranslation } from "react-i18next";


function HamkorlargaPage() {
  const{t, i18n} =useTranslation();

  return (

    <>
    <Header/> 
    <div className='HamkorlargaPage-main-container'>
      
      <div className="HamkorlaraPage-container">
          <h1>{t("Hamkorlarga.n60")}</h1>
          <p>{t("Hamkorlarga.n61")}</p>
          <h3>{t("Hamkorlarga.n62")}</h3>
          <div className="HamkorlaraPage-container2">
            <img src="https://static.emaktab.uz/img/forpartners/Uz/cognitive.png" alt="" />
             <div className="HamkorlargaPage-container-left">
             <h4>{t("Hamkorlarga.n63")}</h4>
            <p>{t("Hamkorlarga.n64")}</p>
             </div>
          </div>
          <div className="HamkorlaraPage-container3">
            <img src="https://static.emaktab.uz/img/forpartners/Uz/interestingly.png" alt="" />
             <div className="HamkorlargaPage-container-left2">
             <h4>{t("Hamkorlarga.n65")}</h4>
            <p>{t("Hamkorlarga.n66")}.</p>
             </div>
          </div>
          <div className="HamkorlaraPage-container4">
            <img src="https://static.emaktab.uz/img/forpartners/securely.png" alt="" />
             <div className="HamkorlargaPage-container-left">
             <h4>{t("Hamkorlarga.n67")}</h4>
            <p>{t("Hamkorlarga.n68")}</p>
            <p>{t("Hamkorlarga.n69")}</p>
             </div>
             
          </div>
          <div className="list">
            
            <ul>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n70")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n71")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n72")}</li>
            </ul>
            
          </div>
          <br />
          <br />
          <br />
          <br />

          <div className="list">
            
            <ul>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n73")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n74")}</li>
            </ul>
            
          </div>
          
         <div className="list-container">
         <div className="list1">
          <h1 className='h1'>{t("Hamkorlarga.n75")}</h1>
            <ul>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n76")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n77")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n78")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n79")}</li>
            </ul> 
          </div>
          <div className="list2">
            <ul>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n80")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n81")}</li>
              <li className='HamkorlargaPage-list-item'>{t("Hamkorlarga.n82")}</li>
            </ul> 
          </div>
         </div>
         <div className="hamkor-last-container">
         <p>{t("Hamkorlarga.n83")}<a href="bu yerda">{t("Hamkorlarga.n84")}</a> {t("Hamkorlarga.n85")} <br />{t("Hamkorlarga.n86")} </p>
         <p><a href="">{t("Hamkorlarga.n87")}</a></p>
         </div>
      </div>

      
    </div>
    <Footer/></>
  )
}

export default HamkorlargaPage