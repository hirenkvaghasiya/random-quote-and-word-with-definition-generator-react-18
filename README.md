# Project 3 - Random Quote & English Word with Definition Using ReactJS 18 🚀
## Beginner level

![licence](https://img.shields.io/badge/licence-MIT-blue)

- Using external APIs and making HTTP requests are an essential part of any React application. To learn how to make HTTP requests in React, we will make a random quote & english word generator.

## How you will build it? 💻
- Our quote generator will need to use the useEffect hook to perform a "side effect" to fetch the quotes from an external API. After fetching our quotes, we will put them in our local app state, which we will call quotes.

- We'll then take that array of quotes and use a function to select a random item within that array. Then we'll put it in another state variable called just quote, which can then be displayed to our user.

- We also want to add a "New Quote" button above each quote that will perform the same operation – get a new random quote from our quotes array and put it in quote.

- Finally, the quote isn't loaded in state. So we'll make sure to use the optional chaining operator (?) to safely check our object before we attempt to get a value from that quote in state to make sure our app doesn't throw an error.

- Same process as above for getting English words from external API & Call one more API for getting word Definition.

## React concepts you will learn 📝
- useEffect (to perform side effects)
- HTTP requests with Fetch API
- HTTP requests with Nested Fetch API
- Passing data to components via props
- Conditional chaining operator (?)

## How to get Started 🚀
**There are two methods for getting started with this repo.**

#### Familiar with Git? 
```
- git clone https://github.com/hirenkvaghasiya/random-quote-and-word-with-definition-generator-react-18.git
- cd random-quote-and-word-with-definition-generator-react-18/
- npm install
- npm run start OR npm start
```

#### Not Familiar with Git?
download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> cd random-quote-and-word-with-definition-generator-react-18
> npm install
> npm run start OR npm start
```

## Snap Shot(s) 📷

![Alt text](public/Screenshot-001.png?raw=true "13/04/2023")

## Author

[@hirenkvaghasiya](https://github.com/hirenkvaghasiya)

## License

![licence](https://img.shields.io/badge/licence-MIT-blue)