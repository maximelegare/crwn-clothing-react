import "./sign-up.styles.scss";
import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from "../../../firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  submitForm = async (e) => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    
    if(password !== confirmPassword ){
        alert("passwords don't match")
        return;
    }

    try{
        console.log(displayName)
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        // console.log(user)
        // displayName is in an object because createUserProfileDocument takes on param and the others are ...spread. it needs to be in an object to add it.
        await createUserProfileDocument(user, {displayName:displayName})
        

        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          })


    }catch(err){
        console.error(err)
    }

}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]:value})
  } 

  render() {
    const {displayName, email, password, confirmPassword} = this.state  
    return(
    <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign-up with you email and password</span>
        <form className="sign-up-form" onSubmit={this.submitForm}>
            <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
            />
            <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
            />
            <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
            />
            <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
            />
            <CustomButton
            type="submit"
            >SIGN UP!</CustomButton>
        </form>
    </div>
    ) 
  }
}
export default SignUp
