import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";
import Services from "./components/Services";
import OurClients from "./components/OurClients";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          background: "#FF5D5D",
          textAlign: "center",
          height: "fit-contant",
          padding: "1rem",
          color: "#fff",
          fontWeight: "bolder",
        }}
      >
        Under Construction
      </div>
      <Hero />
      <WhatWeDo />
      <Services />
      <OurClients />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
