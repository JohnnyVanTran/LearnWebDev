import React from 'react';
import VMstyrke from '../resources/VM_stykeloft.png'
import '../styles/Hobby.css'

export default function Hobby() {

  return (
    <div>
        <h1>Mine hobbyer!</h1>
        <p>Jeg har faktisk, tro det eller ei, hobbyer utenfor utviklingsverdenen! På fritiden liker jeg å fylle tiden min med aktivitet, venner og familie.
            Nedenfor ser dere et lite glimt av hva jeg bruker min fritid på, utenom skole og side prosjekter.
        </p>
        <div class="container">
            <img src={VMstyrke}/>
        </div>
    </div>
  )
}