import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color:black;
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
const StyledText = styled.h4`
    color: #1E90FF;
    display:flex;
    align-items:center;
    padding-left: 50px;
`

const Home = () => {
    return (
        <StyledDiv>
            <StyledTitle>Welcome to Use My Tech Stuff!</StyledTitle>
            <StyledText>The only application where you can directly rent equipment from the owner!</StyledText>
            <StyledText>Have equipment of your own you want to rent out for some cash? Join today and list what you have!</StyledText>
        </StyledDiv>
    )
}

export default Home;