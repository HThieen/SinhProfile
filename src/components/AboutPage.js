import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import {DarkTheme} from './Themes';
import {Design, Develope} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComPonne from "../subComponents/ParticleComponent";

import astronaut from '../assets/Images/spaceman.png'
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

`
const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}


`
const Spaceman =styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 5s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index:3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubutntu Mono', monospace;
font-style: italic;
`
const AboutPage = () => {
    return ( 
        <ThemeProvider theme={DarkTheme}>
<Box>
<LogoComponent theme = 'dark'/>
<SocialIcons theme='dark' />
<PowerButton/>
<ParticleComPonne theme= 'dark'/>
        <Spaceman>
            <img src={astronaut} alt="spaceman"/>
        </Spaceman>
        <Main>
        Xin chào, tôi là một người dân IT Backend đam mê công nghệ và yêu thích du lịch.
<br /> <br />
Tôi tin rằng công nghệ có thể thay đổi thế giới và tôi đam mê tạo ra những ứng dụng phần mềm đáng tin cậy. Đồng thời, tôi yêu thích khám phá thế giới xung quanh thông qua du lịch, vì nó mang lại niềm vui và cảm hứng vô tận.
<br /> <br />
Tôi luôn cố gắng kết hợp hai đam mê này để không chỉ phát triển về mặt kỹ thuật mà còn mở rộng tầm nhìn và trải nghiệm cuộc sống.

        </Main>
        <BigTitlte text="BLOG" top="10%" left="5%" />

</Box>
        </ThemeProvider>
        
    )
}
export default AboutPage