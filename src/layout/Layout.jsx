import React from "react";
import Routers from "../routers/Routers";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import AnimationRevealPage from "./AnimationRevealPage";

const Layout = () => {
  return (
    <AnimationRevealPage>
      <NavBar />
      <Routers />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Layout;
