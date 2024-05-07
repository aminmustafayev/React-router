import { func } from "prop-types"
import { useState } from "react"
import controller from "../../../API";
import { endpoints } from "../../../API/base";
import { Input } from 'antd';
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { TextArea } = Input;


const AddCountry = ({ }) => {
  const [newCountry, setNewCountry] = useState({
    name: "", population: "", capital: '', description: '', flagImg: ''
  })
  function handleSubmit(e) {
    e.preventDefault();
    controller.post(endpoints.countries, newCountry);
    setNewCountry((currentCountry) => {
      return [...currentCountry, newCountry]
    })
    setTimeout(() => {
      navigate("/admin/countries");
    }, 1500);
    toast.success("new country added!", {
      autoClose: 1500,
    });
    setNewCountry({
      name: "",
      population: "",
      description: "",
      capital: "",
      flagImg: "",
    });
  }

  return (
    <>
      <form
      onSubmit={(e)=>handleSubmit(e)}
      style={{width:"80%", margin:"180px auto",}}>
        <h1 style={{textAlign:'center', color:"blue", marginBottom:'15px'}}>Add Country</h1>
        <div style={{ display:"flex", flexDirection:"column",gap:"20px"}}>
          <Input onChange={(e)=>{
            setNewCountry({...newCountry,name:e.target.value})
          }} value={newCountry.name} placeholder="Name" />
          <Input onChange={(e)=>{
            setNewCountry({...newCountry,capital:e.target.value})
          }} value={newCountry.capital} placeholder="Capital" />
          <Input onChange={(e)=>{
            setNewCountry({...newCountry,population:e.target.value})
          }} value={newCountry.population} placeholder="Population" />
          <Input onChange={(e)=>{
            setNewCountry({...newCountry,flagImg:e.target.value})
          }} value={newCountry.flagImg} placeholder="Flag Img URL" /> 
          <TextArea onChange={(e)=>{
            setNewCountry({...newCountry,description:e.target.value})
          }} value={newCountry.description} rows={4} placeholder="Description" />
        </div>
       <div style={{marginTop:'10px'}}>
       <Button type="submit" variant="contained" color="success">
          Success
        </Button>
       </div>
      </form>
    </>
  )
}

export default AddCountry