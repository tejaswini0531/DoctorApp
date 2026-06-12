import Navbar from "./components/Navbar"
import Section from "./components/Section"
import './components/styles.css'
import Addnewdoctor from "./components/Addnewdoctor"
import { Route, Routes } from "react-router-dom"
import Doctordetails from "./components/Doctordetails"
import Footer from "./components/Footer";
// import UpdateDoctor from "./components/UpdateDoctor";
import { useState } from "react"
import Protectedroute from "./components/Protectedroute"
import useCounter from "./components/useCounter"
import DoctorProvider from "./components/DoctorProvider.jsx"


function App(){
  const [islogin,setIslogin] = useState(false)
  const {count,increment,decrement}=useCounter()

  return (
   <div>
    <Navbar/>
    {count}
    <button onClick={increment}>inc</button>
    <button onClick={decrement}>dec</button>

    <button onClick={()=>setIslogin(true)}>click to login</button>
    <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/doctor/:id'element={<Doctordetails/>}/>
      <Route path='/add-doctor' element={<Protectedroute islogin={islogin}><DoctorProvider><Addnewdoctor/></DoctorProvider></Protectedroute>}/>
      <Route path='/doctor/:id'element={<Doctordetails/>}/>

      {/* <Route path="/update/:id" element={<UpdateDoctor />} /> */}
    </Routes>
    <Footer/>
   </div>
  )
}
export default App