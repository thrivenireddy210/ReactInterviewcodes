
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const[phonenumber, setPhonenumber] = useState();
  const[country, setCountry] = useState();
  const[errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = {};

    if (name.length <1) {
      validateErrors.name = "Name contains "
    }
    if(!dob){
      validateErrors.dob = 'Date of birth is required'
    }else{
      const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear()-dobDate.getFullYear();
    if(age > 25){
      validateErrors.dob = 'age must be under 25';
    }

    }
    

    if (country == 'USA' && phonenumber !==10){
      validateErrors.phonenumber = 'Phone number must be 10 digits'
    }
    else if(country == 'Uk' && phonenumber.length !== 10){
      validateErrors.phonenumber = 'Phone number must be 11 digits for uk'
    }
    setErrors(validateErrors);
  
      console.log('Name', name);
      console.log('Date of birth', dob);
      console.log('phone number', phonenumber);
      console.log('country' , country);

  }
  return (
   <form onSubmit={handleSubmit}>
    <div>
      <label>Name:</label>
      <input type='text'  value={name}  onChange={(e) => setName(e.target.value)}/>
      {errors.name && <p className='error'>{errors.name}</p>}
      <label>Dateofbirth</label>
      <input type='date' value = {dob} onChange={(e)=> setDob(e.target.value)} />
      {errors.dob && <p className='error'>{errors.dob}</p>}
      <label>Contry</label>
      <select value = {country} onChange={(e) => setCountry(e.target.value)}>
        <option value = "">Select Country</option>
        <option value="USA">United States</option>
        <option value="UK">United Kingdom</option>
      </select>
      <label>Phone Number</label>
      <input type= 'number' value={phonenumber} onChange={(e)=> setPhonenumber(e.target.value)} />
    </div>
    <button type='submit'>Submit</button>
   </form>
  );
}

export default App;
