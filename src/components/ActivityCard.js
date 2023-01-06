import { Card, ListGroup, Button } from "react-bootstrap";
import {BsFillCheckSquareFill} from 'react-icons/bs' // BsSquareFill, <- use me for non-currentActivity
function ActivityCard({ activity, setCurrentActivity }) {
  const {activity_name, item_first, item_second, item_third, activity_image_url} = activity;
  // use setCurrentActivity to set the detailed view on that activityCard
  const handleCurrentActivity = (e) =>{
    setCurrentActivity(activity)
  }
  

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
          <Button size="sm" variant="primary" className="float-end" onClick={() => handleCurrentActivity()}>{<BsFillCheckSquareFill/>}</Button>
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

export default ActivityCard;
