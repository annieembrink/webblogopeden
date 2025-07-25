import { useNavigate } from "react-router-dom";

const PricesPage = () => {
      const navigate = useNavigate();
    
      const goToContact = () => {
        navigate("/contact");
      };
      
    return ( <div>

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
                {/* <p>3-6 timmar</p> */}
                <p className="m10px">10 000 kr</p>
                <p>För alla åldrar</p>
                <p>Väntetid 1-2 veckor</p>
                <p>Ingår omfattande utredning samt intyg</p>
              </div>
            </div>
            <button className="m60px" onClick={goToContact}>Kontakt och tidsbokning</button>
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
                {/* <p>3-6 timmar</p> */}
                <p className="m10px">10 000 kr</p>
                <p>För alla åldrar</p>
                <p>Väntetid 1-2 veckor</p>
                <p>Ingår omfattande utredning samt intyg</p>
              </div>
              <button className="m60px" onClick={goToContact}>Kontakt och tidsbokning</button>
            </div>
          </div>
        </div>
      </div>
    </div> );
}
 
export default PricesPage;