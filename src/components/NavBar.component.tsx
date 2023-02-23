import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomButton from "./Button.component";
import CustomText from "./Text.component";

interface NavbarProps {
  logo: string;
  menuOptions: Readonly<{ name: string; path: string }[]>;
  buttonLabel: string;
  onButtonClick: () => void;
}

const Navbar = ({ logo, menuOptions, buttonLabel, onButtonClick }: NavbarProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding="1.5rem"
      bg="#eef4ff"
      color="white"
      pl ='32'
      pr='32'
      zIndex={`10`}
    //   height='8em'
    position="sticky" top="0" left="0" w="100%"
    >
      <Flex align="center" mr={8}>
        {/*     cursor: pointer;
    max-width: 157px;
    margin-top: auto;
    margin-bottom: auto; */}
        <Box
        cursor='pointer'
         as="img" src={logo}  alt="Logo" width="157px" mr={2} />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={() => console.log("Clicked!")}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
        </svg>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {menuOptions.map(({ name, path }) => (
          <Link key={path} to = {path}
          >
            <Box
              cursor="pointer"
            //   fontWeight="bold"
              display="block"
              px={8}
              py={2}
              rounded="md"
              color='black'
            //   _hover={{ bg: "gray.800" }}
            >
              {name}
            </Box>
          </Link>
        ))}
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <Flex
        alignItems={'center'}
        justify={'space-between'}
        >
        <CustomText pr={4} cursor={'pointer'} children = 'Login' />
        <CustomButton
        children = {'Get Started'}
        />
        <CustomText fontWeight= 'bold' pl={'2'} cursor={'pointer'} children = 'NG' />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;