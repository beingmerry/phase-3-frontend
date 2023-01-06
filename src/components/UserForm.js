import { Button, Form, Collapse } from 'react-bootstrap'
import { useState } from 'react'

function UserForm ({ handleSetUsers }) {
  const [open, setOpen] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    const userForm = document.querySelector('#new-user-form').elements
    const newUser = {
      name: userForm[0].value,
      password: userForm[1].value,
      favorite_activity: userForm[2].value
    }
    setOpen(false)
    handleSetUsers(newUser)
  }
  return (
    <>
      <Button
        size='sm'
        onClick={() => setOpen(!open)}
        variant='secondary'
        aria-expanded={open}
      >
        Add New User
      </Button>
      <Collapse in={open}>
        <Form id='new-user-form' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasic'>
            <Form.Label>User</Form.Label>
            <Form.Control type='text' placeholder='User'/>
            <Form.Label>Password</Form.Label>
            <Form.Control type='text' placeholder='Password' />
            <Form.Label>Favorite Activity</Form.Label>
            <Form.Control
              type='text'
              placeholder='Favorite Activity'
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

export default UserForm
