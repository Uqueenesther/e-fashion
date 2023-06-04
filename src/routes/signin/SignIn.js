import { signInWithGooglePopup, createUserDocumentFromAuth}  from "../../utils/firebase/Firebase";
import SignupForm from "../../component/signup-form/SignupForm";

const SignIn = () =>{

 const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
 }


    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popop
            </button>
           <SignupForm />
        </div>
    )
}

export default SignIn;