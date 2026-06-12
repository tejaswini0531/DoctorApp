import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateDoctor() {

  const { id } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");
  const [specialization, setSpecialization] = useState("");


  async function fetchDoctor() {
    const res = await axios.get(
      `https://doc-back.onrender.com/doctors/${id}`);

    const doctor = res.data;

    setName(doctor.name);
    setAge(doctor.age);
    setGender(doctor.gender);
    setSalary(doctor.salary);
    setSpecialization(doctor.specialization);
  }

    useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchDoctor();
  }, [id]);


  async function handleUpdate(e) {
    e.preventDefault();

    const updatedDoctor = {
      id,
      name,
      age,
      gender,
      salary,
      specialization,
    };

    await axios.put(
      `https://doc-back.onrender.com/doctors/${id}`,
      updatedDoctor
    );

    alert("Doctor Updated Successfully");
  }

  return (
    <div>
      <h1>Update Doctor</h1>

      <form onSubmit={handleUpdate} className="form-container">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Doctor Name"
          className="text-field"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Age"
          className="text-field"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          type="text"
          placeholder="Specialization"
          className="text-field"
        />

        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type="text"
          placeholder="Salary"
          className="text-field"
        />

        <button type="submit">
          Update Doctor
        </button>

      </form>
    </div>
  );
}

export default UpdateDoctor;