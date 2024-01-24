'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'next/navigation'
import Link from 'next/link'



const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams();
    const getCuisine = async(name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=beb7f221e230436bba918adc771bc684&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)

    }


    useEffect(()=>{
  getCuisine(params.sam)
    },[params.sam])
    console.log(cuisine);
  return (
    <>
    <button className='p-4 rounded-full bg-gray-400 text-white mt-3 mb-3 ml-4 active:bg-orange-500 hover:bg-orange-400'><Link href="/" className='font-semibold p-0'>Go Back</Link></button>
   <div className='h-[20vw] ml-[2vw] mr-[2vw]'>
   <Grid>
      {cuisine.map((item)=>(
        <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
        </Card>
      ))}
    </Grid>
   </div>
    </>
  )
}

const Grid  = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
grid-gap: 3rem ;
`;
const Card = styled.div`
img{
    width: 100%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
`

export default Cuisine