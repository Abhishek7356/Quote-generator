import React from 'react'
import './home.css'
import { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBSpinner } from 'mdb-react-ui-kit';



function Home() {

    const [quote, setQuote] = useState({ quote: 'Winning isn’t everything, but wanting to win is.', author: 'Vince Lombardi' })
    const [load, setload] = useState(false)
    const URL = 'https://dummyjson.com/quotes';

    const fetchData = async () => {
        let response = await fetch(URL);
        let data = await response.json();
        let randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
        setQuote(randomQuote)
        console.log(quote);
        setload(false)
    }

    const handlerquote = () => {
        setQuote({})
        setload(true)
        fetchData();
    }

    return (
        <div className='outerContainer'>
            <div className='quoteContainer shadow'>
                {!load ? <h4 className='quote'>{quote.quote}</h4> :
                    <div className='d-flex justify-content-center'>
                        <MDBSpinner grow className='text-center' color='secondary'>
                            <span className='visually-hidden'>Loading...</span>
                        </MDBSpinner>
                    </div>
                }
                <div className='author'>
                    <em>- {quote.author}</em>
                    <button onClick={handlerquote} className='refreshbtn'><i class="fa-solid fa-rotate-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Home