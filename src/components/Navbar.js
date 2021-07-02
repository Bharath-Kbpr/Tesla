import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const cars = useSelector(selectCars)
    const handleCyber = () => {
        history.push("/CyberHome")
    }
    return (
        <Container>
           <a>
             <img src="/images/logo.svg" alt="" />
           </a>
           
           <Menu>

           <a href="#">Model S</a>
 
           <a href="#">Model 3</a>
  
           <a href="#">Model X</a>
    
           <a href="#">Model Y</a>
    
           <a href="#" onClick={handleCyber}>Cybertruck</a>
       
          
           </Menu>
        
           <RightMenu>
           <a href="#">Shop</a>   
           <a href="#">Tesla Acount</a>
           <CustomMenu onClick={() =>setOpen(true) }/>
          </RightMenu>
          <BurgerNav show={open}>
          <CloseWrapper>
          <CustomClose onClick={() =>setOpen(false) }/>
          </CloseWrapper>
          {cars && cars.map((car, index)=> (
            <li key={{index}}><a href="#">{car}</a></li>
           ))}
          <li><a href="#">Existing Iventory</a></li>
          <li><a href="#">Used Iventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
     
          <li><a href="#">Charging</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Support</a></li>
          </BurgerNav>
          
        </Container>
    )
}

export default Navbar

const Container = styled.div`
min-height:60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding:0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex: 1;
 a{
     font-weight: 600;
     text-transform: uppercase;
     padding: 0 10px;
     flex-wrap: nowrap;
 }
 a:hover{
     background: #0000000D;
     padding:5px 10px;
     border-radius: 10px;
     transition: .2s;
 }
 @media(max-width:768px){
     display: none;
 }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
 a{
     font-weight: 600;
     text-transform: uppercase;
     margin-right:10px;
     
 }
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ?' translateX(0)': 'translateX(100%)'};
transition: transform 0.2s ;
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
        font-weight: 600;
    }
}
`
const CloseWrapper = styled.div`
/* width: 100%; */
display: flex;
justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`