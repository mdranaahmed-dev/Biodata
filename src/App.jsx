import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './component/BaioData'


const bioData = [
  {
   Name: "Setu",
   Email: "setu@gmail.com",
   phone: "0123000449",
   github: "gitHub",
   slill: ["JS", "WP", "CSS", "HTML"],
   intarest: ["CHASS", "BOOTBALL", "VOLIBOL"],
   socailLink :[{platfromName: "FB", handle: "Facrbook.com"}, {platfromName: "LN", handle: "linkden.com"}],
  },

  {
    Name: "Jakir",
    Email: "jaki@gmail.com",
    phone: "0123000449",
    github: "gitHub",
    slill: ["JS", "WP", "CSS", "HTML"],
    intarest: ["CHASS", "BOOTBALL", "VOLIBOL"],
    socailLink :[{platfromName: "FB", handle: "Facrbook.com"}, {platfromName: "LN", handle: "linkden.com"}],
   },
];
function App() {
  const [count, setCount] = useState(0)

  return (


    <div id="app">
      <>
      
      {bioData.map((singleBioData) => {
         <BioData

         key = {singleBioData.name}

         name={singleBioData.name}
         Email={singleBioData.Email}
         phone={singleBioData.phone}
         github={singleBioData.github}
         skill={singleBioData.slill}
         intarest={singleBioData.intarest}
         socailLink={singleBioData.socailLink}
       
       />
      })}
    </>
    </div>
  )
}

export default App
