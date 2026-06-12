import { useState } from "react";
import Home from "./Home";
import axios from "axios";
import { DoctorContext } from "./DoctorProvider.jsx";
import { useContext } from "react";
function Addnewdoctor() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [specialization, setSpecialization] = useState("");
  // let [newdoctor, setNewdoctor] = useState(null);
  let {setNewdoctor}=useContext(DoctorContext)

  async function handlesubmit(e) {
    e.preventDefault();
    let formdata = {
      name,
      age,
      gender,
      salary,
      specialization,
      id: Date.now(),
    };
    await axios.post("https://doc-back.onrender.com/doctors", formdata);
    alert("Doctor Added Successfully");

    setNewdoctor(formdata);
  }

  // async function deletedata(id){
  //   await axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
  //   alert('doctor deleted')
  //   setNewdoctor('deleted'+ id);
  // }

  // async function updatedata(id){
  //   let data={
  //   name: "Manohar",
  //   age: "57",
  //   gender: "Male",
  //   salary: "8900000",
  //   specialization: "Surgeon",
  //   id: Date.now()
  //   }
  //   await axios.put(`https://doc-back.onrender.com/doctors/${id}`,data)
  //   alert('updated')
  //       setNewdoctor('updaated'+ id);
  // }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add New Doctor</h1>
      <form action="" className="form-container" onSubmit={handlesubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Doctor Name"
          className="text-field"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Enter Age"
          className="text-field"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          name=""
          id=""
        >
          <option>Select Gender</option>
          <option value="Male"> Male</option>
          <option value="Female"> Female</option>
        </select>

        <input
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          type="text"
          placeholder="Enter Specialization"
          className="text-field"
        />
        <input
          value={salary}
          type="text"
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter Salary"
          className="text-field"
        />
        <button type="submit"> Add Doctor</button>
      </form>
      <Home  />
      {/* <Home newdoctor={newdoctor} ondel={deletedata} upd={updatedata} /> */}
    </div>
  );
}

export default Addnewdoctor;