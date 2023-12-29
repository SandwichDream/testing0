import react from "react";

import Sidebar from "./Components/Sidebar";
import PartnerSites from "./Components/PartnerSites";
import Banners from "./Components/Banners";
import PDFs from "./Components/PDFs";
import Videos from "./Components/Videos";
import Creatives from "./Components/Creatives";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { HiMail } from "react-icons/hi";
import { GoBellFill } from "react-icons/go";
import { BiWallet } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      break;
    case "/banners":
      component = <Banners/>
      break;
    case "/pdfs":
      component = <PDFs/>
      break;
    case "/videos":
      component = <Videos/>
      break;
    case "/creatives":
      component = <Creatives/>
      break;
    
  }
  return (
    <div className="App d-flex">
      <Sidebar/>
      <main className="App-main">
        <header className="header d-flex justify-content-between">
          <div className="header-left">
            <div className="header-title">
              <h3>Партнёрские материалы</h3>
            </div>
          </div>
          <div className="header-right">
            <BiWallet/>
            0 USD
            <button className="invisible-btns">
              <HiMail/>
            </button>
            <button className="invisible-btns">
              <GoBellFill/>
            </button>
            <button className="invisible-btns">
              Ru
              <FaChevronDown/>
            </button>
            <button className="invisible-btns">
              Выход
            </button>
          </div>
        </header>
        <div className="content">
          <PartnerSites/>
          <div className="some-info">
            <nav className="some-info__nav-bar">
              <ul className="d-flex">
                <li className={window.location.pathname === "/banners" ? "selected" : ""}><a href="/banners">Баннеры</a></li>
                <li className={window.location.pathname === "/pdfs" ? "selected" : ""}><a href="/pdfs">PDF</a></li>
                <li className={window.location.pathname === "/videos" ? "selected" : ""}><a href="/videos">Видео</a></li>
                <li className={window.location.pathname === "/creatives" ? "selected" : ""}><a href="/creatives">Креативы</a></li>
              </ul>
            </nav>
            <main>
              {component}
            </main>
          </div>
        </div>
      </main>
      <div className="spheres-container">
        <div className="sph1"></div>
        <div className="sph2"></div>
        <div className="sph3"></div>
      </div>
    </div>
  );
}

export default App;