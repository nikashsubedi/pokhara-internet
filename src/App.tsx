
// import './App.css'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import RegistrationForm from './components/RegistrationForm'


function App() {

  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/about' element={<Aboutus/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/Navbar' element={<Navbar/> }></Route>
   <Route path='/register' element={<Register/>}></Route>
   <Route path='/registrationform' element={<RegistrationForm/>}></Route>
   

   </Routes>
   </BrowserRouter>
  )
}

export default App
