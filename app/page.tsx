'use client'
import Image from 'next/image'
import Link from 'next/link'
import Veggie from './veggie/page'
import Popular from './popular/page'
import styled from 'styled-components'
import Category from "./category/page"
import Search from "./search/page"



export default function Home() {
  
  
  return (
    <>
    <Search/>
    <Category/> 
 <Main>
  <Veggie/>
   <Popular/>
     
 </Main>
    </>
  )
}

const Main = styled.main`
  margin: 0% 20%;
`

