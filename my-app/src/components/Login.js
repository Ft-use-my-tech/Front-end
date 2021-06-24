import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color:burlywood;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`

const StyledTitle = styled.h2`
    color:#1E90FF;
    display:flex;
    align-items:center;
`
const StyledButton = styled.button`
    background-color: #1E90FF;
    border: none;
    border-radius:10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`
const StyledInput = styled.input`
    padding:10px;
    margin:10px 0;
    border-radius: 10px;
`


const Login = () => {
    const history = useHistory();
    const [formValues, setFormValues] = useState()

    const onChange = e => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = e => {
        e.preventDefault()
        axios.post('', formValues)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return(
        <div className='container'>
                <StyledForm className='form-container' onSubmit={onSubmit}>
                    <StyledTitle>Login</StyledTitle>

                    <StyledInput
                        // value={}
                        // onChange={}
                        name='username'
                        type='text'
                        placeholder='Username'
                    />
                    <StyledInput
                        // value={}
                        // onChange={}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />

            <StyledButton id='login-button'>Login</StyledButton>
                </StyledForm>
        </div>
    )
}

export default Login;