import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Navbar from "../components/Navbar"
const Home = () => {
    return (
        <Conatiner>
        <Navbar />
            <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            firstButtonText="CUSTOM ORDER"
            secondButtonText="EXISTING INVENTORY"
            />
            <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            firstButtonText="CUSTOM ORDER"
            secondButtonText="EXISTING INVENTORY"
            />
            <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            firstButtonText="CUSTOM ORDER"
            secondButtonText="EXISTING INVENTORY"
            />
            <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            firstButtonText="CUSTOM ORDER"
            secondButtonText="EXISTING INVENTORY"
            />
            <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            firstButtonText="Order now"
            secondButtonText="Learn more"
            />
            <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Pannels"
            backgroundImg="solar-roof.jpg"
            firstButtonText="Order now"
            secondButtonText="Learn more"
            />
            <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            firstButtonText="Shop now"
            />
        </Conatiner>
    )
}

export default Home

const Conatiner = styled.div`
height: 100vh;
`