import { Card, ListGroup, Button } from "react-bootstrap";
import { MdDelete, MdEdit } from 'react-icons/md'
// import {BsFillCheckSquareFill} from 'react-icons/bs'
function ActivityDetails({ currentActivity }) {
  const {activity_name, item_first, item_second, item_third, activity_image_url} = currentActivity;


  return (
    <Card>
      <Card.Img
        variant="top"
        className="py-3 card-img"
        src={activity_image_url}
      />
      <Card.Body className="text-center">
        <Card.Title className="fs-6">
          {activity_name}
          <Button size="sm" variant="secondary" className="float-end">{<MdEdit/>}</Button>
          <Button size="sm" variant="danger" className="float-end">{<MdDelete/>}</Button>
        </Card.Title>
        <br />
        <ListGroup>
          <ListGroup.Item>
            {item_first}
          </ListGroup.Item>
          <ListGroup.Item>
            {item_second}
          </ListGroup.Item>
          <ListGroup.Item>
            {item_third}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ActivityDetails;
