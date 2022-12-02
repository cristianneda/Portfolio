import React from "react";


const NavBar = () => {
  return (
    <nav class="relative w-full  bg-gray-900 bg-opacity-80  text-sky-500   ">
      <div class=" flex flex-row content-center justify-between p-2 ">
        <img
          class="rounded-lg max-h-28 hover:scale-125  p-2"
          src="https://neda-node-weather-app.herokuapp.com/img/portret.jpg"
          alt=""
          onClick={() =>
            window.open(
              "https://neda-node-weather-app.herokuapp.com/img/portret.jpg",
              "_blank"
            )
          }
        ></img>
        <a class=" hover:text-white " href="https://neda-node-weather-app.herokuapp.com/">Weather</a>
        <a class=" hover:text-white " href="https://cristianneda.github.io/subscriber-gitlab/">Subscriber</a>
        <a class=" hover:text-white " href="https://cristianneda.github.io/Simple-Background-Generator/">Bg-Generator</a>
        <a class=" hover:text-white " href="https://cristianneda.github.io/redux/">Todo</a>
      </div>
    </nav>
  );
};

export default NavBar;
