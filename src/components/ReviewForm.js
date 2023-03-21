import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Collapse from 'react-bootstrap/esm/Collapse'
import Form from 'react-bootstrap/esm/Form'
// import { MdStarRate } from 'react-icons/md'

function ReviewForm ({ item, setPurchases, purchases }) {
  const [open, setOpen] = useState(false)
  const [newReview, setNewReview] = useState(item.review)
  const [starValue, setStarValue] = useState(item.star_rating)

  const handleReviewSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:9292/purchases/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        review: newReview,
        star_rating: starValue
      })
    })
      .then(response => response.json())
      .then(reviewedPurchase => {
        setPurchases(
          purchases.map(purchase =>
            purchase.id === reviewedPurchase.id ? reviewedPurchase : purchase
          )
        )
      })
  }

  const handlePurchaseDelete = e => {
    e.preventDefault()
    fetch(`http://localhost:9292/purchases/${item.id}`, {
      method: 'DELETE'
    }).then(resp => {
      setPurchases(purchases.filter(purchase => purchase.id !== item.id))
      if (resp.status !== 200) {console.error(resp)}
    })
  }

  return (
    <>
      <Button
        size='sm'
        onClick={() => setOpen(!open)}
        variant='secondary'
        aria-expanded={open}
      >
        Edit Review
      </Button>
      <Collapse in={open}>
        <Form>
          <Form.Group className='mb-3' controlId='formBasic'>
            <Form.Label>Changed your mind?</Form.Label>
            <Form.Control
              onChange={e => setNewReview(e.target.value)}
              type='text'
              placeholder='Tell us how you really feel...'
            />
            <Form.Select onChange={e => setStarValue(e.target.value)}>
              <option value='1'>No words - 1 Star</option>
              <option value='2'>Ehh.. - 2 Stars</option>
              <option value='3'>Did what it said - 3 Stars</option>
              <option value='4'>Pleasantly surprised - 4 Stars</option>
              <option value='5'>Loyal Customer - 5 Stars</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant='primary'
            className='px-auto'
            onClick={handleReviewSubmit}
          >
            Submit
          </Button>

          <Button
            variant='danger'
            className='px-auto'
            onClick={handlePurchaseDelete}
          >
            Return Item
          </Button>
        </Form>
      </Collapse>
    </>
  )
}

export default ReviewForm
