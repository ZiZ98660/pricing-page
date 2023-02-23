import React from 'react'
import { Box, Flex, SimpleGrid, Button} from "@chakra-ui/react";
import CustomText from './Text.component';
import CustomButton from './Button.component';


interface SectionProps {
    title: string;
    // menuOptions: Readonly<{ name: string; path: string }[]>;
    buttonLabel?: string;
    subTitle: string
    secBg?: string
    // dualButtons?: boolean
    button2?: boolean
    altBtnBg?: string
    buttonLabel2?:string
    altBtnStyle?:string
  }

const CustomSection = ({ title, buttonLabel, subTitle, secBg, button2, altBtnBg, buttonLabel2, altBtnStyle}: SectionProps) => {
  return (
    <Box
    style={{
        wordWrap: 'break-word'
    }}
    display={`grid`}
    placeItems={`center`}
    bg={secBg}
    p={`32`}
    px = {`29.7em`}
    placeContent = {'center'}
    >
    <CustomText
    // pt={`4`}
    textAlign={`center`}
    fontWeight='bold'
    fontSize='2rem'
    // lineHeight='52px'
    children = {title}
    />
    <CustomText
    pt = {`8`}
    fontSize= {`1.125rem`}
    textAlign ='center'
    wordBreak={`break-all`}
    children= {subTitle}
     />
  
     <Flex
     justify={button2 ? `space-between`: ''}
     >
     <CustomButton
     mt={`16`}
     p={`8`}
     children= {buttonLabel}
     />
     
{ button2 &&  
    
     <CustomButton
     style={altBtnStyle}
     mt={`16`}
     ml={`4`}
     p={`8`}
     children= {buttonLabel2}
     bg={altBtnBg || 'white'}
     border={`1px grey solid`}
    //  _hover='none'
    variant= 'secondary'
    //  color={`grey`}
     />}
     </Flex>
    
    </Box>
  )
}

export default CustomSection