import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect,useState } from 'react';

const h = 48;
const p = 4;
const Menu = {
  Props: {
    style: {
      maxHeight: h * 4.5 + p,
      width: 200,
    },
  },
};


export default function CheckBoxx({names,title,details,setDetails}) {
    const [Name, setName] = useState([]);
    
    console.log(Name)
    useEffect(() => {    
         setDetails({
        ...details,
        hobbies : Name
         })
        console.log(details)
      },[Name,setDetails])
    const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setName(
     
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130 }}size="small">
        <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={Name}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          renderValue={(selected) => selected.join(', ')}
          Menu={Menu}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={Name.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
