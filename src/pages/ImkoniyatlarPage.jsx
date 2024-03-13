import "./ImkoniyatlarPage.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Fullwidth from '../components/Fullwidth'

function ImkoniyatlarPage() {
  return (
    
    <div className="Imkoniyat">
      <Header/>
     <div className="imkoniyatla-main-container">
     <div className="imkoniyatlar-container">
           <div className="imkoniyatlar-items">
           <h1>Imkoniyatlar</h1>
           <Fullwidth/> 
          
           </div>

     </div>
     </div>
     

      <Footer/>
    </div>
  )
}

export default ImkoniyatlarPage