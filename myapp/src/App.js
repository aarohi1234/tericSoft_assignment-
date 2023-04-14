import { useState } from 'react'

import './App.css'
import {EmployeeTable } from './Components/detail'
import Modalcontainer from "./Components/Modal"
import axios from "axios"

function App() {
  const [employee, setEmployee] = useState([])

  const getData = () => {
    axios.get('https://tericsoft-r351.onrender.com/employee')
    .then(function (response) {
        console.log("get:", response.data);
        setEmployee(response.data)
    })
    .catch(function (error) {
      console.log(error)
    });
}

  return (
    <div className="App">
      <EmployeeTable getData={getData} employee={employee}></EmployeeTable>
      <Modalcontainer    prop={"Add Data"} getData={getData} ></Modalcontainer>
    </div>
  )
}

export default App