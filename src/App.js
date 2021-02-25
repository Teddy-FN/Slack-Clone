/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import './App.css';
// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Import Styled Components 
import styled from 'styled-components'
// Import Component yang sudah kita buat
import Chat from './component/Chat'
import Login from './component/Login'
import Header from './component/Header'
import Sidebar from './component/Sidebar'

// FIrebase
import db from './firebase'

function App() {

  // Bikin tempat penyimpanan 
  const [rooms, setRooms] = useState([])
  // database from Firebase
  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name
        }
      }))
    })
  }

  useEffect(() => {
    getChannels()
  }, [])


  console.log(rooms)
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

// Setelah kita import styled component maka kita panggil dengan variabel dan di belakang harus di kasih backtick
const Container = styled.div`
  // Teryanta ini CSS gaess kwkwkwkw
  width: 100%;
  height: 100vh;
  // background: orange;
  display: grid;
  grid-template-rows: 30px auto; 

`
const Main = styled.div`
  // background-color: red;
  display:grid;
  // grid-template-columns: width width
  grid-template-columns: 260px auto;
`