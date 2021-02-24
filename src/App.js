/* eslint-disable no-undef */
import React, { Component } from 'react'
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

import { StyleProvider } from './contexs/StyleContext'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Router>
            <Container>
              <Header />
              <Main>
                <Sidebar />
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
        </StyleProvider>
      </div>
    );
  }
}



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