import "./DigitalCarePage.css";
import { FaLaptopMedical, FaUserShield, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DigitalCarePage = () => {

      const navigate = useNavigate();
    
      const goToContact = () => {
        navigate("/contact");
      };
  return (
    <div className="digitalCareWrapper">

      <div
        className="digitalCareContainer HomePageBackgroundImgContainer"
        style={{ backgroundImage: `url("/img/personsittingatcomputer.jpg")` }}
      >
        <div className="HomePageWelcomeText" id="digitalText">
          {/* <h3>Jag erbjuder logopedisk hjälp i hela Sverige online</h3> */}

          
        </div>
      </div>
    <div className="cardContainer">
            <div className="infoCard">
              <FaLaptopMedical className="cardIcon" />
              <h4>Digital logopedhjälp</h4>
              <p>Vi tar emot patienter från hela Sverige och erbjuder utredningar digitalt via videomöten.</p>
            </div>

            <div className="infoCard">
              <FaUserShield className="cardIcon" />
              <h4>Säkerhet & Sekretess</h4>
              <p>Allt sker via en säker videolösning. Personuppgifter hanteras enligt GDPR och med hög sekretess.</p>
            </div>

            <div className="infoCard">
              <FaComments className="cardIcon" />
              <h4>Kontakta oss</h4>
              <p>Du är varmt välkommen att höra av dig för att se om en digital utredning passar dig.</p>
                <div className="homePageContactButton">
          <button onClick={goToContact}>Kontakt och tidsbokning</button>
        </div>
            </div>
          </div>
    </div>
  );
};

export default DigitalCarePage;
