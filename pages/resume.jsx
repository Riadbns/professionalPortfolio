import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl'

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
            <p>
            <FormattedMessage id="title"/>
            </p>
        </div>
        <h5 className='text-center underline text-[18px] py-4'>
          <FormattedMessage id="cv_1"/> : 
        </h5 >
        <p className='text-center'>
        <FormattedMessage id="cv_2"/>
        </p>

        <h5 className='text-center underline text-[18px] py-4'>
          <FormattedMessage id="cv_3"/> : 
        </h5 >
        <p>
        <FormattedMessage id="p_2"/>
        </p>
        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>        
            <FormattedMessage id="cv_4"/>
          </h5>
          <p className='py-2'>
            <span className='px-2'></span>Javascript(ES6+)
            <span className='px-2'>|</span>HTML5
            <span className='px-2'>|</span>CSS3
            <span className='px-2'>|</span>TypeScript
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>Prisma
            <span className='px-2'>|</span>SQL SERVER
            <span className='px-2'>|</span>SQLITE
            <span className='px-2'>|</span>PostgreSQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Bootstrap 5
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>ASP.Net
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        <FormattedMessage id="cv_5"/>
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='py-1 italic'><span className='font-bold'><FormattedMessage id="cv_6"/></span> : <FormattedMessage id="cv_7"/></p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'><FormattedMessage id="cv_8"/></p>
            
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='py-1 italic'><span className='font-bold'><FormattedMessage id="cv_9"/></span> : <FormattedMessage id="cv_10"/></p>
          <a className='list-disc list-outside px-7 py-1 leading-relaxed'><FormattedMessage id="cv_11"/></a>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'><FormattedMessage id="cv_12"/></p>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
            QUALIFICATIONS
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            <FormattedMessage id="qualification_1"/>            
            </li>
            <li>
            <FormattedMessage id="qualification_2"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_3"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_4"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_5"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_6"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_7"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_8"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_9"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_10"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_11"/>  
            </li>
            <li>
            <FormattedMessage id="qualification_12"/>  
            </li>
          </ul>
        </div>
        <h5 className='text-center underline text-[18px] py-4'>
          <FormattedMessage id="Experience_0"/>
        </h5>
        <div className='py-6'>
          <p className='py-1 italic'><span className='font-bold'><FormattedMessage id="Experience_5"/> </span></p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'><FormattedMessage id="Experience_6"/></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            <FormattedMessage id="Experience_1"/>
            </li>
            <li>
            <FormattedMessage id="Experience_2"/>
            </li>
            <li>
            <FormattedMessage id="Experience_3"/>
            </li>
            <li>
            <FormattedMessage id="Experience_4"/>
            </li>
          </ul>
        </div>  
        


        <h5 className='text-center underline text-[18px] py-4'>
        <FormattedMessage id="certfification"/>
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
