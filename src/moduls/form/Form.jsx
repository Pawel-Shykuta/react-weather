import React from "react";
import './styles.css'

const Form = ({geatingWeater}) =>{
     return(
        <form  onSubmit={geatingWeater} className="form">
            <input type="text" name="city" placeholder="City" />
            <button>Get weather</button>
        </form>
     )  
}

export default Form

