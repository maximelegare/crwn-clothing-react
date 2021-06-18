import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";
// import { auth } from '../../../firebase/firebase.utils'

// import { signInWithGoogle } from '../../../firebase/firebase.utils'
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../redux/user/user.actions";
import { useState } from "react";

import { connect } from "react-redux";

const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const submitForm = async (e) => {
    e.preventDefault();

    emailSignInStart({ email, password });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };


  
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitForm}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={handleChange}
          label="email"
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="password"
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn
            type="button"
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: (user) => dispatch(googleSignInStart(user)),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
