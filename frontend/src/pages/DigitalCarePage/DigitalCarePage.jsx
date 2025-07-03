import "./DigitalCarePage.css"

const DigitalCarePage = () => {
return (

<div className="digitalCareWrapper">

    <div className="digitalCareContainer HomePageBackgroundImgContainer"
        style={{ backgroundImage: `url("/img/personsittingatcomputer.jpg")` }}>
        <div className="HomePageWelcomeText" id="digitalText">
            <h3>Jag erbjuder logopedisk hjälp i hela Sverige online</h3>

            <div>
                <p>Jag tar emot patienter från hela Sverige och erbjuder utredningar digitalt.
                    Genom
                    videomöten kan du få professionell logopedisk hjälp oavsett var du befinner dig.</p>
            </div>
            <div>
                <p>Din integritet är skyddad genom en säker videolösning. Alla
                    personuppgifter hanteras enligt GDPR och med hög sekretess.</p>
            </div>

            <div>
                <p>Kontakta mig för att diskutera om en digital utredning kan passa dig!</p>
            </div>
        </div>
    </div>
</div> );
}

export default DigitalCarePage;