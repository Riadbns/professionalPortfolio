import React from "react";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import style from "../styles/name.module.css"

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center flex items-center">
      <div className="max-w-screen-xl mx-auto w-full h-[30rem] pt-24 p-4 flex flex-col justify-evenly items-center">
      
        <div className='flex flex-col md:flex-row'>
                  <h1 className={style.prenom}>Riad.</h1> 
                  <h1 className={style.name} data-text="Benosmane">Benosmane</h1>
        </div> 
        <h2 className="uppercase font-bold text-gray-700 text-3xl">
          Front End developer
        </h2>

        <p className="text-gray-600 text-xl max-w-xl mx-auto">
        Designing intuitive and state-of-the-art user interfaces with my expertise in front-end development.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

// "Je suis un développeur web passionné et expérimenté, ayant obtenu mon diplôme de bachelor en programmation informatique de l'université. J'ai commencé mes études en tant qu'étudiant à la Cité College, où j'ai acquis une solide base de connaissances dans le domaine de la programmation informatique. Mon intérêt pour le développement web est né de ma fascination pour les technologies émergentes et pour la manière dont elles peuvent être utilisées pour améliorer la vie des gens. Je suis fier de mes accomplissements académiques et professionnels jusqu'à présent et je suis impatient de poursuivre ma carrière en tant que développeur web accompli."




// Riad Benosmane
// je suis trj au college la cité j'ai pas encore terminé mes étude
// Bien sûr, je comprends. Voici une mise à jour du paragraphe:

// "Je suis un étudiant passionné de programmation informatique et de développement web en train de poursuivre mes études à la Cité College. J'ai choisi de me spécialiser en programmation informatique car je suis fasciné par les technologies émergentes et la manière dont elles peuvent améliorer la vie des gens. Mon objectif est de devenir un développeur web accompli en continuant de développer mes compétences et en poursuivant ma formation académique. Je suis déterminé à atteindre mes objectifs professionnels et je suis convaincu que ma passion et ma détermination me permettront de les réaliser."