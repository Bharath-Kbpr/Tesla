import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ( {title, description, backgroundImg, firstButtonText, secondButtonText} ) => {
    return (
        <Conatiner bgimage={backgroundImg}>
        <Fade bottom>
            <ItemText>
             <h1>{title}</h1>
             <p>{description}</p>
            </ItemText>
            </Fade>
           
            <Buttons>
            <Fade bottom>
            <ButtonGrp>
               <FirstBtn>
                 {firstButtonText}
               </FirstBtn>
              {secondButtonText && <SecondBtn>
                 {secondButtonText}
               </SecondBtn>}
            </ButtonGrp>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        
            
        </Conatiner>
    )
}

export default Section

const Conatiner = styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image: ${props => `url("/images/${props.bgimage}")`};
 display:flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`
const ButtonGrp = styled.div`
display: flex;
margin-bottom: 30px;
@media(max-width: 768px){
    flex-direction: column;
}
`
const FirstBtn = styled.div`
background-color: rgba(23,26,32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity:0.85;
text-transform: uppercase;
font-size: 12px;
cursor:pointer;
margin:8px;
`
const SecondBtn = styled(FirstBtn)`
background: white;
color:#393c41;
opacity:0.85;
`
const DownArrow = styled.img`
width:100%;
height:40px;
animation: downup infinite 1.5s;
`
const Buttons = styled.div`

`