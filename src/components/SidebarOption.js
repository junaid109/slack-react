import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import { enterRoom } from '../features/appSlice'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
const SidebarOption = ({Icon, title, addChannelOption, id}) => {
    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if (channelName) {
            // db stuff
            db.collection('rooms').add({
                name: channelName,
            })
            
        }
    }

    const selectChannel = () => {
        if (id){
            dispatch(enterRoom({
                roomId: id,
            }))

        }

    }
    

    return (
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize="small" style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}


export default SidebarOption

const SidebarOptionContainer = styled.h3`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }
    > h3 {
        font-weight: 500;
    }
    > h3 > .MuiSvgIcon-root {
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`

const SidebarOptionChannel = styled.div`
    > h3 {
        font-size: 12px;
        font-weight: 500;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`

