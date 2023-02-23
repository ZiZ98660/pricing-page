import React from 'react'
import { Box, Flex, SimpleGrid} from "@chakra-ui/react";
import CustomText from '../../../components/Text.component';
import CustomSelect from '../../../components/Select.component';


const MainHead = () => {
  type Options = {
    readonly label: string
    readonly value: string
  }
  const countryFullNameOptions: Options[] = 
    [
      { label: 'Nigeria', value: 'option1' },
      { label: 'Egypt', value: 'option2' },
      { label: 'Canada', value: 'option3' },
      { label: 'United Kingdom', value: 'option4' },
      { label: 'New Zealand', value: 'option5' },
    ]
  const countryAbbreviatedOptions: Options[] = 
    [
      { label: 'NGA', value: 'option1' },
      { label: 'EGY', value: 'option2' },
      { label: 'CAN', value: 'option3' },
      { label: 'UK', value: 'option4' },
      { label: 'NZA', value: 'option5' },
    ]

  return (
    <Box
    minHeight={'55vh'}
    bg='#eef4fe'
    padding={'6rem 8rem'}
    wordBreak ='break-word'
    zIndex={`0`}
    position = 'relative'
    >
      <SimpleGrid
      placeItems={'center'}
      >
        <CustomText
        fontWeight='bold'
        fontSize='3rem'
        lineHeight='52px'
        children = {`Pricing for every business`}
        />
        <CustomText
        wordBreak={`break-word`}
        fontSize={`1.125em`}
        lineHeight={`28px`}
        mt={`8`}
        children = {`No hidden fees or charges - simple & flexible pricing that fits with your business at any stage.`}
        />
        <Flex
        mt={`12`}
        justify={`space-between`}
        >
          <CustomSelect 
          
          options={countryFullNameOptions}
          />
          <CustomSelect
          options={countryAbbreviatedOptions}
          />
        </Flex>
      </SimpleGrid>
      
    </Box>
  )
}

export default MainHead