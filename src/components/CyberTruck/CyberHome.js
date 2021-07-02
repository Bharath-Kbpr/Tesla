import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const CyberHome = () => {
    return (
        <React.Fragment>
        
        <Container>
        <HeaderLogo >
        </HeaderLogo>
        <Fade bottom>
        <ItemText>
        <p>BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR</p>
       </ItemText>
       <ButtonC>
       <p>Order Now</p>
       </ButtonC>
       </Fade>
        </Container>
       
        <SecondSlide>
        <Fade bottom>
        <img src="https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg" alt="" />
        </Fade>
        </SecondSlide>
        
        <ThirdSlide>
        <Fade bottom>
           <ThirdHeading>EXOSKELETON</ThirdHeading>
           <p>Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.</p>
           <img src="https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg" alt="" />
           </Fade>
        </ThirdSlide>
        <FourthSlide>
        <Fade bottom>
          <FourthBox>
            <h1>ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL</h1>
            <p> 

         If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.</p>
          </FourthBox>
          </Fade>
        </FourthSlide>
       
        </React.Fragment>
    )
}

export default CyberHome

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image:url("https://www.tesla.com/xNVh4yUEc3B9/01_Main_Hero_Desktop.jpg");
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
`
const HeaderLogo = styled.div`
width: 30vw;
height: 40vh;
background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cybertrucklogo.svg/800px-Cybertrucklogo.svg.png");
background-position: 50%;
background-repeat:no-repeat;
background-size: contain;
margin: 20px auto;
`
const ItemText  = styled.div`
margin-top: 7rem;
p{
    text-align: center;
    color: white;
    letter-spacing: 2px;
    line-height: 1.5!important;
    text-shadow: 0 0 8px #fff;
}
`
const ButtonC = styled.div`
margin-bottom: 40px;
border: 3px solid white;
padding: 10px;
p{
    text-align: center;
    color:white;
    letter-spacing: 2px;
    line-height: 1.5!important;
}
`
const SecondSlide = styled.div`
background:#000;
width: 100vw;
 height: 100vh;
 text-align: center;
img{
    width: 70%;
   margin-top: 80px;
    background-position: 100%;
background-repeat:no-repeat;
background-size: cover;
}

`
const ThirdHeading = styled.h1`
color:white;
letter-spacing: 2px;
`
const ThirdSlide = styled.div`
background:#000;
width: 100vw;
 height: 100vh;
 text-align: center;
p{
    color: white;
    letter-spacing: 1px;
    width: 70%;
   margin:20px auto;
}
img{
    width: 70%;
   margin-top: 80px;
    background-position: 100%;
background-repeat:no-repeat;
background-size: cover;
}
`
const FourthBox = styled.div`
display: flex;

width: 70%;
/* height: 200px; */
padding-top: 100px ;
margin:0px auto;
h1{

    width: 600px;
    font-size: 14px;
    font-weight: 600;
    color:#ccc;
}
p{
    color:white;
    text-align: start;
    padding-left: 40px;
}
@media(max-width: 768px){
    flex-direction: column;
}

`
const FourthSlide = styled.div`
background:#000;
width: 100vw;
 height: 24vh;
 text-align: center;

img{
    width: 70%;
   margin-top: 80px;
    background-position: 100%;
background-repeat:no-repeat;
background-size: cover;
}
`