import React from "react";
import academique from "../public/assets/portfolio/academique.jpg";
import technoshop from "../public/assets/portfolio/technoshop.jpg";
import weather from '../public/assets/portfolio/weatherApp.jpg'
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from 'react-intl'

  const portfolios = [
    {
      id: 1,
      title: "Technoshop Websit",
      imageSrc: technoshop,
      url: "Technoshop-Websit",
    },
    {
      id: 2,
      title: "Weather App",
      imageSrc: weather,
      url: "Weather-Websit",
      
    
    },
    {
      id: 3,
      title: "Academic Portfolio",
      imageSrc: academique,
      url: "Academic-Portfolio",
    }
  ];
const Portfolio = () => {

  return (
    <div id="portfolio" className="w-full ">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="pt-4 text-3xl md:text-4xl tracking-wider uppercase text-blue-500 font-bold">
        <FormattedMessage id="Nav_1"/>
        </h2>
        <p className="py-4 max-w-lg">
        <FormattedMessage id="portfolio"/>
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div  className=" flex flex-col justify-between cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-2xl "> 
                <div >
                  <Image
                    src={imageSrc}
                    alt={title}
                    className="rounded-2xl duration-200 
                    hover:scale-110 "
                  />
                  </div> 
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
