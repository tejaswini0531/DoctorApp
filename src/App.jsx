// import { useState } from "react"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import './components/styles.css'
import Addnewdoctor from "./components/Addnewdoctor"
import { Route, Routes } from "react-router-dom"

function App(){
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<section/>}/>
      <Route path='/add-doctor' element={<Addnewdoctor/>}/>
    </Routes>
   </div>
  )
}
export default App