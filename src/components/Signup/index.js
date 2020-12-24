import React, { Component} from 'react';
import './styles.scss';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';


const initialState  = {
    displayName : '',
    email: '',
    password : '',
    confirmPassword : ''
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
    render(){

        const {displayName} = this.state;
        return(
            <div className='signup'>
                <div className='wrap'>
                    <h2>SignUp</h2>
                    <form>
                        <FormInput 
                        type='text'
                        name = 'displayName'
                        value ={displayName}
                        placeholder='fullname'
                        onChange={this.handleChange}
                        />
                        
                    </form>
                </div>
            </div>
        )
    }
}


export default Signup