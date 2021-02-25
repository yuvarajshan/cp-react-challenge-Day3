import {AccessTime as AccessTimeIcon, HelpOutline as HelpOutlineIcon } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
         <Container>
            <Main>
                <AccessTimeIcon/>
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                     </Search>
                </SearchContainer>
                <HelpOutlineIcon/>
            </Main>
            <UserContainer>
                <Name>
                Yuvaraj
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" alt=""/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background:#350d36;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    z-index:10;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
    display:flex;
    margin-left:16px;
    margin-right:16px;

    svg{
        margin-top:4px;
    }
`

const SearchContainer = styled.div`
    min-width:400px;
    margin-left:16px;
    margin-right:16px;
   
`
const Search = styled.div`
    box-shadow:0 0 0 1px rgb(104 74 104);
    width:100%;
    border-radius:6px;
    display:flex;
    align-items:center;

    input{
        background-color:transparent;
        border:none;
        padding-left:8px;
        padding-right:8px;
        color:white;
        padding-top:8px;
        padding-bottom:8px;
    }

    input:focus{
        outline:none;
    }
`

const UserContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right:16px;
    position:absolute;
    right:0;
`

const Name = styled.div`
    margin-right:16px;
`

const UserImage = styled.div`
    width:28px;
    height:28px;
    border:2px solid white;
    border-radius:3px;
    img{
        width:100%;
    }
`