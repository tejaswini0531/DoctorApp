import { useNavigate } from "react-router-dom"

function Navbar() {
  let navigate=useNavigate()
  return (
    <header>
        <h1>Doctor app</h1>
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/add-doctor')}>Home</button>

        </div>
    </header>
  )
}
export default Navbar


