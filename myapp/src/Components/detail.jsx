import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modalcontainer from "./Modal"
import axios from "axios"
import TableHead from '@mui/material/TableHead';



export const EmployeeTable = ({getData,employee}) => {
  
  React.useEffect(() => {
    getData()
  }, [])
  
  const handleDelete = (id) => {
    axios.delete(`https://tericsoft-r351.onrender.com/employee/${id}`)
    .then(function (response) {
      alert("Deleted successfully");
        getData()
    })
    .catch(function (error) {
      console.log(error)
    });
  }

 


  return (
      <div style={{ backgroundColor: 'lightgray' }}>
        <TableContainer  component={Paper}>
          <Table sx={{ minWidth: 700 } } aria-label="simple table" >
            <TableHead>
              <TableRow style={{ backgroundColor: 'lightgrey',margin: 'auto' } }>
                <TableCell align="center" >Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">phone</TableCell>
                <TableCell align="center">DOB</TableCell>
                <TableCell align="center">Hobbies</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employee.map((el) => (
                <TableRow
                  key={el.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                >
                  <TableCell align="center">{el.name}</TableCell>
                  <TableCell align="center">{el.email}</TableCell>
                  <TableCell align="center">{el.gender}</TableCell>
                  <TableCell align="center">{el.phone}</TableCell>
                  <TableCell align="center">{el.dob}</TableCell>
                  <TableCell align="center">{el.hobbies.map((e) => {
                    return (
                        <TableCell align="center">{e}</TableCell>
                    )
                  })}</TableCell>
                  <TableCell align="center"><Button size="small" variant="contained" onClick={()=> handleDelete(el.id)} >Delete</Button></TableCell>
                  <TableCell align="center"  > <Modalcontainer prop={"Edit"} id={el.id} getData={getData} ></Modalcontainer></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}