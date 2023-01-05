import {Button, Form} from 'react-bootstrap';

function StoreForm() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Add New Store</Form.Label>
          <Form.Control type="text" placeholder="Store" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  export default StoreForm;