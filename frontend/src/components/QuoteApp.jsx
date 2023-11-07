import React, {useEffect} from 'react'

const QuoteApp = () => {
    const [quote, setQuote] = React.useState('')


    useEffect(() => {
      fetchQuote()
    },[])

     async function fetchQuote() {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()
        // setQuote(`${data.content}  -${data.author}`)
        setQuote(<div>
          <blockquote className="">{data.content}<br/>{data.author}</blockquote>
          {/* <p className="author"></p> */}
        </div>)
    }
  return (
    <div className='quote-app'>
        <h1 className='heading'>RANDOM QUOTE GENERATOR</h1>
        <blockquote className="qblock">{quote}</blockquote>
        <button className='bt' onClick={() => {fetchQuote();}}>Get Quote</button>
    </div>
  )
}

export default QuoteApp