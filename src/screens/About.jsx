import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Box ,Typography, styled} from '@mui/material'



const AboutSection=styled(Box)(({theme})=>({
    width:"100vw",
    height:"40rem",
    backgroundColor:theme.palette.secondary.main


}))

export const About = () => {
  return (
    <>
    <Navbar/>

    <AboutSection></AboutSection>

    <Footer/>
    </>
  )
}
