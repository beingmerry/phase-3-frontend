import {Button, Form} from 'react-bootstrap';

function UserForm({currentUser, setCurrentUser, users}) {


  const handleCurrentUser = (e) =>{
    setCurrentUser(e.target.value);
  }
  //🎯 Turning this into a user form, since activity list is a static relationships not belong to or has many w/ anything
    return (
      users.length === 0  ? <> </> :
      <Form>
        <Form.Select onChange={e => handleCurrentUser(e)} aria-label="Default select example">
          <option>Select User</option>
          <option value={users[0].id}>Ben</option>
          <option value={users[1].id}>Noah</option>
          <option value={users[2].id}>Jaime</option>
        </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  export default UserForm;