import axios from 'axios'
import React, { useState } from 'react'
import Card from './Card'

function Main() {

    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])

    const searchBook = (e) => {
        if(e.key === "Enter"){
            axios("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyBgp7Lqz5eRdxvmLVqRfcmdnLpn67x1O5M"+"&maxResults=40")
                .then(res => setBooks(res.data.items))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>

                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder='Enter Your Book Name'
                            onChange={e => setSearch(e.target.value)} 
                            onKeyDown={searchBook} />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="https://static.vecteezy.com/system/resources/previews/005/227/135/original/group-of-children-sitting-on-pile-books-reading-books-together-vector.jpg" alt="no" />
                </div>
            </div>

            <div className="container">
                {books.map(book => (
                    <Card book={book}/>
                ))}
            </div>
        </>
    )
}

export default Main