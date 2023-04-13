import React from 'react'

const Quote = ({ getNewQuote, quote }) => {

    // props === {getNewQuote, quote}

    return (
        <div>
            <button onClick={getNewQuote}>Generate Quote</button>
            <h3>
                <span>"</span>
                {quote?.text}
                <span>"</span>
            </h3>
            <i>- {quote?.author}</i>
        </div>
    )
}

export default Quote