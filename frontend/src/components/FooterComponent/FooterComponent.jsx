import "./FooterComponent.css"; 
import { FaRegCopyright } from "react-icons/fa";


const FooterComponent = () => {
    return ( <div className="Footer">
         <div id="footerImgContainer">
            <img
                src="/img/webblogopeden-high-resolution-logo-transparent.png"
                alt="Site Logo"
                className="logo"
            />
        </div>
        <div id="footerContact">
            <p>Farsta, Stockholm</p>
            <p>webblogopeden@gmail.com</p>
            <p><FaRegCopyright style={{ marginRight: "5px" }} />Copyright 2025, webblogopeden</p>
        </div>
    </div> );
}
 
export default FooterComponent;