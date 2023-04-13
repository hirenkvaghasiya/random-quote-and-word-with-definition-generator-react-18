import React from 'react'

const Word = ({ getNewWord, word }) => {

    // props === { getNewWord, word }

    return (
        <div className="english-word">
            <button onClick={getNewWord}>Generate Word</button>
            <h3>
                <span>WORD: </span> {word?.text}
            </h3>
            <p>Definition: {word?.definition}</p>
        </div>
    )
}

export default Word