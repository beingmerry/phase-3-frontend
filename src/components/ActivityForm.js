import {Button, Form} from 'react-bootstrap';

function ActivityForm() {

  //🎯 Turning this into a user form, since activity list is a static relationships not belong to or has many w/ anything
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Add New Activity</Form.Label>
          <Form.Control type="text" placeholder="Activity" />

          <Form.Label>Add Item or Equipment</Form.Label>
          <Form.Control type="text" placeholder="Activity" />

          <Form.Label>Add New Activity</Form.Label>
          <Form.Control type="text" placeholder="Activity" />

          <Form.Label>Add New Activity</Form.Label>
          <Form.Control type="text" placeholder="Activity" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  export default ActivityForm;