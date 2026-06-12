import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios" 

function Doctordetails() {
    let {id}=useParams()
    let[doctor,setDoctor] =useState([])
    
    async function fetchdata(){
      try{

    let apidata= await axios.get('https://doc-back.onrender.com/doctors')
    let data = apidata.data;
    let doc=data.find((val)=> val.id==id)
    setDoctor(doc)

    } catch (err) {
      console.log(err);
      }
    }
    useEffect(()=>{
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchdata()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className="doctor-details">
        <h1>DOCTOR DETAILS</h1>
        <h2>Name: Dr. {doctor.name}</h2>
        <h3>Specialization: {doctor.specialization}</h3>
        <h3>Gender: {doctor.gender}</h3>   
        <h3>Age: {doctor.age}</h3>
        <h3>Salary: {doctor.salary}</h3>
    </div>
    )
}

export default Doctordetails