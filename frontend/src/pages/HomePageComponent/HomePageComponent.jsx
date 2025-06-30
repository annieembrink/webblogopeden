import "./HomePageComponent.css"; // if you have styling

const HomePageComponent = () => {
  return (
    <div className="ComponentContainer">
    <div
    className="HomePageBackgroundImgContainer"
      style={{
        width: '100%',
        height: 'auto',
        backgroundImage: `url('/img/handwriting.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // opacity: '0.7',
        padding: '20px'
      }}
    >
           <div className="HomePageWelcomeText">
        <h2>Välkommen till</h2>      
        <h1>WEBBLOGOPEDEN</h1>  
        <h3>Din logoped i hela Sverige</h3>
        <h4>Dyslexiutredningar och språkliga utredningar online i privat regi</h4>
        <h4>Korta väntetider och en personlig vårdupplevelse</h4>
      </div>  
  
</div>
<div className="HomePageServices">
  <div className="DyslexiaImgContainer">
    <img
                src="/img/personsittingatcomputer.jpg"
                alt="Site Logo"
                className="logo"
            />
  </div>
  <div className="DyslexiaPrice">
  <h2 className="DyslexiaTitle">Dyslexiutredning</h2>
  </div>

</div>
</div>

  );
};

export default HomePageComponent;
