import { Card, ListGroup, Button } from "react-bootstrap";
import { MdDelete, MdEdit } from 'react-icons/md'

function StoreCard({ store }) {
  const {store_name, item_1, item_2, item_3, item_4, item_1_cost, item_2_cost, item_3_cost, item_4_cost} = store;

  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title className="fs-6">
            {store_name}
            <Button size="sm" variant="secondary" className="float-end">{<MdEdit/>}</Button>
            <Button size="sm" variant="danger" className="float-end">{<MdDelete/>}</Button>
        </Card.Title>
        <br/>
        <ListGroup>
          <ListGroup.Item>
            {item_1} {item_1_cost}
        </ListGroup.Item>
          <ListGroup.Item>
            {item_2} {item_2_cost}
          </ListGroup.Item>
          <ListGroup.Item>
            {item_3} {item_3_cost}
        </ListGroup.Item>
          <ListGroup.Item>
            {item_4} {item_4_cost} 
        </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default StoreCard;