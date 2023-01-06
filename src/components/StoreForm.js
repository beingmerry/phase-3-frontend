import { Button, Form, Collapse } from 'react-bootstrap'
import { useState } from 'react'

function StoreForm ({handleSetStores}) {
  const [open, setOpen] = useState(false)
  function handleSubmit (e) {
    e.preventDefault()
    const storeForm = document.querySelector('#new-store-form').elements
    const newStore = {
      store_name: storeForm[0].value,
      item_1: storeForm[1].value,
      item_1_cost: parseFloat(storeForm[2].value),
      item_2: storeForm[3].value,
      item_2_cost: parseFloat(storeForm[4].value),
      item_3: storeForm[5].value,
      item_3_cost: parseFloat(storeForm[6].value),
      item_4: storeForm[7].value,
      item_4_cost: parseFloat(storeForm[8].value)
    }
    setOpen(false)
    handleSetStores(newStore)
  }
  return (
    <>
      <Button
        size='sm'
        onClick={() => setOpen(!open)}
        variant='secondary'
        aria-expanded={open}
      >
        Add New Store
      </Button>
      <Collapse in={open}>
        <Form id='new-store-form' onSubmit={e => handleSubmit(e)}>
          <Form.Group className='mb-3' controlId='formBasic'>
            <Form.Label>Add New Store</Form.Label>
            <Form.Control
              name='Store'
              type='text'
              placeholder='Store'
            />
            <Form.Control
              name='Item1'
              type='text'
              placeholder='Item1'
            />
            <Form.Control
              name='Item1_Cost'
              type='text'
              placeholder='Item1_Cost'
            />
            <Form.Control
              name='Item2'
              type='text'
              placeholder='Item2'
            />
            <Form.Control
              name='Item2_Cost'
              type='text'
              placeholder='Item2_Cost'
            />
            <Form.Control
              name='Item3'
              type='text'
              placeholder='Item3'
            />
            <Form.Control
              name='Item3_Cost'
              type='text'
              placeholder='Item3_Cost'
            />
            <Form.Control
              name='Item4'
              type='text'
              placeholder='Item4'
            />
            <Form.Control
              name='Item4_Cost'
              type='text'
              placeholder='Item4_Cost'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Collapse>
    </>
  )
}

export default StoreForm
