import { useEffect, useState } from 'react'

function App() {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    if(countries){
      fetchCountries();
    }
  });

  const fetchCountries = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await data.json();
      setCountries(jsonData);
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='country-container'>
        {countries.map((country) => (
          <div className='country-card' key={country.cca3}>
            <img className='country-img' src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
