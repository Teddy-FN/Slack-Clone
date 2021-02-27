/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Header({ user, signOut }) {
    // Kita perlu set signOut dari function yang sudah kita buat tadi di APP JS
    return (
        <Container>
            {/* Di header ini ada Container pembungkus lagi Main dan di dalamnya Main ada 2 component yaitu search bar dan profile bar */}
            <Main>
                {/* Material Ui Icons */}
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>

            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
    display: flex;
    margin-right: 16px;
    margin-left: 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
    
`
const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 5px;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        color: #fff;
        width: 100%
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input:focus {
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;

    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 25px;
    height: 25px;
    border : 2px solid #fff;
    border-radius : 3px;
    cursor: pointer;
    img {
        width: 100%;
    }
`