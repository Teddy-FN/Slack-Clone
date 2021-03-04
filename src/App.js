/* eslint-disable jsx-a11y/alt-text */
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

import Img from '../src/assets/img/conversation.png'

// FIrebase
import db from './firebase'
import { auth } from './firebase'

function App() {

  // Bikin tempat penyimpanan 
  const [rooms, setRooms] = useState([])
  // Login 
  // karena dari localStorage berbentuk JSON maka kita perlu parse ke dalam string (di user ini adalah nilai secara default)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
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

  // Functio SignOut
  const signOut = () => {
    // karena kita si sign out akan meremove local Storage
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  console.log('User in APP', user)
  // console.log(rooms)
  return (
    <div>
      <Router>
        {
          // If not user
          !user ?
            // parsing 
            <Login setUser={setUser} />
            :
            <Container>
              <Header user={user} signOut={signOut} />
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat user={user} />
                  </Route>
                  <Route path="/">
                    <ImageMain>
                      <img src={Img} className="landing-image" />
                      <LandingHome>
                        <h1>Lets make channel and meet some new friends</h1>
                      </LandingHome>
                    </ImageMain>
                  </Route>
                </Switch>
              </Main>
            </Container>
        }
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
  grid-template-rows: 30px minmax(0, 1fr); 

`
const Main = styled.div`
  // background-color: red;
  display:grid;
  // grid-template-columns: width width
  grid-template-columns: 260px auto;
`

const ImageMain = styled.div`
  margin: auto;
`

const LandingHome = styled.h1`
  text-align:center;
  font-size: 20px;
  margin: auto;
  top: 20px;
  color: #350d36;
`