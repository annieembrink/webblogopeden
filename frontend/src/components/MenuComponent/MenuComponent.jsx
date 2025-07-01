import "./MenuComponent.css"
const MenuComponent = ({ setActivePage, open, setOpen }) => {
    return ( 
        <div>
        <div id="menuBar" className={open ? "open" : "closed"}>
            
          <button onClick={() => {
            setActivePage("Hem");
            setOpen(!open);
          }}>Hem</button>
      
          <button onClick={() => {
            setActivePage("Om");
            setOpen(!open);
          }}>Om mig</button>
      
          <button onClick={() => {
            setActivePage("Digital vård");
            setOpen(!open);
          }}>Digital vård</button>
      
          <button onClick={() => {
            setActivePage("Tjänster");
            setOpen(!open);
          }}>Tjänster</button>
      
          <button onClick={() => {
            setActivePage("Priser");
            setOpen(!open);
          }}>Priser</button>
      
          <button onClick={() => {
            setActivePage("Kontakt");
            setOpen(!open);
          }}>Kontakt & bokning</button>
        </div>
      </div>
      
    );
}

export default MenuComponent;
