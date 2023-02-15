import React from "react";
import technoshop from "../../public/assets/portfolio/technoshop.jpg";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import Image from "next/image";
import academique from "../../public/assets/portfolio/academique.jpg";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
const portfolios = [
  {
    id: 1,
    title: "Technoshop Websit",
    imageSrc: technoshop,
    url: "Technoshop-Websit",
    src:"https://technoshopp.netlify.app/",
    git:"https://github.com/Riadbns/Technoshop",
    projet_description:"Featuring an intuitive and engaging user experience, this e-commerce site showcases front-end development skills. Designed with CSS, HTML, JavaScript and React JS technologies, this site offers smooth navigation and attractive product presentation, allowing users to easily find what they are looking for.",
    projet_realise:"This project was carried out in collaboration by me and two other people as part of our academic studies."

    
  },
  {
    id: 2,
    title: "Academic Portfolio",
    imageSrc: academique,
    url: "Academic-Portfolio",
    src:"https://academicportfolio.vercel.app/",
    git:"https://github.com/Riadbns/Academicportfolio",
    projet_description:"I created an academic portfolio that shows my projects using HTML, CSS, JavaScript, Next Js and Tailwind. I wanted to use the most modern technologies to build an elegant and easy to navigate website, and I chose to use Tailwind to give my site a professional and modern look. Moreover, I have designed my website with a responsive design, which means that it automatically adapts to the size of the user's screen to provide an optimal user experience on any type of device, whether it is either on desktop, tablet or smartphone.",
    projet_realise:""
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
              <BiChevronLeft size={25} /> back
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
          Description
        </h2>

        <p className="text-left">
          {projet_description}
        </p>
        <p className="text-left">
         {projet_realise}
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
