import './App.css'
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LocalCountry></LocalCountry>
      
    </div>
  )
}

function LocalCountry(){
  const[countrys,setCountrys]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
     .then(res =>res.json())
     .then(data =>setCountrys(data))
  },[])
  return(
    <div>
      <h1>Visiting every country in the World</h1>
      <h2>world country list:{countrys.length}</h2>
      {
        countrys.map(country=><CountryData dipongkar={country.name.common} capital={country.capital} imges={country.flags.png} ></CountryData>)
      }
    </div>
  )
}
function CountryData(Props){
  return(
    <div className='country'>
      <h2>Country name :{Props.dipongkar}</h2>
      <h4>Capital:{Props.capital}</h4>
      <img src={Props.imges} alt="country" />
    </div>
  )
}

export default App
