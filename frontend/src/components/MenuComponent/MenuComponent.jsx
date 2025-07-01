import { Link } from "react-router-dom";
import "./MenuComponent.css";

const MenuComponent = ({ open, setOpen }) => {
  const links = [
    { label: "Hem", path: "/" },
    { label: "Om", path: "/about" },
    { label: "Digital vård", path: "/digitalcare" },
    { label: "Tjänster", path: "/services" },
    { label: "Priser", path: "/prices" },
    { label: "Kontakt", path: "/contact" },
  ];

  return (
    <div>
      <div id="menuBar" className={open ? "open" : "closed"}>
        {links.map(({ label, path }) => (
          <Link 
            key={label} 
            to={path} 
            onClick={() => setOpen(false)} 
            className="menuLink"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
