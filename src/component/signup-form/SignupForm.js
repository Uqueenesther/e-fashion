import {useState} from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/Firebase";
import FormInput from "../form-input/Form-input";
import './signup-form.scss';
import Button from "../button/Button";


const defaultFormFields = {
    displayName:'',
    email:'',
    password: '',
    confirmedPassword: '',
};

const SignupForm = () => {
    const [FormFields, setFormField] = useState(defaultFormFields);
    const {displayName, email, password, confirmedPassword} = FormFields;

console.log(FormFields)

const resetFormFields = () => {
    setFormField(defaultFormFields);
}

const handleChange = (event ) => {
  const {name, value} = event.target;
  setFormField({...FormFields, [name]: value})
}

const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== confirmedPassword) {
      alert("Wrong credentials");
      return;
    }
  
    try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Cannot create user, email already in use');
        } else {
          console.log('user creation encountered an error', error);
        }
      }
    };
  


    return (
        <div className="sign-up-container">

            <h2>Don't have an accont?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit} >
                
                <FormInput label='Display Name'
                 type="text" required 
                 onChange={handleChange}
                 name="displayName"
                 value={displayName}/>

              
                <FormInput label='email'
                 type="email" required 
                 onChange={handleChange}
                 name="email"
                 value={email} />

             
                <FormInput label='Password'
                 type="password" required
                 onChange={handleChange}
                 name="password"
                 value={password}/>

                
                <FormInput label='Confirmed Password'
                 type="password" required
                 onChange={handleChange}
                 name="confirmedPassword"
                 value={confirmedPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignupForm;