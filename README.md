![Image of Snackpass](https://www.snackpass.co/static/media/logo_round_2.d74f1dd2.png)

# Snackpass Full Stack Code Challenge

Welcome to the Snackpass Challenge! We really appreciate your time to participate. 

## The Challenge

Assume the customers around a campus order 5000 orders a day from 50 local restaurants. Each order contains one or multiple products. For eg, `2 burritos, a soda, and a side of chips`.

1. Design a full stack application which returns an infinite-scrolling list of trending products to the user.
2. A product can be qualified as trending if it is purchased at least once in last 48 hours
3. Each product should be displayed with two tags:
    * a recent purchase tag: `5 purchased recently`
    * a time tag `ordered 3 min ago`
4. **Use a heuristic to determine which trending products gets returned higher. Base heuristic on both recency and number of recent purchases.**

## Requirements

1. Implement a Full-Stack solution including web server, backend persistence and associated code.
2. Please submit with in 72 hours from the time you accept invitation. (If circumstances don't allow for this, please let us know early!)
3. You can use pseudocode for parts of web application. For instance, you could replace a function body with "assume this service has the following API."

## Practices

### Quality of code 

Please use best practices for writing code and publish to this repo. 

### Q & A

- Please create an issue and tag `@shrimuthu`, `@aduca98`, `@nprbst` and `@seankwalker` for any questions.
- **When you are ready to submit, please create an issue and tag `@BiancaVGreen`, `@shrimuthu`, and `@nprbst`.**

### Data

For sample data, you may use [Sample Orders](https://docs.google.com/spreadsheets/d/1xfAjSlBflehOYj4O7I2YkfcBB1b9VgSHg9X-SmRWmsE/edit#gid=280279953), or generate your own.

> Note: Remember to insert your own random timestamps to fit within 48 hours window.
 
## Solution

Backend Approach:
My approach involved the MERN stack. I used express router to create /api/orders which the frontend makes a GET requests to. /api/orders reads the xlsx file then loops through each item to add a new key value pair for numPurchased, numOccurences and an image url. These values are randomized everytime a call is made, so a refresh will yeild new results. The resulting data structure is sent to the frontend.

Frontend Approach:
The backend of the project was simple to setup. I encountered most of my challenges while developing the frontend. While I was able to send the data effectively, I had troubles with handling the big data and the infinite scrolling. My approach has two different response states, one that holds the entire axios response, and another that only holds the first 10 items. This was done to prevent the page from overloading the device and rendering thousands of items at once. All of the items are contained in a container, and the app renders more items depending on if the bottom of the container is reached. Only the first 10 items are sorted, as if the entire response was sorted there would be thousands of items with the same attributes. I kept it the way it was so the variety between items can be showcased and the sorting can still be seen in the first 10 items. The drawback is that since I am making a get request without any limits, the initial load of the page is slow. Below is the entire code for the Response.js component, and the further sections split it up.

Response.js Setup:
The Response component is where we do our axios call and display our results. The component is using 4 different states and a refrence. displayData holds all of the items that are currently being displayed at any given moment. totalReponse holds the entire api response, loading helps us determine when the call is finished, error holds any API errors and lastly listInnerRef is used to determine if the user has scrolled to the bottom of an element.

API Fetch: 
When the component loads, fetchData runs which asynchronously makes a call to the backend route. There is a try catch block, which attempts to make a call. If the call is made, the response is converted from an object to an array, then the first 10 items are added to displayData. Before being set to the state, the data is sorted based off of recency and the number of times the item has been purchased. If there was an error, it is caught and the error is saved into the error state.

Infinite Scroll: 
The infinite scroll effect is done by loading another 10 items from the totalResponse state everytime the bottom of the container is reached. When reached, numToAdd is saved in a temp variable and buildObject holds the object we are adding. A for loop is then ran that runs from temp - numToAdd adding every item from the totalResponse object with that matching index key. After that, buildObject is pushed to the displayData state.

Reflection: 
My approach to handling the big data set and infinite scrolling was not ideal. If I had more time I would use it implementing a limit parameter in the API. I would change the code so there would be an initial fetch request on component load, and everytime the bottom is reached the frontend would make a call for another set of items. This would make the loading times faster, as my approach can be slow on the first load of the page. I would also look at any potential libraries that might be able to handle the infinite scrolling for me, to make it run more efficiently.
Please be sure to provide an explaination of:

### Setup
the app is deployed if you would like to see it without setting it up. Below are links to the frontend and backend
frontend:
backend:

The frontend is in deployment so it is setup to make calls to the deployed backend. If you would like to run the code yourself just install the dependencies then run the react app.

You may be as verbose as you would like when providing details on approach, setup etc.