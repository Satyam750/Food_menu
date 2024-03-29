'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/dist/css/splide.min.css'
import '@splidejs/react-splide/css';


const Popular = () => {

  const [popular, setPopluar] = useState([])

  useEffect(() => {
    const getPopular = async () => {
     
      const check = localStorage.getItem('popular')

      if(check){
        setPopluar(JSON.parse(check))
      }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=beb7f221e230436bba918adc771bc684&number=9`)
        const data = await api.json()
        localStorage.setItem('popular',JSON.stringify(data.recipes))
        setPopluar(data.recipes)
      }
      
    }
    getPopular()


  }, [])


  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:"free",
          gap:"2rem"
        }}>
          {popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient/>
              </Card>
            </SplideSlide>
          ))}

        </Splide>
      </Wrapper>


    </div>
  )
}

const Wrapper = styled.div`
margin:2rem 0rem ;

`

const Card = styled.div`
min-height:20rem;

/* border-radius: 2rem ; */
overflow: hidden;
position: relative;

img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
border-radius: 2rem;
height: 100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`




export default Popular