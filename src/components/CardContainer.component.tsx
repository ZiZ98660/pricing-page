// import React from 'react';
// import { Box, Flex, SimpleGrid, SimpleGridProps, Text } from '@chakra-ui/react';

// interface CardData {
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// interface Props extends SimpleGridProps {
//   cards: CardData[];
//   cardAspectRatio?: number;
// }

// function CardContainer({ cards, cardAspectRatio = 4 / 3, ...rest }: Props) {
//   const cardWidth = { base: '100%', sm: '50%', md: '33.33%', lg: '25%' };
//   const cardHeight = { base: '200px', md: `${cardAspectRatio * 100}%` };

//   return (
//     <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8} {...rest}>
//       {cards.map((card) => (
//         <Box key={card.title} bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
//           <Box h={cardHeight} w= {cardWidth} bg="gray.200" bgImage={`url(${card.imageUrl})`} bgSize="cover" />
//           <Box p={4}>
//             <Text fontSize="xl" fontWeight="semibold" mb={2}>
//               {card.title}
//             </Text>
//             <Text fontSize="md">{card.description}</Text>
//           </Box>
//         </Box>
//       ))}
//     </SimpleGrid>
//   );
// }

// export default CardContainer;
import { Box, Flex, Heading, Text, Image, Tag,  SimpleGrid, Button, BoxProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
// import { BooleanLiteral } from "typescript";

type CardProps = {
  logo: string;
  title: string;
  text1: string;
  text2?: string;
  text4?: string
  text3?: string
  flex?: boolean;
  tag?: boolean
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
    logo,
    title,
    text1,
    text2,
    text3,
    text4,
    flex,
    footer,
    tag
}) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="blue.500"
      borderRadius="12px"
      overflow="hidden"
      maxW="md"
      w="full"
      h="full"
      
    >
        <Box
        m={4}
        mt={10}
        ml= {10}
        width={`64px`}
        height = {`64px`}
        display={`grid`}
        placeItems={`center`}
        bg={`blue.400`}
        borderRadius = {`md`}
        >
         <Image src={logo} alt="logo" w="50%" h="50%" />
        </Box>

      <Box px={10} py={2}>
        <Heading as="h3" fontSize="lg" textAlign="left" mt={`2`} mb={`4`}>
          {title}
        </Heading>

        {flex ? (
            <>
          <Flex flexDirection="row" justifyContent="space-between">
            <Text textAlign="center">{text1}</Text>
            <Text textAlign="center">{text2}</Text>
          </Flex>
         { (text3 && text4) && 
         <Flex flexDirection="row" justifyContent="space-between">
           
            <Text textAlign='center'>
                {text3}
            </Text>
            { tag ? 
            <Tag
            bg={`rgba(25, 126, 239, 0.08)`}
            color = {`#197EEF`}
            borderRadius = '2xl'
             textAlign="center">{text4}</Tag>
            : 
            <Text textAlign='center'>
                {text4}
            </Text>
            }         
          </Flex>}
          </>

        ) : (
          <>
            <Text textAlign="left">{text1}</Text>
            {text2 && <Text textAlign="left">{text2}</Text>}
          </>
        )}
      </Box>

      {footer && <Box 
      borderTop={`1px solid #3182ce`}
      mt={4} ><Button p={`4`} w={`full`} h={`full`} textDecoration={`underline`}> {footer}</Button></Box>}
    </Box>
  );
};

// export default Card;

type CardData = {
    logo: string;
    title: string;
    text1: string;
    text2?: string;
    text3?: string;
    text4?: string;
    flex?: boolean
    tag?: boolean
    footer?: React.ReactNode;
  };
  
  type CardContainerProps = {
    cards: CardData[];
    flex?: boolean;
    tag?: boolean
    pullY?: string
  };
  
  const CardContainer: React.FC<CardContainerProps> = ({ cards, flex, tag, pullY }) => {
    return (
      <StyledBox maxW="7xl" mx="auto" px={4} py={16} >
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {cards.map((card, index) => (
            <Card key={index} {...card}  />
          ))}
        </SimpleGrid>
      </StyledBox>
    );
  };
  
  export default CardContainer;

  interface CustomBoxProps extends BoxProps {}

export const StyledBox = styled(Box)<CustomBoxProps>`
    transform: translateY(-7em);
`;
 