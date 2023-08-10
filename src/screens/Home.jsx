import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Box, styled,Typography,Stack,Grid} from '@mui/material'
import Catalog from '../assets/Catalog.svg'
import theme from '../theme'
import { Cards } from '../components/Cards'
import landing from '../assets/landing.svg'
import usp from '../assets/usp.svg'
import Lottie from 'lottie-react'
import truck from '../assets/animations/truck.json'
import VanillaTilt from 'vanilla-tilt'
import { ProductCards } from '../components/ProductCards'
import SphericalRollerBearing from '../assets/bearingspng/SphericalRollerBearing.png'
import CylindricalRollerBearing from '../assets/bearingspng/CylindricalRollerBearing.png'
import { ProductStack } from '../components/ProductStack'


const MainSection=styled('main')({
    width:"100vw",
    backgroundColor:"red",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    flexDirection:"column"
})

const LandingSection=styled(Box)(({theme})=>({
    width:"100%",
    height:'52rem',
    color:theme.palette.fontColor.light,
    backgroundColor:theme.palette.secondary.main,
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:"row",
    padding:"4rem 17vw",
    backgroundImage:`url(${landing})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    // aspectRatio:"1000/600",
    backgroundPositionY:"+40%",
    flexWrap:"wrap",

}))

const UspSection=styled(Box)(({theme})=>({
    color:theme.palette.fontColor.light,
    backgroundColor:theme.palette.primary.main,
    width:"100%",
    display:'flex',
    padding:"4rem 2rem",
    flexDirection:"column",
    justifyContent:'flex-start',
    alignItems:"center",
    // backgroundImage:`url(${usp})`,
    // backgroundRepeat:"no-repeat",
    // backgroundSize:"cover",

}))


const CatalogSection=styled('section')(({theme})=>({
    backgroundColor:theme.palette.secondary.main,
    width:"100%",
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    backgroundImage:`url(${Catalog})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    flexDirection:"column"
}))





export const Home = () => {


    useEffect(()=>{
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.1,
          });
    },[])
  return (
    <>
    <Navbar/>

    <MainSection>
        
        <LandingSection>

            <Stack flex={1}>
            <Typography fontWeight={800} variant='h4'>DISCOVER THE POWER OF PRECISION</Typography>
            <Typography gutterBottom variant='h5'>Unparralled Quality and Performance</Typography>
            <Typography variant='p'>Experience the difference of our visionary approach as we provide cutting-edge solutions through our premium quality bearings</Typography>
            </Stack>

            <Stack flex={1}>
                <Lottie width={'5rem'} animationData={truck}></Lottie>

            </Stack>

        </LandingSection>

        <UspSection>
            <Typography variant='h4' fontWeight={800}>Why Choose Our Bearings</Typography>

            <Grid padding={3} mt={3} container width={'100%'} height={"100%"} rowGap={4} columnGap={4} justifyContent={'center'} alignContent={'center'}>
                <Grid className='card' item><Cards title={"Connecting the Globe through Quality"} content={"Unique Engineering company's GlobalVoyage"} img={"https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=1600"}/></Grid>
                <Grid className='card' item><Cards title={"A Global Stamp of Trust:"} content={"Empowering Industries Around the World"} img={"data:image/jpeg;base64,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"}/></Grid>
                <Grid className='card' item><Cards title={"Reliable Stock, Unbeatable Supply:"} content={"Uninterrupted Availability for Your Demands"} img={"https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1600"}/></Grid>
                <Grid className='card' item><Cards title={"Quality Redefined:"} content={"Discover the exceptional quality of our premium bearings"} img={"https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600"}/></Grid>
            </Grid>

        </UspSection>

        <CatalogSection>
            
            <Typography mb={20} gutterBottom mt={6} color={theme.palette.fontColor.light} variant='h3' fontWeight={"300"}>Explore Our Versatile Range</Typography>
            
            <ProductStack name={"Spherical Roller Bearings"} desc={"Experince the epitome of perfomance wiht uec's exceptiona range of spherical roller bearings. Engiinred to exel in even the most demanding industrial application, our bearings deliver unparallred realiabilty, longivity and accuracy. built with carful attentation to detail ,  uec ensuers every bearings exceedcs industry standards, delivering unmatched strength and smooth operation. Engineered to against heavy loads and harsh envirmonets, our spherial roller bearings gurantee optimal perforamnce, minimize downtime ,maximise prodictivity.With UEC, you can trust that your machinery will operate at its peak, backed by our commitemetn to uncompromiosing quality. Elevate your machinery performacne with UEC's spherical roller breaings - just made for you"} img={SphericalRollerBearing}/>
            <ProductStack name={"Cylindrical Roller Bearings"} desc={"Experince the epitome of perfomance wiht uec's exceptiona range of spherical roller bearings. Engiinred to exel in even the most demanding industrial application, our bearings deliver unparallred realiabilty, longivity and accuracy. built with carful attentation to detail ,  uec ensuers every bearings exceedcs industry standards, delivering unmatched strength and smooth operation. Engineered to against heavy loads and harsh envirmonets, our spherial roller bearings gurantee optimal perforamnce, minimize downtime ,maximise prodictivity.With UEC, you can trust that your machinery will operate at its peak, backed by our commitemetn to uncompromiosing quality. Elevate your machinery performacne with UEC's spherical roller breaings - just made for you"} img={CylindricalRollerBearing}/>
            <ProductStack name={"Taper Roller Bearings"} desc={"Experince the epitome of perfomance wiht uec's exceptiona range of spherical roller bearings. Engiinred to exel in even the most demanding industrial application, our bearings deliver unparallred realiabilty, longivity and accuracy. built with carful attentation to detail ,  uec ensuers every bearings exceedcs industry standards, delivering unmatched strength and smooth operation. Engineered to against heavy loads and harsh envirmonets, our spherial roller bearings gurantee optimal perforamnce, minimize downtime ,maximise prodictivity.With UEC, you can trust that your machinery will operate at its peak, backed by our commitemetn to uncompromiosing quality. Elevate your machinery performacne with UEC's spherical roller breaings - just made for you"} img={SphericalRollerBearing}/>
            <ProductStack name={"Ball Roller Bearings"} desc={"Experince the epitome of perfomance wiht uec's exceptiona range of spherical roller bearings. Engiinred to exel in even the most demanding industrial application, our bearings deliver unparallred realiabilty, longivity and accuracy. built with carful attentation to detail ,  uec ensuers every bearings exceedcs industry standards, delivering unmatched strength and smooth operation. Engineered to against heavy loads and harsh envirmonets, our spherial roller bearings gurantee optimal perforamnce, minimize downtime ,maximise prodictivity.With UEC, you can trust that your machinery will operate at its peak, backed by our commitemetn to uncompromiosing quality. Elevate your machinery performacne with UEC's spherical roller breaings - just made for you"} img={SphericalRollerBearing}/>
            <ProductStack name={"Thrust Roller Bearings"} desc={"Experince the epitome of perfomance wiht uec's exceptiona range of spherical roller bearings. Engiinred to exel in even the most demanding industrial application, our bearings deliver unparallred realiabilty, longivity and accuracy. built with carful attentation to detail ,  uec ensuers every bearings exceedcs industry standards, delivering unmatched strength and smooth operation. Engineered to against heavy loads and harsh envirmonets, our spherial roller bearings gurantee optimal perforamnce, minimize downtime ,maximise prodictivity.With UEC, you can trust that your machinery will operate at its peak, backed by our commitemetn to uncompromiosing quality. Elevate your machinery performacne with UEC's spherical roller breaings - just made for you"} img={SphericalRollerBearing}/>
                 
        </CatalogSection>

    </MainSection>

    <Footer/>
    
    </>
  )
}
