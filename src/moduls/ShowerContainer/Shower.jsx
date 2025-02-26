import React from "react";
import './styles.css'

const Shower = ({statee}) =>{
    return(
        <div className="Shove">
            {statee.city ?
                <div>
                    <h1>Country: {statee.country}</h1>
                    <p>City: {statee.city}</p>
                    <p>temperature: {statee.temp} °C </p>
                    <p>Pressure: {statee.pressure}</p>
                    <p>Sunset: {statee.sunset}</p>    
                </div>

                : <h2>{statee.error}</h2>
            }

        </div>
    )
}   

export default Shower