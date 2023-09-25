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

        <div className='bg-dark mx-auto shadow outerContainer'>
            {!load ?
                <div className='quote'>

                    <h4><em>' {quote.quote} '</em></h4>
                    <em className='author'>-{quote.author}</em>

                </div> : <MDBSpinner className='loading' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            }
            <MDBBtn onClick={handlerquote} className='mt-4 generatorBtn'>Generate</MDBBtn>
        </div>
    )
}

export default Home