import {Button, Form} from 'react-bootstrap';

function StoreForm() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Add New Store</Form.Label>
          <Form.Control type="text" placeholder="Store" />
          <Form.Control type="select" placeholder="Item1" />
          <Form.Control type="select" placeholder="Item2" />
          <Form.Control type="select" placeholder="Item3" />
          <Form.Control type="select" placeholder="Item4" />

        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  export default StoreForm;