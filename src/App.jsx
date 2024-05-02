import NavBar from "./componets/NavBar";
    import Home from "./componets/Home";
    import SocialLinks from "./componets/SocialLinks";
    import About from './componets/About';
    import Portfolio from './componets/Porfolio';
    import Experience from "./componets/Experience";
    import Contact from "./componets/Contact";
    import Footer from "./componets/Footer";



function App() {
  
  return (
    <div>
     <NavBar/>
     <Home />
     <SocialLinks/>
     <About/>
     <Portfolio/>
     <Experience />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
