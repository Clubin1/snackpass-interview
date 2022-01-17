import React from 'react';
import Landing from '../../components/Layout/Landing';
import { Container } from '@chakra-ui/react';
import Response from '../../components/OrderResponse/Response'

const orderPage = () => {
    return (
        <div>
            <Landing title="Snackpass Full-Stack Coding assessment" 
                info="Infinite scrolling with lazy loading, fething all items from the excel sheet using node.js.
                Each item has randomized ranking properties (num ordered, num occurences) that are used to sort items to 
                display in a hierarchical order. NOTE only first 10 items are sorted by time and occurences, as if all the items were 
                sorted then there would be items with the same time and same occurences back to back for a long time."/>
            <Container maxW="xl" >
                <Response/>
            </Container>
        </div>
    );
};

export default orderPage;
