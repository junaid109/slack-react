import { Style } from '@material-ui/icons'
import { styled } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { AccessTimeIcon } from '@material-ui/icons'
import { SearchIcon } from '@material-ui/icons/Search';
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
    <h1>Test</h1>
    {/* <HeaderLeft> */}
    <HeaderLeft>

    {/* <HeaderAvatar> */}
    <HeaderAvatar>
    </HeaderAvatar>
    <AccessTimeIcon></AccessTimeIcon>
    </HeaderLeft>

    {/* </HeaderSearch> */}
    <HeaderSearch>
        <SearchIcon>
        </SearchIcon>
        <input placeholder='Search ...'> </input>
    </HeaderSearch>

    {/* <HeaderRight> */}
    <HeaderRight></HeaderRight>

    </HeaderContainer>  )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    color: "red";
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
    `

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    > h1 {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    > .muiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }

`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;
    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`

