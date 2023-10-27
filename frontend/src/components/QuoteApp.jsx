import React, { useSate} from 'react'

const main = () => {
    const [quote, setQuote] = React.useState(' ')
}

const QuoteApp = () => {
    function fetchQuote() {
        const response = fetch('https://api.quotable.io/random')
        const data = response.json()

    }
  return (
    <div className='quote-app'>
        <h1 className='heading'>RANDOM QUOTE GENERATOR</h1>
        <blockquote className="qblock">quotation</blockquote>
        <button className='bt'>Get Quote</button>
    </div>
  )
}

export default QuoteApp