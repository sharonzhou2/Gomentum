import React from 'react'

const Quotes = ({quotes}) => {
    return (
        <div className="quotes">
            <p className="quote-content">{quotes.content} </p>
            <p>-{quotes.author}</p>
        </div>
    )
}

export default Quotes
