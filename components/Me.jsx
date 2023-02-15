import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="pt-4 text-3xl md:text-4xl tracking-wider uppercase text-blue-500 font-bold">
          About
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            I am a passionate and determined web developer, holding a bachelor&apos;s degree in computer science from the university. I am currently in the final stages of my education at Cité College to fulfill my goal of becoming a successful web developer.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            My interest in emerging technologies and fascination with how they can improve people&apos;s lives motivated me to specialize in computer programming. I am strongly convinced that my passion and determination will allow me to achieve my professional goals.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            I am particularly passionate about front-end development and creating appealing and interactive user interfaces. I am always looking for new challenges and technologies to enhance my skills and create modern and performant web applications. My expertise and ability to work in a team make me an ideal candidate for any organization in the computer field. I am ready to bring my knowledge, commitment, and dedication to any project I work on.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Link legacyBehavior href="/resume" >
            <a className="group flex items-center justify-center my-2 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </a>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-2 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              projects
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
