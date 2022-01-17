import React from 'react';
import {
    Center,
    VStack,
    Container,
    Heading,
    Text,
    Button,
    Link
} from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Container height={100}>
            <Center pt={400}>
                <VStack>
                    <Heading>404 Not Found</Heading>
                    <Text fontSize={"xl"}>Hi I am a 404 error, please return back to the home page</Text>
                    <Button><Link href="/">Return Home</Link></Button>
                </VStack>
            </Center>
        </Container>
    )
}

export default NotFound;
