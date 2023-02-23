import { title } from 'process';
import React from 'react';
// import Footer from './components/Footer.component';
import Navbar from './components/NavBar.component';
import PricingMain from './pages/PricingBody/PricingMain';
import Footer from './pages/PricingFooter/PricingFooter';
// import PricingFooter from './pages/PricingFooter/PricingFooter';

function App() {
  type Options = {
    name: string
    path: string
  }[]
  const menuOptions: Readonly<Options> = [
    { name: "Home", path: "#" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
  ];

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Navbar
        logo="https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/logos/NavLogo_nhyqah.svg"
        menuOptions={menuOptions}
        buttonLabel="Sign In"
        onButtonClick={handleButtonClick}
      />
      <PricingMain />
      <Footer/>
    </div>
  )
}

export default App;