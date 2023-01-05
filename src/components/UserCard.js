import { Card, ListGroup, Form} from "react-bootstrap"; // , Button
// import { MdDelete, MdEdit } from 'react-icons/md'
// import {BsFillCheckSquareFill} from 'react-icons/bs'
function UserCard({ user, setCurrentUser, activities}) {
  const {favorite_activity, name, password} = user;
  // use setCurrentActivity to set the detailed view on that UserCard
  const handleCurrentUser = (e) =>{
    // setCurrentUser(activity)
    console.log(e.target);
  }
  // find activity by the favorite activity currently selected
  const favoriteActivity = activities.filter((activity) => {
    return activity.activity_name === favorite_activity;
  })[0];
  // ⚠️ ?? patch endpoint for changing your favorite activity from list of activities ?
  return (
    favoriteActivity === undefined ? <> </> :
    <Card>
      <Card.Img
        variant="top"
        className="py-3 card-img"
        src={favoriteActivity.activity_image_url}
      />
      <Card.Body className="text-center">
        <Card.Title className="fs-6">
          User = {name}
          Password = {password}
          Favorite Activity = {favorite_activity}
          {/* <Button size="sm" variant="secondary" className="float-end">{<MdEdit/>}</Button>
          <Button size="sm" variant="danger" className="float-end">{<MdDelete/>}</Button> */}
          {/* 🎯 Need to fix the user drop down behavior */}
          <Form.Select onChange={e => handleCurrentUser(e.target)} aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
    </Form.Select>
        </Card.Title>
        <br />
        <ListGroup>
          <ListGroup.Item>
            {favoriteActivity.item_first}
          </ListGroup.Item>
          <ListGroup.Item>
            {favoriteActivity.item_second}
          </ListGroup.Item>
          <ListGroup.Item>
            {favoriteActivity.item_third}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <ListGroup.Item>
            {favoriteActivity.item_first}
          </ListGroup.Item>
          <ListGroup.Item>
            {favoriteActivity.item_second}
          </ListGroup.Item>
          <ListGroup.Item>
            {favoriteActivity.item_third}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
