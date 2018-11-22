import React from 'react'
import ReactDOM from 'react-dom'

import './style/App.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

// dva igrača
// (dodajte mogućnost nekakvog odabira nicka, eventualno ga zabilježite ga
// kao dugotrajni cookie ili napravite punu autentikaciju pomoću nekog plugina).
// Onda možete lako dodati i statistike/rang liste za igrače na serverskoj strani
// opcije prije početka igre, odigravanje, prikaz statistike
// Play on the same computer i Invite Your friend.
// lobby - stolovi, igrac moze odabrat stol.
// prekinit igru nakon odredenog timeouta
