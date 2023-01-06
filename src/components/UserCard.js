// ⚠️ 2023-01-05 | BEN | cannot get this to work for interest, going to have to go through favorite activity and purchases only! Still fun though
// import { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap' // , Button, Form
// import { MdDelete, MdEdit } from 'react-icons/md'
// import {BsFillCheckSquareFill} from 'react-icons/bs'
function UserCard ({ user, activities, purchases }) {
  // const [interestedActivities, setInterestedActivities] = useState([])
  // 🪃🔁 EVERY time currentUser changes

  // useEffect(() => {
  //   fetch(`http://localhost:9292/user/${user.id}/activities`)
  //     .then(res => res.json())
  //     .then(
  //       data => {
  //         setInterestedActivities(data)
  //       },
  //       [user]
  //     )
  // })
  // const interests = interestedActivities.map(item => (
  //   <ListGroup.Item>{item.activity_name}</ListGroup.Item>
  // ))
  const { favorite_activity, name, password } = user
  const favoriteActivity = activities.filter(activity => {
    return activity.activity_name === favorite_activity
  })[0]
  const userPurchases = purchases.filter(
    purchase => purchase.user_id === user.id
  )
    // debugger
  const userOwns = userPurchases.map(item => (
    <ListGroup.Item>{item.item_name}</ListGroup.Item>
  ))
  // ⚠️ ?? patch endpoint for changing your favorite activity from list of activities ?
  return favoriteActivity === undefined ? (
    <> </>
  ) : (
    <Card>
      <Card.Img
        variant='top'
        className='py-3 card-img'
        src={favoriteActivity.activity_image_url}
      />
      <Card.Body className='text-center'>
        <Card.Title className='fs-6'>
          <h1>User = {name}</h1>
          <p>Password = {password}</p>
          <h2>Favorite Activity = {favorite_activity}</h2>
          {/* <Button size="sm" variant="secondary" className="float-end">{<MdEdit/>}</Button>
          <Button size="sm" variant="danger" className="float-end">{<MdDelete/>}</Button> */}
        </Card.Title>
        <br />
        <ListGroup>
          <h3>Favorite Activity Items</h3>
          <ListGroup.Item>
            {favoriteActivity.item_first} |
            {userPurchases.filter(
              item => item.item_name === favoriteActivity.item_first
            ).length === 0
              ? '⚠️ DO NOT OWN'
              : '🟢 Good to go!'}
          </ListGroup.Item>
          <ListGroup.Item>
            {favoriteActivity.item_second} |
            {userPurchases.filter(
              item => item.item_name === favoriteActivity.item_second
            ).length === 0
              ? '⚠️ DO NOT OWN'
              : '🟢 Good to go!'}
          </ListGroup.Item>
          <ListGroup.Item>
            {favoriteActivity.item_third} |
            {userPurchases.filter(
              item => item.item_name === favoriteActivity.item_third
            ).length === 0
              ? '⚠️ DO NOT OWN'
              : '🟢 Good to go!'}
          </ListGroup.Item>
        </ListGroup>
        <br />
        <ListGroup>
          <h3>Interests</h3>
          {/* {interests} */}
        </ListGroup>
        <ListGroup>
          <h3>Owns</h3>
          {userOwns}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default UserCard
