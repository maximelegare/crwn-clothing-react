import './sign-in-and-sign-out.styles.scss'
import SignIn from '../../components/form/sign-in/sign-in.component'
import SignUp from '../../components/form/sign-up/sign-up.component'


const SignInAndSignOut = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSignOut