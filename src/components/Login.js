import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/icons'
import { auth, provider } from './firebase';

const Login = () => {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
            <h1>Sign in to the Slack React</h1>
            <p>slack-react.slack.com</p>
            <Button type="submit" onClick={signIn}>
                Sign in with Google
            </Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}


export default Login

const LoginContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 100px;
    text-align: center;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;

    }
`

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
`