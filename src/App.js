import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import ScrollUp from './components/scrollup/ScrollUp';
import Experience from './components/experience/Experience';
function App() {
  return (
    <>
    <Header/>
    <main className='main'>
    <Home/>
    <About />
    <Skills/>
    <Experience />
    <Services/>
    <Portfolio/>
    <Contact/>
    <Toaster/>
    </main>
    <Footer/>
    <ScrollUp />
    </>
  );
}

export default App;
