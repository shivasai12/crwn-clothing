import React from "react";
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up-page/sign-in-sign-up.component";
import './sign-in.component.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.componrnt";
import {signInWithGoogle} from '../../firebase/firebase.utils';
import {auth} from '../../firebase/firebase.utils'
import { Redirect } from 'react-router';;

class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            email: '',
            password:''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        
        const{email, password}= this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            
            
        }
        catch(error){
            alert('please enter valid email and password');
        }


    }
    handleChange= event=>{
        const {value, name}= event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='sign-in'>
              <h2>I already have a account</h2>
              <span>Sign in with your Email and Password</span>

              <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                <div className='buttons'>
                
                <CustomButton type='submit'>SignIn</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
              </form>
            </div>
        )
    }
}
export default SignIn;