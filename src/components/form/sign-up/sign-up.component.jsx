import "./sign-up.styles.scss";
import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../../custom-button/custom-button.component'

import { connect } from 'react-redux'
import { signUpStart } from '../../../redux/user/user.actions'


// import {auth, createUserProfileDocument} from "../../../firebase/firebase.utils";

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
  submitForm = (e) => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    const { signUpStart } = this.props
    // console.log('submit')
    // signUpStart({email, password,})


    if(password !== confirmPassword ){
        alert("passwords don't match")
        return;
    }
    signUpStart({displayName, email, password})

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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfos) => dispatch(signUpStart(userInfos))
}) 

export default connect(null, mapDispatchToProps)(SignUp)
