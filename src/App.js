import React, { useAuthState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import store from "./app/store";
import { InsertComment, Inbox, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess, ExpandMore, Add, StoreMallDirectoryOutlined } from '@material-ui/icons';
import { Chat } from "./components/Chat";
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar';
import SidebarContainer from "./components/SidebarContainer";
import SidebarHeader from "./components/SidebarHeader";
import SidebarInfo from  "./components/SidebarInfo";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './components/SidebarOption';
import { auth } from "./firebase";
import { Login } from "./components/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) {
    return (
      <AppLoading>
      <AppLoadingContents>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" /> 
        <Spinner 
        name="ball-spin-fade-loader" 
        color="purple" 
        fadeIn="none" />
      </AppLoadingContents>
    </AppLoading>
    )
  
  }

  return (
    <Provider store={store}>
      <Router>
      {!user ? (
       <Login />
      ) : (
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
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
            {store.map((channel) => (
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
      )}

    </Router>
    </Provider>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

