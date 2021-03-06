import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.componrnt'

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName: '',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async event=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword}= this.state;
        console.log(password);
        if(password!==confirmPassword){
            alert('password dont match' +password+" abcs"+confirmPassword);
            return;
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                
            displayName: '',
            email:'',
            password:'',
            confirmPassword:''
            });
        }
        catch(error){

        }
    }
    handleChange= event=>{
        const{name, value}= event.target;
        
        this.setState({[name]:value});
    }

    render(){
        const {displayName, email, password, confirmPassword}= this.state;
        return(
            <div className='sign-up'>
               <h2 className='title'>I do not have an account</h2>
               <span>Sign up with your Email and Password</span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
                 <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={this.handleChange}
                  label='First Name'
                  required/>
                  <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email'
                  required/>
                  <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                  <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                  label='Confirm Password'
                  required/>
                  <CustomButton type='submit'>Sign Up</CustomButton>
               </form>
            </div>
            
        )
    }
}
export default SignUp;