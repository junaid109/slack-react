import React from 'react'
import { FiberManualRecordIcon, InboxIcon, DraftsIcon, BookmarkBorderIcon, FileCopyIcon, ExpandLessIcon, ExpandMoreIcon } from '@material-ui/icons'
import styled from 'styled-components'
import { useCollection } from 'react-firebase-hooks/firestore'
 function Sidebar() {

 const [channels, setChannels, loading, error] = useCollection(db.collection('rooms'))


  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Test</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Test
                </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File browser" />
        <SidebarOption Icon={ExpandLessIcon} title="Show less" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
        {channels.map((channel) => (
            <SidebarOption 
            key = {channel.id}
            id = {channel.doc}
            title = {doc.data().name} />
        ))}
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
    flex: 0.3;
    color: white;
    background-color: var(--slack-color);
    max-width: 260px;
    margin-top: 60px;
`

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`

const SidebarOption = styled.div`
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

