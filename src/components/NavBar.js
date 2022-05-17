import React from "react";
import ProjectsButton from "./ProjectsButton";

const NavBar = () => {
  return (
    <nav class="relative w-full  bg-gray-900 bg-opacity-80 text-sky-500 hover:text-sky-700 focus:text-sky-700 drop-shadow lg  ">
      <div class=" flex flex-row justify-between">
        <div class=" w-full flex p-2 self-center">
          <ProjectsButton />
        </div>
        <div class="">
          <img
            class="rounded-lg hover:scale-125 w-16 p-2"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEMK24AfqWmnw/profile-displayphoto-shrink_800_800/0/1651284928395?e=1657756800&v=beta&t=VZpp3KybiYtvidK6acfz2FduYAXvqK3fiy22BLltsF8"
            alt=""
          ></img>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
