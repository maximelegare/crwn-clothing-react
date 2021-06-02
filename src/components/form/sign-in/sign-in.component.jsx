import "./sign-in.styles.scss";
import { Component } from "react";
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../custom-button/custom-button.component'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  
  handleChange = (e) => {
      const {name, value} = e.target 
      
      this.setState({[name]:value})
  }

  submitForm = (e) => {
      e.preventDefault()
      this.setState({email: '', password: ''})
  }



  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        
        
        <form onSubmit={this.submitForm}>
            <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            required 
            handleChange={this.handleChange}
            label="email"
            />
            
            <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            required 
            handleChange={this.handleChange}
            label="password"
            />
            

            <CustomButton type="submit"> Sign in </CustomButton>
        </form>

      </div>
    );
  }
}

export default SignIn;
