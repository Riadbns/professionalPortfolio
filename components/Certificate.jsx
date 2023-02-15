import React from 'react'
import style from '../styles/card.module.css'
const Certificate = () => {
    const portfolios = [
        {
          id: 1,
          title: "Advanced React",
          url: "https://www.coursera.org/account/accomplishments/certificate/6X986QG52RKC",
        },
        {
          id: 2,
          title: "HTML and CSS in depth",
          url: "https://www.coursera.org/account/accomplishments/certificate/3E5NYCTCNPCM",
        },
        {
          id: 3,
          title: "Introduction to Front-End Development",
          url: "https://www.coursera.org/account/accomplishments/certificate/BMLEHZLD5GPC",
        },
        {
          id: 4,
          title: "Programming with JavaScript",
          url: "https://www.coursera.org/account/accomplishments/certificate/ASZYLRQX6GMA",
       },
       ,
        {
          id: 5,
          title: "React Basics",
          url: "https://www.coursera.org/account/accomplishments/certificate/LSHKA95FAUAT",
       }
       ,
        {
          id: 6,
          title: "Version Control",
          url: "https://www.coursera.org/account/accomplishments/certificate/C3WQCD4CZZDC",
       }
       ];
  return (
    <div id="certaficate" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
            <h2 className="pt-4 text-2xl md:text-4xl tracking-wider uppercase text-blue-500 font-bold">
            certafications
            </h2>
            <div className={style.cards}>
          {portfolios.map(({ id, title, url }) => ( 
                <div key={id} className={style.card}>
                    <div className={style.cardicon}><i className="fas fa-bolt"></i></div>
                    <p className={style.cardexit}><i className="fas fa-times"></i></p>
                    <h2 className={style.cardtitle}>{title}</h2>
                    <p className={style.cardapply}>
                        <a  className={style.cardlink} href={url} target="_blank" rel="noreferrer">See more <i className="fas fa-arrow-right"></i></a>
                    </p>
                </div>
             ))} 
            </div>
        </div>
    </div>
  )
}

export default Certificate