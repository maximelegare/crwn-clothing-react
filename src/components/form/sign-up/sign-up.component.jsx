import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../../custom-button/custom-button.component'

import { connect } from 'react-redux'
import { signUpStart } from '../../../redux/user/user.actions'

import { useState } from 'react'


// import {auth, createUserProfileDocument} from "../../../firebase/firebase.utils";

const SignUp = ({signUpStart}) =>  {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const {displayName, email, password, confirmPassword} = userCredentials

  const submitForm = (e) => {
    e.preventDefault()
    // console.log('submit')
    // signUpStart({email, password,})


    if(password !== confirmPassword ){
        alert("passwords don't match")
        return;
    }
    signUpStart({displayName, email, password})

}

 const handleChange = (e) => {
    const {name, value} = e.target
    setCredentials({...userCredentials, [name]:value})
  }   
    return(
    <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign-up with you email and password</span>
        <form className="sign-up-form" onSubmit={submitForm}>
            <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
            />
            <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
            />
            <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
            />
            <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
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


const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfos) => dispatch(signUpStart(userInfos))
}) 

export default connect(null, mapDispatchToProps)(SignUp)
