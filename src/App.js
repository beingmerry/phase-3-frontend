import React from "react";
import ActivityCard from "./ActivityCard";
import StoreCard from "./StoreCard";
import ActivityForm from "./ActivityForm";
import StoreForm from "./StoreForm";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavLink, Container, CardGroup } from "react-bootstrap";

function App() {
  const [activities, setActivities] = useState([]);
  const [stores, setStores] = useState([]);
  const [currentActivity, setCurrentActivity] = useState({})

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
        <CardGroup className="card-group">
          {activityCards}
        </CardGroup>
        <br/>
        <ActivityForm/>
        <br />
        <CardGroup className="card-group">
          {storeCards}
        </CardGroup>
        <br/>
        <StoreForm/>
    </Container>
  );
}

export default App;
