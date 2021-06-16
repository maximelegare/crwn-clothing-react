import "./sign-in.styles.scss";
import { Component } from "react";
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../custom-button/custom-button.component'
import { auth } from '../../../firebase/firebase.utils'

// import { signInWithGoogle } from '../../../firebase/firebase.utils'
import { googleSignInStart } from '../../../redux/user/user.actions'



import { connect } from 'react-redux'

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

  submitForm = async (e) => {
      e.preventDefault()
      const { email, password } = this.state

    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: "",
        password: "",
      })
    }catch(err){
      console.error(err)
    }
  }



  render() {
    const { googleSignInStart } = this.props
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
            
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={googleSignInStart} isGoogleSignIn type="button"> Sign in with Google </CustomButton>
          </div>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart : user => dispatch(googleSignInStart(user))
})

export default connect(null, mapDispatchToProps)(SignIn);
