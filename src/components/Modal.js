import React from 'react'

function Modal({setShowModal, book}) {
    return (
        <div className='overlay'>
            <div className="overlay-inner">
                <button className='close' onClick={() => setShowModal(false)}><i class="fa-regular fa-circle-xmark"></i></button>
                <div className="inner-box">
                    <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt="" />
                    <div className="info">
                        <h1>{book.volumeInfo.title}</h1>
                        <h3>{book.volumeInfo.authors}</h3>
                        <h4>{book.volumeInfo.publisher} <span>{book.volumeInfo.publishedDate}</span></h4>
                        <a href={book.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <div className="description">
                    {book.volumeInfo.description}
                </div>
            </div>
        </div>
    )
}

export default Modal