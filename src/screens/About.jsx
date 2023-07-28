import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Box ,Typography, styled,Stack} from '@mui/material'
import { m } from 'framer-motion'
import theme from '../theme'
import about from '../assets/about.svg'
import about2 from '../assets/about2.svg'
import { Accordians } from '../components/Accordians'



const AboutSection=styled('section')(({theme})=>({
    width:"100vw",
    display:'flex',
    justifyContent:"flex-start",
    alignItems:"center",
    color:theme.palette.fontColor.light,
    flexDirection:"column",
    backgroundColor:theme.palette.secondary.main

}))
const AboutHeadingContainer=styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
}))


export const About = () => {
  return (
    <>
    <Navbar/>

    <AboutSection>
        <AboutHeadingContainer>

            <Typography mt={5} fontSize={'2rem'} fontWeight={"600"}  variant='h6'>Know About Us</Typography>
            <Typography fontSize={"1rem"} fontWeight={"100"}>Where engineering meets performance!</Typography>
        
        </AboutHeadingContainer>
        

        <Stack width={'100vw'} mt={6} spacing={3} padding={'1rem 12vw'} alignItems={'center'} justifyContent={"flex-start"} fontSize={'1.25rem'} lineHeight={1.8} >

            <Stack spacing={3} bgcolor={theme.palette.primary.main} padding={6} borderRadius={'.8rem'}>
            <Typography  variant='p'>Welcome to Unique Engineeirng Company (UEC), the epitome of engineering excellence and your ultimate destination for quality bearings. As a name synonymous with power,precision,and innovation , UEC stands tall as as a symbol of unwavering commitement and reliability in bearings</Typography>
            <Typography  variant='p'>At UEC we pride ourselves on our relentless pursuit of perfection , making every bearing a word of incredible skill and craftsmanship.Our unparalleled commitment to quality ensures that every UEC bearing exceeds industry standards,setting new benchmarks that dazzle our competitors.</Typography>
            <Typography  variant='p'>When you choose UEC, you are not just choosing a product, You envision a relationship built on trust and confidence. Our team of passsionate engineers and industry experts are committed to understanding you unique needs, enabling us to provide customized bearing silutions that take your machine to new levels of high performance</Typography>
            </Stack>

            <Stack spacing={3} bgcolor={theme.palette.primary.main} padding={6} borderRadius={'.8rem'}>
            <Typography variant='p'>From the moment you work with UEC, you will witness the unwavering trust that comes from our brand. We stand firm as your steadfast partner, empowering you to overcome challenges and exceed expectations with ease. Our bearing variety froms the backbone of you operations , enabling your devices to perform at peak levels, day after day, without interruption.</Typography>
            <Typography variant='p'>As the industrs choice, UEC holds the beacon of innovation and stes the standard for others to follow. Our state of-the-art technology, coupled with our unwavering attentation to detail, ensures that every UEC bearing is techinically proven.</Typography>
            <Typography variant='p'>So, step into world of UEC where relationships are valued and premimum quality bearings are a given. Join us on this unique defines excellence in every room.</Typography>
            </Stack>

            <Stack >
                <Accordians summary={'Mission'} content={"At Unique Engineering Company (UEC), our mission is to revolutionise the bearing industry by building unbreakable relationships with customers and providing them with the highest quality bearings at incredibly affordable prices. We strive to be a model of excellence, setting new standards for technical accuracy and ensuring that customer satisfaction remain our top priority"}/>
                <Accordians summary={'Vision'} content={"Our Vision at UEC is to be the undisputed leader in the bearing industry, known for our firece commitment to building long-term relationships with our valied customers. We envision a future where quality bearings are available to everyone, and we overcome the barriers to affordabiliyt without conmpromising excellence. Through relentless innovation and a relentless drive to exceed expectations, we aim to rehspa the industry landscape and be the go- to customers looking for exceptional bearings at affordable prices"}/>
            </Stack>

        
        </Stack>


    </AboutSection>



    <Footer/>
    </>
  )
}
