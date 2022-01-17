import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Card = ({ name, store, quantity, timeOrdered, numPurchased, orderId, imageURL, price}) => {
   return (
        <Box mt={20}>
            <Stack spacing={2}>
                <img alt="Food" src={imageURL}></img>
                <Heading fontSize="3xl"mt={2}>{name} at {store}</Heading>
                <Text fontSize="lg">Item ID: {orderId}</Text>
                <Text fontSize="lg">Purchase for ${price}</Text>
                <Text fontSize="lg">{quantity} items/item come with a single order</Text>
                <Text fontSize="lg">Purchased {numPurchased} times in the last 48 hours</Text>
                <Text fontSize="lg">Ordered {Math.floor(timeOrdered/60)} minutes ago</Text>
                <Button w="10rem"colorScheme={"blue"}>
                    Order Now <AiOutlineShoppingCart/>
                </Button>
            </Stack>
        </Box>
   );
};

export default Card;
