import { useNavigate } from "react-router-dom"

function Navbar() {
  let navigate=useNavigate()
  return (
    <header>
        <h1>DOCTOR APP </h1>
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/add-doctor')}>Add New Doctor</button>

        </div>
    </header>
  )
}
export default Navbar


