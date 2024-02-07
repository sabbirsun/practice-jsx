import React from 'react'
import Contact from './Contact'
//const AboutMe = "My name is Sabbir. I am a programmer.";

function Home() {
  return (
    <div>
       {/* <h1>{AboutMe}</h1> */}
       {/* <h1>{2*10}</h1> */}
       <Contact name="Sabbir" number="0184548454684"/>
       <Contact name="Sun" number="018445454684"/>
       <Contact name="Islam" number="0412145454684"/>
    </div>
  )
}

export default Home