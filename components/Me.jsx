import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { useTheme } from "../components/ThemeProvider";
import { FormattedMessage } from 'react-intl'

const Me = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="pt-4 text-3xl md:text-4xl tracking-wider uppercase text-blue-500 dark:text-red-300 font-bold">
        <FormattedMessage id="p_0"/>
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
          <FormattedMessage id="p_1"/>
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          <FormattedMessage id="p_2"/>          
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
            <FormattedMessage id="Nav_1"/>
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
