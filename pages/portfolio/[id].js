import React from "react";
import technoshop from "../../public/assets/portfolio/technoshop.jpg";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import Image from "next/image";
import academique from "../../public/assets/portfolio/academique.jpg";
import weather from '../../public/assets/portfolio/weather.jpg'
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import { FormattedMessage } from 'react-intl'

const portfolios = [
  {
    id: 1,
    title: "Technoshop-Websit",
    imageSrc: technoshop,
    url: "Technoshop-Websit",
    src:"https://technoshopp.netlify.app/",
    git:"https://github.com/Riadbns/Technoshop",
    projet_description:"projet1_description",
    projet_realise:"projet1_realise"

    
  },
  {
    id: 2,
    title: "Weather App",
    imageSrc: weather,
    url: "Weather-Websit",
    src:"https://newweather-app-xi.vercel.app/",
    git:"https://github.com/Riadbns/NewweatherApp",
    projet_description:"projet3_description",
    projet_realise:"projet3_realise"
  },
  {
    id: 3,
    title: "Academic Portfolio",
    imageSrc: academique,
    url: "Academic-Portfolio",
    src:"https://academicportfolio.vercel.app/",
    git:"https://github.com/Riadbns/Academicportfolio",
    projet_description:"projet2_description",
    projet_realise:"projet2_realise"
  }
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc, src,git,projet_description,projet_realise} }) => {


  return (
    <div className="h-fit w-full text-center ">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col  ">
        <div className="flex">
          <Link href="/#portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> <FormattedMessage id="back"/>
            </div>
          </Link>
        </div>
        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>

         <div className="relative w-full h-[10rem]  md:h-[20rem] mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div> 

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          <FormattedMessage id="desciption"/>
        </h2>

        <p className="text-left">
        <FormattedMessage id={`${projet_description}`}/>
        </p>
        <p className="text-left">
        <FormattedMessage id={`${projet_realise}`}/>
        </p>
        <div className="flex flex-col items-center justify-center md:flex-row gap-10 mt-10">
          <a href={src} target="blank">
            <div className="group flex items-center justify-center my-2 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Live preview
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </a>

          <a href={git} target="blank">
            <div className="group flex items-center justify-center my-2 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Code source
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
