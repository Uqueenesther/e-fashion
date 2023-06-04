import {useState} from "react";
 
const defaultFormFields = {
    displayName:'',
    email:'',
    password: '',
    confirmedPassword: ''
}

const SignupForm = () => {
    const [FormFields, setFormField] = useState(defaultFormFields);
    const {displayName, email, password, confirmedPassword} = FormFields;

console.log(FormFields)

const handleChange = (event ) =>{
  const {name, value} = event.target;
  setFormField({...FormFields, [name]: value})
}


    return (
        <div>
            <h1>Sign up with your email and password</h1>

            <form onSubmit={()=>{}} >
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input type="email" required onChange={handleChange}name="email" value={email} />

                <label>password</label>
                <input type="password" required onChange={handleChange}name="password"  value={password}/>

                <label>Confirm password</label>
                <input type="password" onChange={handleChange} name="confirmedPassword" value={confirmedPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;