import { useState, useEffect } from "react";
import Quote from "./Quote";
import Word from "./Word";

function App() {
    // Get a random inedx of the given array
    function getRandom(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    // Quotes State
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);
    // English words State
    const [englishWords, setEnglishWords] = useState([]);
    const [englishWord, setEnglishWord] = useState([]);

    // Fetch the quotes and words using fetch API with useEffect side effect
    useEffect(() => {
        // Fetch the quotes using fetch API
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((json) => {
                setQuotes(json);
                setQuote(json[0]);
            });

        // Fetch the words using fetch API and set Definition of the word using other fetch API
        fetch("https://type.fit/api/words")
            .then((res) => res.json())
            .then((json) => {
                setEnglishWords(json);

                // set the Definition of the word using this fetch API
                fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + json[0].text)
                    .then((response) => response.json())
                    .then((response) => {
                        const defini = response[0].meanings[0].definitions[0].definition;
                        setEnglishWord({
                            text: json[0].text,
                            definition: defini
                        })
                    })
            });

    }, []);

    // Generate a new quote
    function getNewQuote() {
        setQuote(getRandom(quotes));
    }

    // Generate a new word
    function getNewWord() {
        // Get random word
        const word = getRandom(englishWords);

        // Fetch the definition of the word using fetch API
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word.text)
            .then((res) => res.json())
            .then((json) => {
                setEnglishWord({
                    text: json[0].word,
                    definition: json[0].meanings[0].definitions[0].definition,
                })
            });
    }

    return (
        <>
            <main>
                <h1>Project 3: Quote & English Word with Definition Generator</h1>
                <section>
                    <Quote getNewQuote={getNewQuote} quote={quote} />
                    <Word getNewWord={getNewWord} word={englishWord} />
                </section>
            </main>

            {/* author credit */}
            <p className="author-footer">
                Made with 💝 by&nbsp;
                <a href="https://github.com/hirenkvaghasiya" target="_blank" rel="noopener noreferrer">
                    Hiren Vaghasiya
                </a>
            </p>
        </>
    );
}

export default App;