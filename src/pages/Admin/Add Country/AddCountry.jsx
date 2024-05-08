import { func } from "prop-types";
import { useState } from "react";
import controller, { post } from "../../../API";
import { endpoints } from "../../../API/base";
import { Input } from "antd";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const { TextArea } = Input;
import { useFormik } from "formik";
import { object, string, number, date } from "yup";
import 'react-toastify/dist/ReactToastify.css';

let countrySchema = object({
  name: string().required("name is required"),
  population: number()
    .required("population is required")
    .positive()
    .min(1000)
    .integer(),
  description: string().required("description is required"),
  capital: string().required("capital is required"),
  flagImg: string().url("must be url").required("flagImg is required"),
});

const AddCountry = ({}) => {

  const [newCountry, setNewCountry] = useState({
    name: "",
    population: "",
    capital: "",
    description: "",
    flagImg: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    controller
      .post(endpoints.countries, newCountry)
      .then(() => navigate("/admin/countriesadmin"));

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
  const formik = useFormik({
    initialValues: {
      name: "",
      population: "",
      description: "",
      capital: "",
      flagImg: "",
    },
    onSubmit: async(values,{resetForm }) => {
     await post(endpoints.countries, values).then(()=>
    {
      resetForm() 
      setTimeout(() => {
        navigate("/admin/countriesadmin");
      }, 2000);
      toast.success("new country added!", {
        autoClose: 1500,
      });
    })
    

    },
    validationSchema: countrySchema,
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "80%", margin: "180px auto" }}
      >
        <h1
          style={{ textAlign: "center", color: "blue", marginBottom: "15px" }}
        >
          Add Country
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}
          <Input
            id="capital"
            name="capital"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.capital}
          />
          {formik.errors.capital && (
            <span style={{ color: "red" }}>{formik.errors.capital}</span>
          )}
          <Input
            id="population"
            name="population"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.population}
          />
          {formik.errors.population && (
            <span style={{ color: "red" }}>{formik.errors.population}</span>
          )}
          <Input
            id="flagImg"
            name="flagImg"
            type="url"
            onChange={formik.handleChange}
            value={formik.values.flagImg}
          />
          {formik.errors.flagImg && (
            <span style={{ color: "red" }}>{formik.errors.flagImg}</span>
          )}
          <TextArea
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && (
            <span style={{ color: "red" }}>{formik.errors.description}</span>
          )}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </div>
      </form>
      <ToastContainer/>

    </>
  );
};

export default AddCountry;
