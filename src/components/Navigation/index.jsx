import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/style/Colors';
import More from '../../assets/icons/more.png';
import Message from '../../assets/icons/email.png';
import List from '../../assets/icons/file.png';
import Notif from '../../assets/icons/bell.png';
import Home from '../../assets/icons/home.png';
import User from '../../assets/icons/user.png';
import Twitter from '../../assets/icons/twitter.png';
import Hashtag from '../../assets/icons/hashtag.png';
import Search from '../../assets/icons/search-white.png';


const NavWrapper = styled.div`
    // border: solid green;
    // position: fixed;
    left: 0;
    height: 100vh;
    padding: 20px 0px 0px 70px;
    width: 250px;

    @media (max-width: 800px) {
      position: fixed;
      bottom: 0px;
      height: 40px;
      // border: solid red;
      width: 100vw;
      background: ${Colors.background};
      align-items: flex-start;
      padding-left: 0;
      border-top: 1px solid ${Colors.line};
      padding-bottom: 5px;
    }

    @media (max-width: 470px) {
      padding-bottom: 10px;
    }
`

const NavContent = styled.div`
    // border: solid red;

    @media (max-width: 800px) {
      position: inherit;
      flex-direction: row;
      position: absolute;
      top: 0;
      height: max-content;
      // border: solid yellow;
      width: 100%;
      padding: 0;
      justify-content: space-around;

    }

    >div:nth-child(1) {
      @media (max-width: 800px) {
        display: none;
      }
    }

    >div:nth-child(3) {
      display: none;
      @media (max-width: 800px) {
        display: inline;
      }
    }

    >div:nth-child(4) {
      @media (max-width: 800px) {
        display: none;
      }
    }

    >div:nth-child(7) {
      @media (max-width: 800px) {
        display: none;
      }
    }

    >div:nth-child(8) {
      @media (max-width: 800px) {
        display: none;
      }
    }
    
    >div:nth-child(9) {
      @media (max-width: 800px) {
        display: none;
      }
    }
    position: fixed;
    height: 400px;
    
    display: flex;
    flex-direction: column;
  
    padding: 20px 10px;
    width: max-content;
  
    font-size: 20px;
    font-family: ubuntu;
    color: black;
    font-weight: bold;

  div {
    // border: solid red;
    margin: 10px 0px;
    padding: 10px;
    width: max-content;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      
      @media (max-width: 800px) {
        display: none;
      }

      margin-left: 10px;
      cursor: pointer;

      &:hover {
        color: cyan;
      }
    }
  }
`

const Button = styled.button`
  background: ${Colors.light};
  border: none;
  border-radius: 20px;
  padding: 14px;
  font-size: large;
  font-weight: bold;
  color: white;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`

function Navigation() {
    return (
        <NavWrapper>
            <NavContent>
                <div><img src={Twitter} alt={Twitter} /></div>
                <div><img src={Home} alt={Home} /><span>Home</span></div>
                <div><img src={Search} alt={Search} /></div>
                <div><img src={Hashtag} alt={Hashtag} /><span>Explore</span></div>
                <div><img src={Notif} alt={Notif} /> <span>Notification</span></div>
                <div><img src={Message} alt={Message} /><span>Messages</span></div>
                <div><img src={List} alt={List} /><span>Lists</span></div>
                <div><img src={User} alt={User} /> <span>Profile</span></div>
                <div><img src={More} alt={More} /><span>More</span></div>

                <Button>Tweet</Button>
            </NavContent>
        </NavWrapper>
    )
}

export default Navigation;