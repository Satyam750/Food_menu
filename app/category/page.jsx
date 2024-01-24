'use client'
import Link from "next/link";
import { FaPizzaSlice, FaHamburger  } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import styled from "styled-components";

const Category = () => {
  return (
    <List>
    <SLink href={`cuisine/Italian`}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
    </SLink>
    <SLink href={`cuisine/American`}>
        <FaHamburger/>
        <h4>American</h4>
    </SLink>
    <SLink href={`cuisine/Thai`}>
        <GiNoodles/>
        <h4>Thai</h4>
    </SLink>
    <SLink href={`cuisine/Japanese`}>
        <GiChopsticks/>
        <h4>Japanese</h4>
    </SLink>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;

const SLink = styled(Link)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background:linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
  color: white;
  font-size: 0%.8rem;
}

svg{
  color: white;
  font-size: 1.5rem; 
}
&:active{
  background: linear-gradient(to right, #f27121, #e94057);

  svg{
    color:white;
  }
  h4{
    color: white;
  }

}

`


export default Category