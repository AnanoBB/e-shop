import React from 'react';
import './styles.scss'
import Button from './../Forms/Button'

const SignIn = props =>
{
    return (
        <div className='signIn'>
            <div className='wrap'>
                <h2>LogIn</h2>

                <div claaName='formWrap'>
                    <form>
                        <div className='socialSignin'>
                            <div className='row'>
                                <Button>
                                    Sign in with google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;