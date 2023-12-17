import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SecondNavbar from './Component/SecondNavbar'
import DetailsSection from './Component/DetailsSection'
import AboutTechExpo from './Component/AboutTechExpo'
import VenueInfo from './Component/VenueInfo'
import Venue from './Component/Venue'
import ConferenceCenter from './Component/ConferenceCenter'
import SpeakerFace from './Component/SpeakerFace'
import Ticket from './Component/Ticket'
import TicketStandard from './Component/TicketStandard'


const App = () => {
  const [isStrue, setisStrue] = useState(false)
  return (
    <>
    <Navbar  setisStrue={setisStrue} isStrue={isStrue} />
    <SecondNavbar isStrue={isStrue} />
    <DetailsSection/>
    <AboutTechExpo/>
    <VenueInfo/>
    <Venue/>
    <ConferenceCenter/>
    <SpeakerFace/>
    <Ticket/>
    <TicketStandard/>
    </>
  )
}

export default App