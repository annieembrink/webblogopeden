import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomePageComponent from './pages/HomePageComponent/HomePageComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <HomePageComponent/>
    </div>
  );
}

export default App;
