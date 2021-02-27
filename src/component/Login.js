import React from 'react'
import styled from 'styled-components'
import {
    auth, provider
} from '../firebase';
import SlackLogo from '../assets/img/SlackLogo.png'

function Login(props) {

    // Sign In function 
    const signIn = () => {
        // How to use IT???
        auth.signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoURL,

                }
                // Kita set localstorage untuk menyimpan data agar waktu di refresh tidak kembali ke login Page
                localStorage.setItem('user', JSON.stringify(newUser))
                // Kemudian kita tranfer data ini ke state (setUser di dapat state yang sudah kita set di app.js dan melakukan parsing melalu tag newUser)
                props.setUser(newUser);
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <Container>
            <Content>
                <SlackImage src={SlackLogo} />
                <h1>Letss Join Guys!!!</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign in With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const SlackImage = styled.img`
    height: 100px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`