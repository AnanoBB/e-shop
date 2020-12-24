import React, { Component} from 'react';
import './styles.scss';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

import {auth,handleUserProfile} from './../../firebase/utils';


const initialState  = {
    displayName : '',
    email: '',
    password : '',
    confirmPassword : '',
    errors : []
}

class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name] : value
        });
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const {displayName,email,confirmPassword,password,errors} =this.state;

        if(password !== confirmPassword){
            const err = ['Password Dont match'];
            this.setState({
                errors :err
            })
            return;

        }
    }
    render(){

        const {displayName,email,password,confirmPassword,errors} = this.state;
        return(
            <div className='signup'>
                <div className='formwrap'>
                    <h2>SignUp</h2>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err,index)=> {
                                return(
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                    <div class='wrap'>

                   
                    <form onSubmit={this.handleFormSubmit}>
                        <FormInput 
                        type='text'
                        name = 'displayName'
                        value ={displayName}
                        placeholder='fullname'
                        onChange={this.handleChange}
                        />

                        <FormInput 
                        type='email'
                        name = 'email'
                        value ={email}
                        placeholder='Email'
                        onChange={this.handleChange}
                        />

                    <FormInput 
                        type='password'
                        name = 'password'
                        value ={password}
                        placeholder='Password'
                        onChange={this.handleChange}
                        />

                    <FormInput 
                        type='password'
                        name = 'confirmPassword'
                        value ={confirmPassword}
                        placeholder='confirm password'
                        onChange={this.handleChange}
                        />


                      <Button type='submit'>
                          Register
                      </Button>
                        
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup