import { Form } from 'react-bootstrap'

function UserSelect ({ setCurrentUser, users }) {
  return users.length === 0 ? (
    <> </>
  ) : (
    <Form.Group controlId='formBasicSelect'>
      <Form.Label>Select Current User</Form.Label>
      <Form.Control
        as='select'
        placeholder="Select User"
        onChange={e => {
          setCurrentUser(
            users.filter(user => user.id === parseInt(e.target.value))[0]
          )
        }}
      >
        <option value={users[0].id}>{users[0].name}</option>
        <option value={users[1].id}>{users[1].name}</option>
        <option value={users[2].id}>{users[2].name}</option>
      </Form.Control>
    </Form.Group>
  )
}

export default UserSelect
