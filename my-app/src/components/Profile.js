import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color:burlywood;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    justify-content: center;
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

const Profile = () => {
    return (
        <StyledDiv>
            <StyledButton>List item</StyledButton>
            <StyledButton>View listings</StyledButton>
        </StyledDiv>
    )
}

export default Profile;