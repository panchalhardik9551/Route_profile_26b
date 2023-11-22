import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
// import User from './User'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Hardik from './Hardik'
import Pavan from './Pavan'
import Darshan from './Darshan'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/profile/hardik' element={<Hardik />}/>
          <Route path='/profile/pavan' element={<Pavan />}/>
          <Route path='/profile/darshan' element={<Darshan />}/>
          {/* <Route path='/profile/:name/' element={<User />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
