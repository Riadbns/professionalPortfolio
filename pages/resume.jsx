import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
       

      <div className='max-w-[940px] mx-auto p-2 pt-[60px] border-4'>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <div className='flex flex-col justify-start'>
            <h1 className='font-bold'>RIAD BENOSMANE</h1>
            <p className=''>Ottawa, ON</p>
         </div>
          
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/riad-benosmane/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Riadbns'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            Front End Developer <span className='px-1'>|</span> Web Development{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Front End Developer</p>
            <p className='py-2'>Web Development</p>
          </div>
        </div>
        <p>
        As a highly skilled and motivated computer programmer, I have a solid foundation in web development 
        and databases, and an in-depth knowledge of programming languages like Java, C#, JavaScript, and CSS. My 
        experience includes the ability to develop web applications that meet user needs, adhere to quality and security 
        standards, and utilize popular frameworks such as React, Next.js, Node.js, Maintain UI, Bootstrap, Handlebars 
        and Chakra UI. I have completed my bachelor&apos;s degree from Université Djilali Liabes and currently in my final 
        year at College La Cite where I am gaining hands-on experience in the field. I am always eager to take on new 
        challenges and learn new technologies, and I am comfortable working in a team environment. My skills and 
        qualifications make me an ideal candidate for any organization in the field of IT.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>HTML5
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript(ES6+)
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL SERVER
            <span className='px-2'>|</span>SQLITE
            <span className='px-2'>|</span>Bootstrap 5
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>Node Js 
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education 
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='py-1 italic'><span className='font-bold'>Ontario College Diploma</span> : Computer programming  (2021/09 - 2023/04)</p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'>La Cité Collegiale, Ontario, Canada</p>
            
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='py-1 italic'> <span className='font-bold'>Bachelor of Science</span>: computer science (2018/09 - 2021/06)</p>
          <a className='list-disc list-outside px-7 py-1 leading-relaxed'>Djilali Liabes University, sidi bel abbes, Algeria</a>
            
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
            SUMMARY OFQUALIFICATIONS
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Experience in web development utilizing technologies such as JavaScript (ES2015 / ES6+),  ReactJS 16.8+ (comfortable with hooks),Next.js, Node.js, Material UI,Tailwind, Handlebars, and Chakra UI..
            </li>
            <li>
            Strong knowledge of Bootstrap 5 and responsive web design
            </li>
            <li>
            Expertise in HTML/HTML5 and CSS/CSS3
            </li>
            <li>
            Familiar with the basic principles of Web Content Accessibility Guidelines (WCAG)
            </li>
            <li>
            Familiar with scss
            </li>
            <li>
            Familiar with Android and iOS development
            </li>
            <li>
            Experience in designing for multiple contexts such as mobile, desktop, tablet
            </li>
            <li>
            Good knowledge of programming languages including Java, C#, C, C++, and Python.
            </li>
            <li>
            Strong knowledge of database management systems such as Access, SQL Server, MongoDB, Cassandra, and SQLite.
            </li>
            <li>
            Understanding of object-oriented programming principles using Java and C#.
            </li>
            <li>
            desktop and mobile application development.
            </li>
            <li>
            Contribute to the processes, practices and activities of software quality assurance and software improvement according to the standards and models in force
            </li>
            <li>
            Familiarity with API platforms and Linux commands.
            </li>
            <li>
            Good understanding of algorithms and data structures
            </li>
            <li>
            Knowledge of Interconnecting Cisco Networking Devices, Part 1 through training and coursework
            </li>
            <li>
            Strong teamwork, problem-solving, and attention to detail skills.
            </li>
            <li>
            Positive attitude and ability to learn quickly and excellent collaboration skills.
            </li>
            <li>
            Strong ability to work independently and a commitment to continuing professional development.
            </li>
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
            Professional Certifications
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Introduction to Front-End Development
            </li>
            <li>
            Programming with JavaScript
            </li>
            <li>
            HTML and CSS in depth
            </li>
            <li>
            Version Control
            </li>
            <li>
            React Basics
            </li>
            <li>
            Advanced React
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
