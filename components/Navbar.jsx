import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "../styles/toggle.module.css"
import styles from "../styles/switcher.module.css"
import { useTheme } from "./ThemeProvider";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useLocale } from './LocaleProvider'
import { FormattedMessage } from 'react-intl'
const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);
  const [theme, setTheme] = useTheme();

  const handleThemeChange = (event) => {
    setTheme(event.target.checked ? 'dark' : 'light')
  }
  
  const [locale, setLocale] = useLocale();
    const handleLocaleChange = (event) => {
      setLocale(event.target.checked ? 'fr' : 'en')
    }

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
      value: <FormattedMessage id="Nav"/>,
    },
    {
      id: 2,
      link: "portfolio",
      value:<FormattedMessage id="Nav_1"/>,
    },
    {
      id: 3,
      link: "experience",
      value: <FormattedMessage id="Nav_2"/>,
    },
    {
      id: 4,
      link: "certaficate",
      value: <FormattedMessage id="Nav_3"/>,
    },
    {
      id: 5,
      link: "me",
      value: <FormattedMessage id="Nav_4"/>,
    },
    {
      id: 6,
      link: "contact",
      value: <FormattedMessage id="Nav_5"/>,
    },
  ];

  return (
    <div
    id='navbarCheck'
      className={`w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in ${
        pageScroll && "bg-black text-[#fff]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        
           
        <Link href="/#home">
          <h1  className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
            RB
          </h1>
        </Link>
        {/* {!navigation && (
        <label className={style.switch}>
          <span className={style.sun}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
          <span className={style.moon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
          <input 
            type="checkbox" 
            className={style.input}
            checked={theme === 'dark'}
            onChange={handleThemeChange}/>
          <span className={style.slider}></span>
        </label>)} */}

        <div>
          <ul className="hidden md:flex md:items-end">
            {links.map(({ id, link,value }) => (
              <Link key={id} href={`/#${link}`}>
                <li  className="ml-10 text-sm lowercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {value}
                </li>
              </Link>
            ))}
            <li className="flex items-end ml-10 text-sm lowercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
            
              <div className={styles.switch}>
                <input 
                  id="language-toggle" 
                  className={`${styles.checktoggle} ${styles.checktoggleroundflat}`} 
                  type="checkbox"
                  checked={locale === 'fr'}
                  onChange={handleLocaleChange}
                  />
                <label htmlFor="language-toggle"></label>
                <span className={styles.on}>EN</span>
                <span className={styles.off}>FR</span>
              </div>
            </li>
          </ul>
             
          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer"
                >
                  RB
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link,value }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {value}
                  </li>
                </Link>
              ))}
              <li className=" tracking-wider cursor-pointer">
              <div className={styles.switch}>
                <input 
                  id="language-toggle" 
                  className={`${styles.checktoggle} ${styles.checktoggleroundflat}`} 
                  type="checkbox"
                  checked={locale === 'fr'}
                  onChange={handleLocaleChange}
                  />
                <label htmlFor="language-toggle"></label>
                <span className={styles.on}>EN</span>
                <span className={styles.off}>FR</span>
              </div>
              </li>
            </ul>
               
            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <a href="https://www.linkedin.com/in/riad-benosmane/" target="blank">
                  <FaLinkedin size={25} />
                  </a>
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <a href="https://github.com/Riadbns" target="blank">
                    <FaGithub size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
