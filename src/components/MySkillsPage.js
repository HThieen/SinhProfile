import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {lightTheme} from './Themes';
import {Design, Develope} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComPonne from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
}

`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
margin: 0px;

${Main}:hover &{
        &>*{
                fill:${props => props.theme.body};
        }
}
&>*:first-child{
        margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
margin: 0px;

${Main}:hover &{
        
                color:${props => props.theme.body};
        
}
strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
        margin: 0px;
}
ul,p{
        margin-left: 2rem;
        margin: 0px;
}
`
const MySkillsPage = () => {
    return ( 
        <ThemeProvider theme={lightTheme}>
<Box>
<LogoComponent theme = 'light'/>
<SocialIcons theme='light' />
<PowerButton/>
<ParticleComPonne theme= 'light'/>
        <Main>
<Title>
        <Develope width={40} height={40} /> Backend
 
</Title>
        <Description>
        Tôi thích tạo ra những ứng dụng phần mềm đáng tin cậy
        </Description>
        <Description>
                <strong> Tôi thích</strong>
                <p>
                ASP.Net Core MVC, API.
                </p>
        </Description>
        <Description>
                <strong> Tools</strong>
                <p>
                VSStudio, MSQSever, MySQL, MongoDB, Github.
                </p>
        </Description>
        </Main>
        

        <Main>
<Title>
        <Develope width={40} height={40} /> Frondend
</Title>
        <Description>
        Tôi thích tạo ra những thiết kế có tiếng nói, sạch sẽ, tối giản và đơn giản.
        </Description>
        <Description>
                <strong> Tôi thích</strong>
                <p>
                Html, Css, Js, React.
                </p>
        </Description>
        <Description>
                <strong> Tools</strong>
                <p>
                VScode, Github.
                </p>
        </Description>
        </Main>
        <BigTitlte text="SKILLS" top="65%" right="30%" />

</Box>
        </ThemeProvider>
        
    )
}
export default MySkillsPage