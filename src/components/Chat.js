import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { InfoOutlinedIcon, StarBorderOutlinedIcon, MicIcon   } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { selectRoomId } from './features/appSlice';

function Chat() {

    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);

    const [roomDetails, setRoomDetails] = useDocument(
        roomId && db
        .collection('rooms')
            .doc(roomId)
    );

    const [roomMessages, loading] = useCollection(
        roomId && db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, loading]);
    



  return (
    <ChatContainer >
    <Header>
        <HeaderLeft>
            <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlinedIcon />
            </h4>
        </HeaderLeft>
        <HeaderRight>
            <p>
                <InfoOutlinedIcon /> Details
            </p>    
        </HeaderRight>

    </Header>

    <ChatMessages>
    {roomMessages?.docs.map(doc => {
        const { message, timestamp, user, userImage } = doc.data();

        return (
            <Message >
                <img src={userImage} alt="" />
                <MessageInfo>key={doc.id} 
                message={message}
                timestamp={timestamp}
                user={user}
                
                    <h4>
                        {user} {' '}
                        <span>
                            {new Date(timestamp?.toDate()).toUTCString()}
                        </span>
                    </h4>
                    <p>{message}</p>
                </MessageInfo>
            </Message>
        )
    })}
    <ChatBottom ref={useRef}>
    </ChatBottom>

    </ChatMessages>
     
    <ChatInput 
    chatRef={chatRef}
    channelName={roomDetails?.data().name} 
    channelId={roomId} />


    
    </ChatContainer>

  )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`

const Header = styled.div`
    display: flex;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`

const ChatMessages = styled.div``
const ChatBottom = styled.div`
    padding-bottom: 200px;`

const ChatInput = styled.div``
const ChatInputContainer = styled.div``
const ChatInputHeader = styled.div``
const ChatInputHeaderLeft = styled.div``
const ChatInputHeaderRight = styled.div``
const ChatInputBody = styled.div``
const ChatInputFooter = styled.div``
const ChatInputFooterLeft = styled.div``
const ChatInputFooterRight = styled.div``
const ChatInputFooterRightButton = styled.div``
