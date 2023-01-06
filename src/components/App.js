// 🚀 React Imports
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, NavLink, Container, CardGroup } from "react-bootstrap";
// 🏃 Activity Imports
import ActivityCard from "./ActivityCard";
import ActivityDetails from "./ActivityDetails";
// 🏪 Store Imports
import StoreCard from "./StoreCard";
import StoreForm from "./StoreForm";
// 👤 User Imports
import UserCard from "./UserCard";
import UserSelect from "./UserSelect";


function App() {
  const [activities, setActivities] = useState([]);
  const [stores, setStores] = useState([]);
  const [currentActivity, setCurrentActivity] = useState({})
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [purchases, setPurchases] = useState([])

  // 1️⃣ TIME at page load
  useEffect(() => {
    fetch(`http://localhost:9292/activities`)
      .then((res) => res.json())
      .then((activities) => {
        setActivities(activities);
        setCurrentActivity(activities[0])
      });
    fetch(`http://localhost:9292/stores`)
      .then((res) => res.json())
      .then((stores) => {
        setStores(stores);
      });
    fetch(`http://localhost:9292/users`)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setCurrentUser(users[0])
      });
    fetch(`http://localhost:9292/purchases`)
      .then((res) => res.json())
      .then((purchases) => {
        setPurchases(purchases)
      });
  }, []);

  const activityCards = activities.map((activity) => {
    return (
      <ActivityCard
        key={activity.id}
        activity={activity}
        setCurrentActivity={setCurrentActivity}
      />
    );
  });

  const storeCards = stores.map((store) => {
    return (
      <StoreCard
        key={store.id}
        store={store}
        user={currentUser}
        purchases={purchases}
        setPurchases={setPurchases}
      />
    );
  });




  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <NavLink to={"/"} className={"navbar-brand"}>
          Phase 3 Project
        </NavLink>
      </Navbar>
        <Routes>
          <Route path="" element={<div></div>} />
        </Routes>
        <UserSelect setCurrentUser={setCurrentUser} users={users}/>
        <UserCard user={currentUser} activities={activities} purchases={purchases}/>
        <ActivityDetails currentActivity={currentActivity} />
        <CardGroup className="card-group">
          {activityCards}
        </CardGroup>
        <CardGroup className="card-group">
          {storeCards}
        </CardGroup>
        <br/>
        <StoreForm/>
    </Container>
  );
}

export default App;
