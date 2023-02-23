import { Box, Flex, Text, Link, Image, LinkProps, BoxProps, ImageProps } from "@chakra-ui/react";
import styled from "@emotion/styled";


const Footer: React.FC = () => {
  return (
    <Box
    bg={`#0D253F`}
    color ={`white`}
    padding={'8rem 8rem'}
    // display={`grid`}
     as="footer" py={8}>
      <Flex direction={['column', 'column']} justify="space-between">
        {/* First row */}
        <Flex direction={`row`} justify='space-between' flexWrap="wrap">
          <Flex direction="column" mr={[0, 0, 8]} mb={4}>
            <Text fontWeight="bold" color={'rgba(255,255,255,.56)'} mb={4}>Products</Text>
            <StyledLink href="#" mb={2}>Channels / Router</StyledLink>
            <StyledLink href="#" mb={2}>Verification</StyledLink>
            <StyledLink href="#" mb={2}>No-Code Tools</StyledLink>
            {/* <StyledLink href="#" mb={2}>Link 4</StyledLink> */}
          </Flex>
          <Flex direction="column"  mr={[0, 0, 8]} mb={4}>
            <Text fontWeight="bold"  color={'rgba(255,255,255,.56)'} mb={4}>Solutions</Text>
            <StyledLink href="#" mb={2}>Onboard</StyledLink>
            <StyledLink href="#" mb={2}>Engage</StyledLink>
            <StyledLink href="#" mb={2}>Support</StyledLink>
            <StyledLink href="#" mb={2}>Retain</StyledLink>
          </Flex>
          <Flex direction="column"  mr={[0, 0, 8]} mb={4}>
            <Text fontWeight="bold" color={'rgba(255,255,255,.56)'} mb={4}>Resources</Text>
            <StyledLink href="#" mb={2}>Developers</StyledLink>
            <StyledLink href="#" mb={2}>API Reference</StyledLink>
            <StyledLink href="#" mb={2}>Guides</StyledLink>
            <StyledLink href="#" mb={2}>SDKs/Libraries</StyledLink>
            <StyledLink href="#" mb={2}>Community</StyledLink>
            <StyledLink href="#" mb={2}>Status Page</StyledLink>
            <StyledLink href="#" mb={2}>Pricing</StyledLink>
          </Flex>
          <Flex direction="column"  mr={[0, 0, 8]} mb={4}>
            <Text fontWeight="bold" color={'rgba(255,255,255,.56)'} mb={4}>Company</Text>
            <StyledLink href="#" mb={2}>About Us</StyledLink>
            <StyledLink href="#" mb={2}>Our Stories</StyledLink>
            <StyledLink href="#" mb={2}>Careers</StyledLink>
            <StyledLink href="#" mb={2}>Contact</StyledLink>
          </Flex>
          <Flex direction="column" mr={[0, 0, 8]} mb={4}>
            <Text fontWeight="bold"  color={'rgba(255,255,255,.56)'}  mb={4}>Follow Us</Text>
            <StyledLink href="#" mb={2}>Twitter</StyledLink>
            <StyledLink href="#" mb={2}>LinkedIn</StyledLink>
            <StyledLink href="#" mb={2}>Facebook</StyledLink>
            <StyledLink href="#" mb={2}>Instagram</StyledLink>
          </Flex>
          <Flex direction="column"  mb={4}>
            <Text fontWeight="bold" color={'rgba(255,255,255,.56)'} mb={4}>Contact Us</Text>
            <StyledLink href="#" mb={2}>+234(0)18880261</StyledLink>
            <StyledLink href="#" mb={2}>sales@sendchamp.com</StyledLink>
            <StyledLink href="#" mb={2}>help@sendchamp.com</StyledLink>
            {/* <Link href="#" mb={2}>Contact</StyledLink> */}
          </Flex>
        </Flex>

        {/* Second row */}
        <Flex borderTop={`solid 1px rgba(255,255,255,.24)`} borderBottom = {`solid 1px rgba(255,255,255,.24)`}  direction='row' justify= 'space-between' mt={[4, 4, 0]}>
          <Flex direction="row"
           mr = {[0, 0, 8]} mb={4}>
            <Box

        cursor='pointer'
         as="img" src="https://res.cloudinary.com/sendchamp/image/upload/v1647472665/Sendchamp%20Website/logos/SendchampWhite_kelitk.svg"  alt="Logo" w={'75%'}  mr={2} />
            {/* <Text fontWeight="bold" mb={4}>Column 1</Text> */}
        </Flex>
        <Flex direction="row" alignItems={'center'} mr={[0, 0, 8]} mb={4}>
        <StyledImage
         src = "https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/homePage/Nigeria_xxb47e.svg" alt="logo" w="36%" h="36%" />
        <Text fontWeight="bold">142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria</Text>
        </Flex>
        <Flex direction="row" alignItems={'center'} mr={[0, 0, 8]} mb={4}>
        <StyledImage src="https://res.cloudinary.com/sendchamp/image/upload/v1647472668/Sendchamp%20Website/homePage/USA_ths9a7.svg" alt="logo" w="36%" h="36%" />
        <Text fontWeight="bold">2055 Limestone Rd STE 200-C Wilmington,DE 19808</Text> 
        </Flex>
        </Flex>
        {/* Third row */}
        <Flex direction={['column', 'column', 'row']} justify="center" mt={[4, 4, 8]}>
          <Box textAlign="center">
            <Text fontSize="md" mb={2}>Built with ❤️ at Sendchamp Inc. - © 2023 | All rights reserved</Text>
            {/* <Text fontSize="sm">All rights reserved.</Text> */}
          </Box>
        </Flex>
  </Flex>
</Box>
);
};

export default Footer;

interface StyledLinkProps extends LinkProps{}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none !important;

  &:hover{
    color: rgba(255, 255, 255, 0.64) !important;
  }
`;

interface StyledImageProps extends ImageProps{}

const StyledImage = styled(Image)<StyledImageProps>`
  text-decoration: none !important;
  @media(max-width: 1022px){
    display: none;
  }

`;
