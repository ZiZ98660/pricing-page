import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      bg="gray.800"
      color="white"
      as="footer"
      mt="auto"
      py={{ base: "8", md: "12" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        maxW={{ xl: "1200px" }}
        mx="auto"
        pb={{ base: "8", md: "0" }}
      >
        <Flex flex="4" direction={{ base: "column", md: "row" }}>

          <Flex
            flex={{ base: "1", md: "none" }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "start", md: "center" }}
            justifyContent={'space-between'}
            mb={{ base: "4", md: "0" }}
          >
            <Box
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
              mr={{ base: "4", md: "8" }}
            >
              <Text>About</Text>
              <Text>Contact</Text>
              <Text>Blog</Text>
              <Text>Careers</Text>
              <Text>Partners</Text>
            </Box>
            <Box
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
              mr={{ base: "4", md: "8" }}
            >
              <Text>Support</Text>
              <Text>Privacy Policy</Text>
              <Text>Terms of Use</Text>
              <Text>FAQ</Text>
              <Text>Shipping Policy</Text>
            </Box>
            <Box fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              <Text>Testimonials</Text>
              <Text>Newsletter</Text>
              <Text>Refund Policy</Text>
              <Text>Site Map</Text>
              <Text>Accessibility Statement</Text>
            </Box>
            <Box fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              <Text>Testimonials</Text>
              <Text>Newsletter</Text>
              <Text>Refund Policy</Text>
              <Text>Site Map</Text>
              <Text>Accessibility Statement</Text>
            </Box>
            <Box fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              <Text>Testimonials</Text>
              <Text>Newsletter</Text>
              <Text>Refund Policy</Text>
              <Text>Site Map</Text>
              <Text>Accessibility Statement</Text>
            </Box>
            <Box fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              <Text>Testimonials</Text>
              <Text>Newsletter</Text>
              <Text>Refund Policy</Text>
              <Text>Site Map</Text>
              <Text>Accessibility Statement</Text>
            </Box>
          </Flex>
        </Flex>

    </Flex>

</Box>
  )
}

export default Footer