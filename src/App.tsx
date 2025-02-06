
// import './App.css'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'


function App() {

  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/#/about' element={<Aboutus/>}></Route>
   <Route path='/#/contact' element={<Contact/>}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App
