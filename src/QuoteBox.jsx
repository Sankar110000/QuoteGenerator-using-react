import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import "./QuoteBox.css"
import "./helper.js"
import { getRandIdx, getAuthor } from './helper.js';


export default function QuoteBox(){

    let [quote, setQuote] = useState({text: "", author: ""});

    async function getQuote(){
        let res = await fetch("https://type.fit/api/quotes")
        let jsonRes = await res.json()
        let randIdx = getRandIdx(jsonRes)
        setQuote({...quote, text: jsonRes[randIdx].text, author: getAuthor(jsonRes[randIdx].author, ",")});
    }

    useEffect(() => {
        async function getFirstQuote(){
            let res = await fetch("https://type.fit/api/quotes")
            let jsonRes = await res.json()
            let randIdx = Math.round(Math.random()*jsonRes.length)
            setQuote({text: jsonRes[randIdx].text, author: getAuthor(jsonRes[randIdx].author, ",")});
        }
        getFirstQuote();
    }, [])

    return (
        <div className="container">
            <Button variant="contained" onClick={getQuote}>Get New Quote</Button>
            <h3>{quote.text}</h3>
            <p>Written By - {quote.author}</p>
        </div>
    )
}