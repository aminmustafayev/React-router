import { Link } from "react-router-dom"


const CountryDetail = () => {
  return (
  <>
  <button style={{padding:"15px", color:"White", backgroundColor:"red", margin:"20px"}}>
    <Link to={'/countries'}>Go Back</Link>
  </button>
  </>
  )
}

export default CountryDetail