import { Delete as DeleteIcon } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function ChatMessage(props) {
    return (
        <Container> 
            <MainContainer> 
            <UserAvatar>
                <img src={props.img}/>
            </UserAvatar>            
            <MessageContent>
                <Name>
                    {props.name}
                    <span>{props.date}</span>
                </Name>
                <Text>
                    {props.message}
                </Text>
            </MessageContent>   
            </MainContainer>  
            <DeleteContainer>
                <DeleteIcon/>
            </DeleteContainer>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content:space-between;

    :hover{
        background:rgb(241, 237, 245);
    }
`

const UserAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;
    img {
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 5px solid lightgray;
    padding-left:10px;
    height:50px;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97,96,97);
        font-size: 13px;
    }
`

const Text = styled.span`
margin-top:10px;
`

const DeleteContainer = styled.div`

`;

const MainContainer = styled.div`
display:flex;
`;