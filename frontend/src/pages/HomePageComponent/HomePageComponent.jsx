import "./HomePageComponent.css"; // if you have styling

const HomePageComponent = () => {
  return (
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
        <h1>Välkommen till Webblogopeden</h1>        
        <h2>Din logoped i hela Sverige</h2>
        <h3>Dyslexiutredningar och språkliga utredningar online i privat regi</h3>
        <h3>Korta väntetider och en personlig vårdupplevelse</h3>
      </div>  
  
</div>

  );
};

export default HomePageComponent;
