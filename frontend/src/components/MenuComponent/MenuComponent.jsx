import "./MenuComponent.css";

const MenuComponent = ({ setActivePage, open, setOpen }) => {
  return (
    <div>
      <div id="menuBar" className={open ? "open" : "closed"}>
        {["Hem", "Om", "Digital vård", "Tjänster", "Priser", "Kontakt"].map((page) => (
          <button key={page} onClick={() => {
            setActivePage(page);
            setOpen(false);
          }}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
