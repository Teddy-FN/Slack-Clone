import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ToogleSwitch from './ButtonDarkMode/ToogleSwitch'
import AddIcon from '@material-ui/icons/Add';
// Import yang sudah kita buat tadi 
import {
    SideBarItems
} from '../data/SideBarItems'
import {
    ChannelsSideList
} from '../data/ChannelsSideList'

function Sidebar() {
    return (
        <Container>
            {/* DI dalam sidebar ini terdapat 3 component */}
            <WorkSpaceContainer>
                <Name>
                    Teddy Ferdian
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {
                    // Mapping yang sudah kita buat 
                    SideBarItems.map((item) => (
                        <MainChannelItems>
                            {item.icon}
                            {item.text}
                        </MainChannelItems>
                    ))
                }
            </MainChannels>
            <ChannelContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        ChannelsSideList.map((item) => (
                            <Channel>
                                {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelContainer>


            {/* Dark Mode */}
            <ChangeColorMode>
                <ButtonColor>
                    <TexChangeColor>
                        Change Color
                    </TexChangeColor>
                    <ToogleSwitch />
                </ButtonColor>
            </ChangeColorMode>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background: #3F0E40;
    
`
const WorkSpaceContainer = styled.div`
    color: #fff;
    height: 65px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content : space-between;
    border-bottom :1px solid #532753;
`

const Name = styled.div`

`

const NewMessage = styled.div`
    height: 36px;
    width: 36px;
    background: #fff;
    color: #3F0E40;
    fill: #3F0E40;

    // Make A Center
    display: flex;
    align-items : center;
    justify-content : center;


    border-radius: 50%;
    margin-right: 20px;

    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItems = styled.div`
    color : rgb(188, 171, 188);
    display: grid;
    grid-template-columns : 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;

    :hover {
        background: #350D36;
    }
`

const ChannelContainer = styled.div`
    color : rgb(188, 171, 188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content : space-between;
    align-items : center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items : center;
    padding-left: 19px;
    cursor: pointer;

    :hover {
        background: #350D36;
    }
`

const ChangeColorMode = styled.div`
    display:flex;    
    align-items:flex-end;
    height: 30%;
`

const ButtonColor = styled.div`

`
const TexChangeColor = styled.div`
    display: flex;
    margin-left: 60px;
    font-size: 20px;
    color: #fff;
    
`