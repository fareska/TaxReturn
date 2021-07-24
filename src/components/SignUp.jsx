import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/signUp.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%',
      right: 0,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: '90%',
    // minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const generateYears = () => {
  let years = []
  for (let i = 2021; i > 1920; i--) {
    years.push(i)
  }
  return years
};

export default function FormPropsTextFields(props) {
  const classes = useStyles();


  const [status, setStatus] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const years = generateYears();

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNumber(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const confirmData = ()=>{
    console.log(props.getUSerData({status, age, fullName, number}));
    // console.log('status' ,status);
    // console.log( 'age', age);
    // console.log('fullName', fullName);
    // console.log('number', number);
  } 


  return (
    <form id="detailsForm" className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField name="fullName" onChange={handleNameChange} required className="standard-required" label="الاسم الكامل" />
      </div>
      <div>
        <TextField name="number" onChange={handleNumChange} required className="standard-required" label="رقم الخيليوي" />
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="family-status-select-label">الحالة الزوجية *</InputLabel>
          <Select
            labelId="family-status-select-label"
            id="family-status-select"
            value={status}
            onChange={handleStatusChange}
          >
            <MenuItem value={"اعزب"}>اعزب</MenuItem>
            <MenuItem value={"متزوج"}>متزوج</MenuItem>
            <MenuItem value={"ارمل"}>ارمل</MenuItem>
            <MenuItem value={"مطلق"}>مطلق</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="date-of-birth-select-label">سنة الولادة *</InputLabel>
          <Select
            labelId="date-of-birth-select-label"
            id="date-of-birth-select"
            value={age}
            onChange={handleAgeChange}
          >
            {years.map((y, i) => {
              return <MenuItem key={i} value={y}> {y} </MenuItem>
            })}
          </Select>
        </FormControl>
      </div>

      <div id="detailsForm-btnContainer">    
      <Button className="detailsForm-btn" variant="outlined" color="primary">
          الرجوع
        </Button>

        <Button onClick={confirmData} className="detailsForm-btn" variant="contained" color="primary">
          موافقة
        </Button>
      </div>

    </form>
  );
}



// import React, { Component } from 'react'

// export default class SignUp extends Component {
//     render() {
//         return (
//             <div className="body-content">
//                 SignUp
//             </div>
//         )
//     }
// }
