import { InfoOutlined as InfoOutlinedIcon, StarBorderOutlined as StarBorderOutlinedIcon } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat = () => {
    return (
   <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # cp-channel
                    </ChannelName>
                    <ChannelInfo>
                    Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                 <ChatMessage name="Shelly" date="2/24/2021 03:11:55 PM" img="https://randomuser.me/api/portraits/women/25.jpg" message="This is the best Challenge" />
                 <ChatMessage name="David" date="2/25/2021 07:10:00 PM" img="https://randomuser.me/api/portraits/men/57.jpg" message="Yeah I agree"/>
            </MessageContainer>
            <ChatInput />
        </Container>   
        
        
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Channel = styled.div``

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

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83,.13);
    justify-content: space-between;
`

const MessageContainer = styled.div` 

`
