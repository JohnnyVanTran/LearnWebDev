import React from 'react';
import profile from '../resources/profile2.png'
import '../styles/About.css';

export default function About() {

  return (
    <div>
        <img src={profile}/>
        <h1>Johnny V. Tran</h1>
        <h2> Litt om meg!</h2>
        <p> Mitt navn er Johnny, og jeg er en 20 år gammel gutt! </p>
        <h2> Studie </h2>
        <p>Jeg går en sammensatt bachelor i informatikk,
            med hovedfokus på programmering og systemarkitektur</p>
    </div>
  )
}