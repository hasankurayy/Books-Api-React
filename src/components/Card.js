import React, { useState } from 'react'
import Modal from './Modal'


function Card({ book }) {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='card' onClick={() => setShowModal(true)}>
        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt="no image" />
        <div className="bottom">
          <h3 className="title">{book.volumeInfo.title}</h3>
          <p className="amount">{book.saleInfo.listPrice ? (
            <div>
              {book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode}
            </div>
          ) : "Not for sale"}</p>
        </div>
      </div>

      {showModal && (
        <Modal setShowModal={setShowModal} book={book} />
      )}
    </>
  )
}

export default Card