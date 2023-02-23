import React from 'react'
import { Box, Flex, SimpleGrid, Button} from "@chakra-ui/react";
import CustomText from '../../../components/Text.component';
import CardContainer from '../../../components/CardContainer.component';
import sms from '../../../assets/svgs/sms.svg';
import voice from '../../../assets/svgs/voice.svg';
import email from '../../../assets/svgs/email.svg';
import verifyLogo from '../../../assets/svgs/verify.svg';
import whatsapp from '../../../assets/svgs/whatsapp.svg';
import CustomButton from '../../../components/Button.component';
import CustomSection from '../../../components/Section.component';

const MainBody = () => {
    const cards = [
        {
          logo: sms,
          title: "SMS",
          flex: true,
          tag: true,
          text1: "To Send SMS",
          text2: "To Receive SMS",
          text3: 'Not Available/sms',
          text4: 'Coming soon',
          footer: 'Read More',
        },
        {
          logo: voice,
          title: "Voice",
          flex: true,
          tag: true,
          text1: "To Make Calls",
          text2: "To Receive Calls",
          text3: 'NGN NaN/sec',
          text4: 'Coming soon',
        //   footer: <Button>Click Me</Button>,
        },
        {
          logo: email,
          title: "Email",
          text1: "Price/mail",
          text2: "Not Available/Mail",
        //   footer: <Button>Click Me</Button>,
        },
        {
          logo: verifyLogo,
          title: "Verification",
          flex: true,
          text1: "To Send OTP",
          text2: "To Confirm OTP",
          text3: 'NGN 0.0000/OTP',
          text4: 'NGN 0.7000/OTP',
        //   footer: <Button>Click Me</Button>,
        },
        {
          logo: whatsapp,
          title: "Whatsapp",
          flex: true,
          text1: "To Send Text Message",
          text2: "To Receive Message",
          text3: 'NGN 3.5000/msg',
          text4: 'NGN 0.0000/msg',
          footer: 'More details',
        },
      ];
  return (
    <Box
    style={{
        wordWrap: 'break-word',
    }}
    >
       <CardContainer      
       cards={cards}
       /> 
        <CustomSection
        title='Sendchamp for Startups'
        subTitle='Apply for $1,000 in credits, if you are a startup that is less than 3 years old with less than $500k in total funding.'
        secBg='#EDF5FE'
        buttonLabel='Apply Now'
        />
        <CustomSection
        title='Start building better communication experience with Sendchamp'
        subTitle='Access a platform that is modernizing communications and making it possible for your customers to communicate with your business the same way they do with their friends and family.'
        secBg='white'
        button2= {true}
        buttonLabel='Start for free'
        buttonLabel2='Talk to sales'
        />
    </Box>
  )
}

export default MainBody