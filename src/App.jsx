import './App.css'
import LoginPage from "./pages/LoginPage"
import TashkilotPage from "./pages/TashkilotPage"
import ImkoniyatlarPage from "./pages/ImkoniyatlarPage"
import HamkorlargaPage from "./pages/HamkorlargaPage";
import YordamPage from "./pages/YordamPage";
import Card from "./Card";
import SwiperPage from "./swiper/SwiperPage";
import {Routes , Route} from "react-router-dom"
import Cards from './Cards';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<SwiperPage/>}/>
        <Route path="/TashkilotPage" element={<TashkilotPage/>}/>
        <Route path="/HamkorlargaPage" element={<HamkorlargaPage/>}/>
        <Route path="/ImkoniyatlarPage" element={<ImkoniyatlarPage/>}/>
        <Route path="/YordamPage" element={<YordamPage/>}/>
        
      </Routes>
      {/* <SwiperPage/> */}
      {/* <Card/> */}
      {/* <Cards/> */}
    </>
  );
}

export default App
