import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

import React from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const timelines = [
    {
      date: "April 2022 -July 2022",
      Title: "Frontend Developer",
      Company: "Apriori Education Solutio",
    },
    {
      date: "April 2022 -July 2022",
      Title: "React Developer",
      Company: "The Tann Mann Gaadi",
    },
    {
      date: "March 2023-June 2023",
      Title: "Web Development",
      Company: "Bhaktivedanta institute",
    },
    {
      date: "May 2023-September 2023",
      Title: "Teaching Assistant",
      Company: "Coding Ninjas",
    },
  ];
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline timelines={timelines} />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
