import './App.css';
import { BrowserRouter ,Link,Routes,Route } from 'react-router-dom';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import HomePage from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/about" element={<AboutPage />} />
        <Route  path="/contact" element={<ContactPage />} />
    </Routes>
    <Link to="/">Home</Link> <br />
    <Link to="/about">About</Link><br />
    <Link to="/contact">Contact</Link><br />
    </BrowserRouter>
  );
}

export default App;
