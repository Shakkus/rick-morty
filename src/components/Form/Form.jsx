import { useState } from "react"
import validation from "../Validation/Validation"

import './Form.css';

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email:'',
        password: ''
    })

    const [errors,setErrors] = useState({
        
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div className="login-container">
            <h2>Ingresa su usuario y contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-container">
                    <label htmlFor="">Email: </label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="pass-container">
                    <label htmlFor="">Password: </label>
                    <input type="text" name="password" value={userData.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>} 
                </div>
                <button className="btn-submit">Submit</button>
            </form>
        </div>       
    )
}   

export default Form