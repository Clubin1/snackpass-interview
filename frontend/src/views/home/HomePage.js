import React from 'react';
import {
    Center,
    VStack,
    Container,
    Heading,
    Text,
    Button
} from '@chakra-ui/react';
import { CodeBlock, nord} from 'react-code-blocks';
import text from './code';

const Landing = () => {
    return (
        <Container id="more" height={100}>
            <Center pt={400}>
                <VStack>
                    <Heading textAlign={"center"}>Documentation and Solution</Heading>
                    <Text textAlign={"center"} fontSize={"xl"}>This page has some documentation of the biggest problems faced,
                     code snippets and explanation of my solution</Text>
                    <Button><a href="#more">Read More Below</a></Button>
                </VStack>
            </Center>
        </Container>
    );
}

const MyApproach = () => {
    return (
        <>
        <Container height={100} pt={1000} pb={200}>
            <VStack spacing={5}>
                <Heading textAlign={"center"}>Backend Approach (/api/orders) </Heading>
                <Text width={'58rem'} textAlign={"left"} fontSize={"xl"}> My approach involved the MERN stack. I used express router to create 
                    /api/orders which the frontend makes a GET requests to. /api/orders reads the xlsx file then loops through each item to add a 
                    new key value pair for numPurchased, numOccurences and an image url. These values are randomized everytime a call is made, so a refresh
                    will yeild new results. The resulting data structure is sent to the frontend.
                </Text>
                <CodeBlock
                    text={text.apiCall}
                    language="javascript"
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={nord}
                />
            </VStack>
        </Container>

        <Container height={100} pt={800} pb={500}>
            <VStack spacing={5}>
                <Heading textAlign={"center"}>Frontend Approach</Heading>
                <Text width={'58rem'} textAlign={"left"} fontSize={"xl"}> 
                    The backend of the project was simple to setup. I encountered most of my challenges
                    while developing the frontend. While I was able to send the data effectively, I had troubles with
                    handling the big data and the infinite scrolling. My approach has two different response states, one that 
                    holds the entire axios response, and another that only holds the first 10 items. This was done to 
                    prevent the page from overloading the device and rendering thousands of items at once. All of the items are contained in a container, and the app 
                    renders more items depending on if the bottom of the container is reached. Only the first 10 items are 
                    sorted, as if the entire response was sorted there would be thousands of items with the same attributes. I kept
                    it the way it was so the variety between items can be showcased and the sorting can still be seen in the first 10 items.
                    The drawback is that since I am making a get request
                    without any limits, the initial load of the page is slow. Below is the entire code for the Response.js component, and the further
                    sections split it up. 
                </Text>
                <CodeBlock
                    text={text.total}
                    language="javascript"
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={nord}
                />
            </VStack>
        </Container>
        <Container height={100} pt={3000} pb={500}>
            <VStack spacing={5}>
                <Heading textAlign={"center"}>Frontend Response.js Setup</Heading>
                <Text width={'58rem'} textAlign={"left"} fontSize={"xl"}>The Response component is where we do our axios call and display our results.
                    The component is using 4 different states and a refrence. displayData
                    holds all of the items that are currently being displayed at any given moment. totalReponse holds the entire api response, loading 
                    helps us determine when the call is finished, error holds any API errors and lastly listInnerRef is used to determine if the user has scrolled
                    to the bottom of an element.
                </Text>
                <CodeBlock
                    text={text.setup}
                    language="javascript"
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={nord}
                />
            </VStack>
        </Container>

        <Container height={100} pt={500} pb={500}>
            <VStack spacing={5}>
                <Heading textAlign={"center"}>Frontend API Fetch</Heading>
                <Text width={'58rem'} textAlign={"left"} fontSize={"xl"}> 
                    When the component loads, fetchData runs which asynchronously makes a call to the backend route. There is a try catch block, which attempts
                    to make a call. If the call is made, the response is converted from an object to an array, then the first 10 items are added to displayData. Before 
                    being set to the state, the data is sorted based off of recency and the number of times the item has been purchased. If there was an error, it is caught
                    and the error is saved into the error state.
                </Text>
                <CodeBlock
                    text={text.useEffect}
                    language="javascript"
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={nord}
                />
            </VStack>
        </Container>

        <Container height={100} pt={900} pb={500}>
            <VStack spacing={5}>
                <Heading textAlign={"center"}>Frontend Infinite Scroll</Heading>
                <Text width={'58rem'} textAlign={"left"} fontSize={"xl"}> The infinite scroll effect is done by loading another 10 items from the totalResponse
                    state everytime the bottom of the container is reached. When reached, numToAdd is saved in a temp variable and buildObject holds the object we are adding.
                    A for loop is then ran that runs from temp - numToAdd adding every item from the totalResponse object with that matching index key.
                    After that, buildObject is pushed to the displayData state.
                </Text>
                <CodeBlock
                    text={text.infiniteScroll}
                    language="javascript"
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={nord}
                />
            </VStack>
        </Container>

        <Container height={100} pt={800} pb={500}>
            <VStack spacing={5}>
                <Heading textAlign={"center"}>Reflection</Heading>
                <Text width={'58rem'} textAlign={"left"} fontSize={"xl"}> My approach to handling the big data set and infinite scrolling was not ideal.
                    If I had more time I would use it implementing a limit parameter in the API. I would change the code so there would be an initial fetch request
                    on component load, and everytime the bottom is reached the frontend would make a call for another set of items. This would make the loading times
                    faster, as my approach can be slow on the first load of the page. I would also look at any potential libraries that might be able to handle the 
                    infinite scrolling for me, to make it run more efficiently. I would have also taken some time to make the app responsive to give it a better user experience.
                </Text>
            </VStack>
        </Container>
        </>
    );
}

const HomePage = () => {
    console.log(text)
    return (
        <>
            <Landing/>
            <MyApproach/>
        </>
    );
}

export default HomePage;
