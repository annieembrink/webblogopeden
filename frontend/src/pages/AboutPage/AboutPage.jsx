import "./AboutPage.css";
import { FaGraduationCap, FaGlobeEurope, FaUserMd } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="aboutWrapper">
      <div
        className="aboutContainer HomePageBackgroundImgContainer"
        style={{ backgroundImage: `url("/img/bookandtea.jpg")` }}
      >
        <div className="HomePageWelcomeText" id="aboutText">
          {/* Optional title can go here */}
        </div>
      </div>

      <div className="cardContainer">
        <div className="infoCard">
          <FaGraduationCap className="cardIcon" />
          <h4>Utbildning & Legitimation</h4>
          <p>
            På Webblogopeden arbetar enbart legitimerade logopeder. Legitimationen ger oss befogenhet att utreda och diagnostisera dyslexi och språkstörning hos både barn och vuxna.
          </p>
        </div>

        <div className="infoCard">
          <FaGlobeEurope className="cardIcon" />
          <h4>Webblogopeden</h4>
          <p>
            Webblogopeden är en digital tjänst som syftar
            till att öka tillgängligheten till utredningar av dyslexi och
            språkstörning i hela Sverige, helt utan krav på remiss.
          </p>
        </div>

        <div className="infoCard">
          <FaUserMd className="cardIcon" />
          <h4>Erfarenhet & Fokus</h4>
          <p>
            Med gedigen erfarenhet av läs- och skrivsvårigheter samt språk- och
            kommunikationsproblem erbjuder vi individuellt anpassad logopedisk
            hjälp i privat regi.
          </p>
          <div className="homePageContactButton">
            <button onClick={goToContact}>Kontakt och tidsbokning</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
