import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SecondNavbar from './Component/SecondNavbar'
import DetailsSection from './Component/DetailsSection'
import AboutTechExpo from './Component/AboutTechExpo'
import VenueInfo from './Component/VenueInfo'


const App = () => {
  const [isStrue, setisStrue] = useState(false)
  return (
    <>
    <Navbar  setisStrue={setisStrue} isStrue={isStrue} />
    <SecondNavbar isStrue={isStrue} />
    <DetailsSection/>
    <AboutTechExpo/>
    <VenueInfo/>
    </>
  )
}

export default App