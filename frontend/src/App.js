import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HomePage from './pages/HomePage/HomePage';
import ContactForm from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PricesPage from './pages/PricesPage/PricesPage';
import DigitalCarePage from './pages/DigitalCarePage/DigitalCarePage';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/digitalcare" element={<DigitalCarePage />} />
      </Routes>
      <FooterComponent/>
      </>
  );
}

export default App;
