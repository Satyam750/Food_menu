// 'use client'
// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import {motion} from "framer-motion"
// import { useParams } from 'next/navigation'
// import Link from 'next/link'


// const Cuisine = () => {
//     const [cuisine, setCuisine] = useState([])
//     let params = useParams();
//     const getCuisine = async(name)=>{
//         const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=beb7f221e230436bba918adc771bc684&cuisine=${name}`)
//         const recipes = await data.json()
//         setCuisine(recipes.results)

//     }


//     useEffect(()=>{
// //   getCuisine('italian')
// // console.log(params);
//     },[])
//   return (
//     <div>Cusine</div>
//   )
// }

// export default Cuisine