import React from 'react';
import './style/Chat.css';
// import StyleContext from '../contexs/StyleContext'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';


// 
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
function Chat() {
    // const { isDark } = useContext(StyleContext);
    return (
        // <div className={isDark ? "dark-menu header" : "header"}>
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # Angkringan
                    </ChannelName>
                    <ChannelInfo>
                        TEMPAT NONGKRONYA ANAK MUDA CUYY!!!!!!!!!!!!!!!
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessagaeContainer>
                <ChatMessage />
            </MessagaeContainer>
            <ChatInput />
        </Container>
    )
}

export default Chat



const Container = styled.div`
    display: grid;
    // grid-template-rows: first second third
    grid-template-rows: 64px auto min-content
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    justify-content: space-between;
`

const MessagaeContainer = styled.div`
    // background : grey;
`


const Channel = styled.div`

`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
font-weight: 400;
color: #606060;
font-size: 13px;
margin-top: 8px;
`

const Info = styled(InfoIcon)`
    margin-left: 10px;
`