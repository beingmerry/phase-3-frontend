import { Form } from 'react-bootstrap'

function UserSelect ({ setCurrentUser, users }) {
  const userOptions = users.map(user => (
    <option value={user.id}>{user.name}</option>
  ))
  return users.length === 0 ? (
    <> </>
  ) : (
    <Form.Group controlId='formBasicSelect'>
      <Form.Label>Select Current User</Form.Label>
      <Form.Control
        as='select'
        placeholder='Select User'
        onChange={e => {
          setCurrentUser(
            users.filter(user => user.id === parseInt(e.target.value))[0]
          )
        }}
      >
        {userOptions}
      </Form.Control>
    </Form.Group>
  )
}

export default UserSelect
