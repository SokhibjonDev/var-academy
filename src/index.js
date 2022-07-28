import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
import Certificate from "./components/certification/Certificate";
import AboutUs from "./components/about/aboutUs";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar data-aos="fade-down" />
    <div className="container">
      <Header />
      <Certificate />
      <h1>Dasturchi Jamoasi</h1>
      <div className="Cards">
        <AboutUs
          img="/images/admin.png"
          title="Soliyev Sohibjon"
          paragraph="Leader and Admin"
          btn="More"
        />
        <AboutUs
          img="/images/back-end.png"
          title="Xayitboyev Ozodbek"
          paragraph="Senior BackEnd Developer"
          btn="More"
        />
        <AboutUs
          img="/images/ui.png"
          title="Mirzakomilov Sardor"
          paragraph="Senior UI & UX Developer"
          btn="More"
        />
        <AboutUs
          img="/images/data-base.png"
          title="Abdullayev Bobur"
          paragraph="Data Sceince Developer"
          btn="More"
        />
        <AboutUs
          img="/images/smm.png"
          title="Soliyev Azizbek"
          paragraph="Marketolog"
          btn="More"
        />
        <AboutUs
          img="/images/translate.png"
          title="Yusufxonova Xurshida"
          paragraph="English Teacher"
          btn="More"
        />
        <AboutUs
          img="/images/front-end.png"
          title="Qurbonov Xondamir"
          paragraph="Senior FrontEnd Developer"
          btn="More"
        />
        <AboutUs
          img="/images/g-designer.png"
          title="Axmatjonov Sherzod"
          paragraph="Designer"
          btn="More"
        />
      </div>
      <h1>Bizningv Kurslarimiz</h1>
      <div className="asd">
        <div className="blogs">
          <Blog
            img="/images/usual.svg"
            title="16+"
            strong="Odatiy "
            lorem="kurslarimiz soni"
          />
          <Blog
            img="/images/roadmap.svg"
            title="7"
            strong="Roadmap Fullstack "
            lorem="kurslarimiz soni"
          />
          <Blog
            img="/images/intensiv.svg"
            title="4"
            strong="Intensiv Bootcamp "
            lorem="kurslarimiz soni"
          />
        </div>
        <div className="blogImg">
          <img src="/images/edu3.svg" alt="" />
        </div>
      </div>
      <Contact />
    </div>
  </React.StrictMode>
);
