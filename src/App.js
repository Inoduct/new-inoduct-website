import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";
import Services from "./components/Services";
import OurClients from "./components/OurClients";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <OurClients />
      <Footer />
    </div>
  );
}

export default App;
