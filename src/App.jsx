import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/images/logo.jpg";
import axios from "axios";

function App() {


  return (
    <div className=" w-screen h-screen items-center justify-center flex">
      <div className=" flex gap-4 items-center animate__animated animate__bounceInDown">
        <img
          src={Logo}
          className=" h-24 rounded-full  object-contain"
          alt=""
        />
        <h1>Hello ProgVar</h1>
      </div>
    </div>
  );
}

export default App;
