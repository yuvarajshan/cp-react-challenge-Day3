import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import { TextFormatOutlined as TextFormatOutlinedIcon, 
    AttachFile as AttactFileIcon,
    InsertEmoticonOutlined as InsertEmoticonOutlinedIcon,
    AlternateEmailOutlined as AlternateEmailOutlinedIcon } from '@material-ui/icons';

const ChatInput = () => {
    return (
       <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
                 <AdditionalButtonsContainer>
                     <AttactFileIcon/> 
                     <InsertEmoticonOutlinedIcon/>
                     <TextFormatOutlinedIcon/>    
                     <AlternateEmailOutlinedIcon/>                   
                </AdditionalButtonsContainer>
            </InputContainer>           
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;
    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    .MuiSvgIcon-root {
        width: 18px;
    }
    :hover {
        background: #148567
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`

const AdditionalButtonsContainer = styled.div`
    border-top:1px solid lightgray;
    height:29px;
    color:gray;
    display:flex;
    flex-direction:row-reverse;
    padding-top:10px;
    padding-bottom:2px;
    padding-right:1px;    

    .MuiSvgIcon-root{
        font-size:21px;
        cursor:pointer;
    }
`
