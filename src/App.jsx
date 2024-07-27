import { useState } from "react";
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
const App = () => {
  const [displays, setDisplays] = useState([true, true, true, true, true])
  const [name, setName] = useState('All Products')
  const [resetNow, setResetNow] = useState(false)
  const [contactus, setContact] = useState(false)

  const all = () => {
    setDisplays([true, true, true, true, true])
    setName('All Products')
    setResetNow(false)
    setContact(false)
  }
  const one = () => {
    setDisplays([true, false, false, false, false])
    setName('Dogs')
    setResetNow(false)
    setContact(false)
    
}
const two = () => {
  setDisplays([false, true, false, false, false])
  setName('Cats')
  setResetNow(false)
  setContact(false)
}
const three = () => {
  setDisplays([false, false, true, false, false])
  setName('Birds')
  setResetNow(false)
  setContact(false)
}
const four = () => {
  setDisplays([false, false, false, true, false])
  setName('Aquatics')
  setResetNow(false)
  setContact(false)
}
const five = () => {
  setDisplays([false, false, false, false, true])
  setName('Bunnies')
  setResetNow(false)
  setContact(false)
}
  return (
    <>
      <Header />
      <Nav setDisplays={setDisplays} displays={displays} contactus={contactus} setContact={setContact} name={name} setName={setName} setResetNow={setResetNow} resetNow={resetNow} />
      <Body setDisplays={setDisplays} displays={displays} all={all} one={one} two={two} three={three} four={four} five={five} />
      <Footer />
    </>
  )
}

export default App