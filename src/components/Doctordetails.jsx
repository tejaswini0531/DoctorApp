import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
function Doctordetails() {
    let {id}=useParams()
    let[doctor,setDoctor] =useState([])
    
    function fetchdata(){
        let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },

            {
        id: 4,
        name: "Tejaswini",
        age: 25,
        gender: "Female",
        specialization: "Bones",
        salary: 5000000,
      },

      {
        id: 5,
        name: "Saila",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 6000000,
      },


    ];

    let doc=data.find((val)=> val.id==id)
    setDoctor(doc)

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
        <h3>G: {doctor.gender}</h3>   
        <h3>Age: {doctor.age}</h3>
        <h3>Salary: {doctor.salary}</h3>
    </div>
    )
}

export default Doctordetails