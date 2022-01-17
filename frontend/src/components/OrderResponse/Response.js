import { React, useState, useEffect, useRef } from 'react';
import { Container, Box, Center } from '@chakra-ui/react';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
import Card from './Card';

const Response = () => {
    // State we are using to display items
    let [displayData, setData] = useState([]);
    // State that holds entire response
    const [totalResponse, setResponse] = useState([]);
    // Boolean that tells us if items are still being fetched
    const [loading, setLoading] = useState([true]);
    // String that holds any errors from API call
    const [error, setError] = useState('');
    // Ref used to handle scroll checks
    const listInnerRef = useRef();

    // Helper variables used to hold first 10 items displayed and the number of items that will be added on each 
    // state update
    let numToAdd = 10;

    // Orders get request
    const onScroll = () => {
        // Array that will hold the index and item object
        // buildObject = ['i', {name: "", store: ""}]
        let buildObject = [];
        // Check if scrolled to bottom of div
        if (listInnerRef.current) {
            const {scrollTop, scrollHeight, clientHeight} = listInnerRef.current;
            // If scolled to bottom add 10 more items to displayData from totalRepsonse[i]
            if (scrollTop + clientHeight === scrollHeight) {
                let temp = numToAdd;
                numToAdd += 10;
                for (let i = temp; i < numToAdd; i++) {
                    buildObject.push([`${i}`, totalResponse[i][1]]);
                }
                // Clones current state, pushes in passed array to temp state then updates displayData state
                let tempData = [...displayData];
                tempData.push(...buildObject);
                setData(tempData);
            }
        }
    }

    // Run fetchData() on component load 
    useEffect(() => {
        const fetchData = async () => {
            // Try/catch for API GET request. If success execute try block if not catch error and set error state
            try {
                // Store API request in resp
                let resp = await axios.get('http://localhost:5000/api/order');
                // Turn resp.data object into array
                // {[]{},[]{}} -> [[], {}]
                resp = Object.entries(resp.data);
                // For i < numToAdd push ith items into displayData
                for (let i = 0; i < numToAdd; i++) {
                    displayData.push(resp[i][1]);
                }
                // Convert data stucture to arrays
                displayData = Object.entries(displayData);
                // Sort items by timeOrdered and numPurchased properties
                displayData.sort((a, b) => a[1].timeOrdered - b[1].timeOrdered || a[1].numPurchased - b[1].numPurchased);
                // Set states
                setData(displayData);
                setResponse(resp);
                setLoading(false);
            } catch (err) {
                // Set error
                setError(err);
            }
        }
        fetchData();
    }, []);

    return (
        <Container onScroll={onScroll}
            ref={listInnerRef}
            style={{height: "100vh", overflowY: "auto"}}>
            <Box boxShadow={'2xl'}padding='4' maxW='xl'>
                {loading ? (
                    <Center>
                        <Oval height="50px" width="50px" textAlignarialLabel="loading-indicator" color="purple"/>
                    </Center>
                    ) : (
                    <Container>
                        {error && (<p>{error.message}</p>)}
                        {displayData.map((item, i) => {
                        return (
                            <div key={i}>
                                <Card name={item[1].name}
                                    store={item[1].store}
                                    price={item[1].price}
                                    quantity={item[1].quantity}
                                    timeOrdered={item[1].timeOrdered}
                                    numPurchased={item[1].numPurchased}
                                    orderId={item[1].orderId}
                                    imageURL={item[1].imageURL}>     
                                </Card>
                            </div>
                        )})}
                    </Container>                     
                )};
            </Box>
    </Container>
    );
};

export default Response;