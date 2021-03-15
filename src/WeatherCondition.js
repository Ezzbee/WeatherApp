import React from 'react';

const WeatherCondition = (props) => {
  let status = '';
  if (typeof props.responseObj.cod !== 'undefined') {
      status="Location not found!"
    }
   return (

       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <h3>at {props.responseObj.name}:</h3>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees {props.unit==="metric"?" Celcius":"Fahrenheit"} out with {props.responseObj.weather[0].description}.</p>
                   <p>Wind speed is {props.responseObj.wind.speed} {props.unit === "metric" ? "km/hr":"ml/hr"} with humidity at {props.responseObj.main.humidity}%.</p>
               </div>
           :   <div>
                  <h3> {status}</h3>
               </div>
           }
       </div>
   )
}
export default WeatherCondition
