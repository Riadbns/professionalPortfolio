import React from "react";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import style from "../styles/name.module.css"
import { FormattedMessage } from 'react-intl'

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center flex items-center">
      <div className={"max-w-screen-xl mx-auto w-full h-[30rem] pt-24 p-4 flex flex-col justify-evenly items-center" }>
      
        <div className='flex flex-col md:flex-row'>
                  <h1 className={style.prenom}>Riad.</h1> 
                  <h1 className={style.name} data-text="Benosmane">Benosmane</h1>
        </div> 
        <h2 className="uppercase font-bold text-gray-700 text-2xl">
        <FormattedMessage id="title"/>
        </h2>

        <p className="text-gray-600 text-xl max-w-xl mx-auto">
        <FormattedMessage id="description"/>
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          
          <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
          <FormattedMessage id="button_1"/>
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
          </Link>
          
          <Link legacyBehavior href="/resume" >
            <a className="group flex items-center justify-center my-2 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </a>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;

