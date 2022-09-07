import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import store from "./app/store";
import { InsertCommentIcon, InboxIcon, DraftsIcon, BookmarkBorderIcon, PeopleAltIcon, AppsIcon, FileCopyIcon, ExpandLessIcon, ExpandMoreIcon, AddIcon } from '@material-ui/icons';
import { Chat } from "./components/Chat";
function App() {
  return (
    <Provider store={store}>
      <Router>
      <>
      <Header/>
      <AppBody>
        <Sidebar>
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
              <SidebarOption title={channel.name} id={channel.id} />
            ))}
          </SidebarContainer>
        </Sidebar>
        <Switch>
          <Route path="/room/:channelId">
            <Chat />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </AppBody>
  
      </>
    </Router>
    </Provider>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;