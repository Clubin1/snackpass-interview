import { React } from 'react';
import { 
    Heading, 
    Center, 
    Container, 
    HStack, 
    VStack, 
    Text
} from '@chakra-ui/react';

const Landing = ({title, info}) => {

    const BGgradient = "linear-gradient(-135deg,rgb(0,42,135) 25%,rgb(147,64,255) 100%)";
    const logoURL = "https://www.pngall.com/wp-content/uploads/2016/03/Food-Free-Download-PNG.png";

    return(
        <Center bg={BGgradient} h="60vh">
            <Container maxW="4xl">
                <HStack spacing={2}>
                    <VStack spacing={3}>
                        <Heading color="white.100">{title}</Heading>
                        <Text color="white.100">{info}</Text>
                    </VStack>
                    <img height="200px" alt="Landing" width="200px" src={logoURL}></img>
                </HStack>
            </Container>
        </Center>
    )
}

export default Landing;