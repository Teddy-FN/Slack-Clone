/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/3.jpg" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Teddy Ferdian Abrar Amrullah
                    <span>2/26/2021 12:12:AM</span>
                </Name>
                <Text>
                    Challenge for my self
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius : 2px;
    overflow: hidden;
    margin-right: 8px;

    img{ 
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    
    span { 
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97, 96, 97);
        font-size: 13px;
    }
`

const Text = styled.span`

`