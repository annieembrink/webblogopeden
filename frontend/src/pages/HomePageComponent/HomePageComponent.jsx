import "./HomePageComponent.css"; // if you have styling
import FooterComponent from "../../components/Footer/FooterComponent";

const HomePageComponent = () => {
return (
<div className="ComponentContainer">

  <div className="HomePageBackgroundImgContainer" style={{ backgroundImage: `url("/img/notebook.jpg")` }}>
    <div className="HomePageWelcomeText">
      <h2>Välkommen till</h2>
      <h1>WEBBLOGOPEDEN</h1>
      <h3>Din logoped i hela Sverige</h3>
      <h4>Dyslexiutredningar och språkliga utredningar online i privat regi</h4>
      <h4>Korta väntetider och inget krav på remiss</h4>
    </div>
    <div className="homePageContactButton">
      <button>Kontakt och tidsbokning</button>
    </div>
  </div>

  <div className="HomePageServices">
    <div id="Dyslexia">
      <div className="DyslexiaImgContainer">
        <img src="/img/books.jpg" alt="Site Logo" className="logo" />
      </div>
      <div className="flex">
      <div>
        <div className="DyslexiaPrice">
          <h2 className="DyslexiaTitle">Dyslexiutredning</h2>
        </div>
        <div className="m30px">
          <p>3-6 timmar</p>
          <p className="m10px">8 000 kr</p>
          <p>För alla åldrar</p>
          <p>Väntetid 1-2 veckor</p>
          <p>Ingår omfattande utredning samt intyg</p>
        </div>
      </div>
      <button className="m60px">Kontakt och tidsbokning</button>
      </div>
    </div>
    <div id="Language">
      <div className="LanguageImgContainer">
        <img src="/img/holdinghands.jpg" alt="Site Logo" className="logo" />
      </div>
      <div className="flex">
      <div>
      <div className="LanguagePrice">
        <h2 className="LanguageTitle">Språkutredning</h2>
      </div>
      <div className="m30px">
        <p>3-6 timmar</p>
        <p className="m10px">8 000 kr</p>
        <p>För alla åldrar</p>
        <p>Väntetid 1-2 veckor</p>
        <p>Ingår omfattande utredning samt intyg</p>
      </div>
      <button className="m60px">Kontakt och tidsbokning</button>
      </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</div>

);
};

export default HomePageComponent;