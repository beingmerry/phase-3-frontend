// 🚀 React Imports
import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, NavLink, Container, CardGroup } from 'react-bootstrap'
// 🏃 Activity Imports
import ActivityCard from './ActivityCard'
import ActivityDetails from './ActivityDetails'
// 🏪 Store Imports
import StoreCard from './StoreCard'
import StoreForm from './StoreForm'
// 👤 User Imports
import UserCard from './UserCard'
import UserSelect from './UserSelect'
import UserForm from './UserForm'

function App () {
  const [activities, setActivities] = useState([])
  const [stores, setStores] = useState([])
  const [currentActivity, setCurrentActivity] = useState({})
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [purchases, setPurchases] = useState([])

  // 1️⃣ TIME at page load
  useEffect(() => {
    fetch(`http://localhost:9292/activities`)
      .then(res => res.json())
      .then(activities => {
        setActivities(activities)
        setCurrentActivity(activities[0])
      })
    fetch(`http://localhost:9292/stores`)
      .then(res => res.json())
      .then(stores => {
        setStores(stores)
      })
    fetch(`http://localhost:9292/users`)
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setCurrentUser(users[0])
      })
    fetch(`http://localhost:9292/purchases`)
      .then(res => res.json())
      .then(purchases => {
        setPurchases(purchases)
      })
  }, [])

  const handleSetStores = store => {
    fetch(`http://localhost:9292/stores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(store)
    })
      .then(response => response.json())
      .then(newStore => {
        setStores([...stores, newStore])
      })
  }
  function handleStoreDelete (deletedStore) {
    debugger
    fetch(`http://localhost:9292/stores/${deletedStore.id}`, {
      method: 'DELETE'
    }).then(resp => {
      setStores(stores.filter(store => store.id !== deletedStore.id))
      if (resp.status !== 200) {
        console.error(resp)
      }
    })
  }

  const handleSetUsers = user => {
    fetch(`http://localhost:9292/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(newUser => {
        setUsers([...users, newUser])
      })
    setUsers([...users, user])
  }

  const activityCards = activities.map(activity => {
    return (
      <ActivityCard
        key={activity.id}
        activity={activity}
        setCurrentActivity={setCurrentActivity}
      />
    )
  })

  const storeCards = stores.map(store => {
    return (
      <StoreCard
        key={store.id}
        store={store}
        user={currentUser}
        purchases={purchases}
        setPurchases={setPurchases}
        handleStoreDelete={handleStoreDelete}
      />
    )
  })

  return (
    <Container>
      <Navbar bg='dark' variant='dark'>
        <NavLink to={'/'} className={'navbar-brand'}>
          Phase 3 Project
        </NavLink>
      </Navbar>
      <Routes>
        <Route path='' element={<div></div>} />
      </Routes>
      <UserSelect setCurrentUser={setCurrentUser} users={users} />
      <UserCard
        user={currentUser}
        activities={activities}
        purchases={purchases}
        setPurchases={setPurchases}
      />
      <ActivityDetails currentActivity={currentActivity} />
      <CardGroup className='card-group'>{activityCards}</CardGroup>
      <CardGroup className='card-group'>{storeCards}</CardGroup>
      <br />
      <StoreForm handleSetStores={handleSetStores} />
      <UserForm handleSetUsers={handleSetUsers} />
    </Container>
  )
}

export default App
