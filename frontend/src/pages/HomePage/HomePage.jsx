import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import PricesPage from "../PricesPage/PricesPage";

const HomePage = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="ComponentContainer">
      <div
        className="HomePageBackgroundImgContainer"
        style={{ backgroundImage: `url("/img/notebook.jpg")` }}
      >
        <div className="HomePageWelcomeText">
          <h2>Välkommen till</h2>
          <h1>WEBBLOGOPEDEN</h1>
          <h3>Din logoped i hela Sverige</h3>
          <h4>Dyslexiutredningar och språkliga utredningar online i privat regi</h4>
          <h4>Korta väntetider och inget krav på remiss</h4>
        </div>
        <div className="homePageContactButton">
          <button onClick={goToContact}>Kontakt och tidsbokning</button>
        </div>
      </div>

      <PricesPage/>

    </div>
  );
};

export default HomePage;
