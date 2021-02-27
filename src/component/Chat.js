/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './style/Chat.css';
// import StyleContext from '../contexs/StyleContext'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';


// 
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

// Import Db 
import db from '../firebase'
import firebase from 'firebase'
// Import react router dom 
import { useParams } from 'react-router-dom'


function Chat({ user }) {
    // const { isDark } = useContext(StyleContext);

    const [channel, setChannel] = useState()
    const [messages, setMessages] = useState([])
    // Kita get Channel biar tiap page bisa beda-beda 
    const { channelId } = useParams();
    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snapShot) => {
                setChannel(snapShot.data());
            })
    }

    // Get Messages
    const getMessages = () => {
        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                let messages = snapshot.docs.map((doc) => doc.data());
                console.log('INI PESAN', messages);
                setMessages(messages);
            })
    }


    // Send Messages 
    const sendMessages = (text) => {
        if (channelId) {
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection('rooms').doc(channelId).collection('messages').add(payload);
            console.log('INI PAYLOAD', payload)
        }
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])
    return (
        // <div className={isDark ? "dark-menu header" : "header"}>
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel && channel.name}
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
                {
                    messages.length > 0 &&
                    messages.map((data, idx) => (
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </MessagaeContainer>
            <ChatInput sendMessages={sendMessages} />
        </Container>
    )
}

export default Chat



const Container = styled.div`
    display: grid;
    // grid-template-rows: first second third
    grid-template-rows: 64px auto min-content;
    min-height: 0;
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
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
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