import {Button, Form} from 'react-bootstrap';

function ActivityForm() {
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