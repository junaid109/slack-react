import React from 'react'
import styled from 'styled-components'
function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer >
    <img src={userImage} alt="" />
    <MessageInfo>
        <h4>
            {user} {' '}
            <span>
                {new Date(timestamp?.toDate()).toUTCString()}
            </span>
        </h4>
        <p>{message}</p>
        
    </MessageInfo>
    </MessageContainer>
  )
}

export default Message  

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    > h4 {
        font-weight: 300;
    }
    > p {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
    }
`

const MessageInfo = styled.div`
    padding-left: 10px;
    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`

