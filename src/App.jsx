import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Subscibers from "./components/Subscribers/Subscibers";
import Travelers from "./components/Travelers/Travelers";
import Lounge from "./components/Lounge/Lounge";
import Info from "./components/Info/Info";
import Support from "./components/Support/Support";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscibers />
      <Footer />
    </>
  );
};

export default App;
