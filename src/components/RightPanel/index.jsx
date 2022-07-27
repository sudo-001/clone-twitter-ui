import React from 'react';
import styled from 'styled-components';
import loupe from '../../assets/icons/loupe.png';
import { Colors } from '../../utils/style/Colors';
import dot from '../../assets/icons/full-stop.png';
import HappenImg from '../../assets/images/Help.jpg';
import profil from '../../assets/images/profil.jpg';
import profil2 from '../../assets/images/Mario.jpeg';
import profil3 from '../../assets/images/Thonyo.JPG';

const RightPanelWrapper = styled.div`
    // border: solid red;
    width: 30%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1100px) {
        display: none;
    }
`

const Search = styled.div`
    // border: solid green;
    position: relative;
    padding: 10px 20px;

    div {
        background: ${Colors.lineOpacytied};
        // border: solid  1px red;
        border-radius: 40px;
        width: 100%;
        height: 40px;
        display: flex;
    }

    input {
        padding: 10px 0px 10px 10px;
        border-radius: 0px 40px 40px 0px ;
        width: 100%;
        font-size: 20px;
        color:rgb(229, 226, 226);
        background: transparent;
        border: none;
    }
    
    img {
        padding: 8px;
        border-radius: 40px 0 0 40px;
        cursor: pointer;
    }

`
const HappeningWrapper = styled.div`
    // border: solid red;

    padding: 15px 10px;

`

const HappeningContainer = styled.div`
    border-radius: 20px;
    // border: solid red;
    padding-top: 10px;
    background-color: ${Colors.lineOpacytied};

    .last-body {
        border-bottom: none;
    }
`
const Happening = styled.div`
    border-bottom: 1px solid ${Colors.line};
`

const Title = styled.div`
    padding: 0px 0px 0px 10px;
    border-bottom: 1px solid ${Colors.line};
`
const Body = styled.div`
    padding: 0px 10px;
    // border: solid red;
    height: 200px;
    display: flex;

    h3 {
        color: ${Colors.line};
        // border: solid red;
        font-weight: 400;

        img {
            // border: solid red;
            margin-bottom: -5px;
            height: 20px;
        }
    }

    p {
        // border: solid red;
        width: 90%;
        height: 50px;
        line-height: 25px;
        font-size: 18px;
        padding: 10px 0px;
        font-weight: bold;
    }
`
const LinkAccount = styled.span`
    color: ${Colors.light};
    cursor: pointer;
`
const Img = styled.img`
    width: 150px;
    height: 60%;
    align-self: center;
    // border: solid red;
    border-radius: 20px;
`

const FollowWrapper = styled.div`
    // border: solid yellow;

    padding: 15px 10px;
`
const FollowContainer = styled.div`
    border-radius: 20px;
    // border: solid red;
    padding-top: 10px;
    background-color: ${Colors.lineOpacytied};

    .last-body {
        border-bottom: none;
    }
`
const Follow = styled.div`
    border-bottom: solid 1px ${Colors.line} ;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    >div {
        display: flex;
        align-items: center;
        
        >div{
            * {
                margin: 0;
            }
            
            >p {
                color: ${Colors.line};
                font-size: 20px;
                margin-top: 0;
            }
        }
        
    }
`

const FollowButton = styled.button`
    color: ${Colors.light};
    padding: 10px 20px;
    border: solid 2px ${Colors.light};
    background: transparent;
    height: 40px;
    border-radius: 40px;
    font-weight: bold;
    font-size: 15px;

    &:hover {
        background: ${Colors.light};
        color: #fff;
        cursor: pointer;
        border: none;
    }
`

const Profil = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`

function RightPanel() {
    return (
        <RightPanelWrapper>
            <Search>
                <div>
                    <img src={loupe} alt={loupe} />
                    <input type='search' placeholder="Search" />
                </div>
            </Search>

            <HappeningWrapper>
                <HappeningContainer>

                    <Title>
                        <h2>What's happening</h2>
                    </Title>

                    <Happening>
                        <Body>
                            <div>
                                <h3>Entertainment <img src={dot} alt={dot} />LIVE</h3>
                                <p>I saw a man barefoot and i helped him. Thougths?</p>
                                <h3>Trending in <LinkAccount>#RRR</LinkAccount></h3>
                            </div>

                            <Img src={HappenImg} alt={HappenImg} />
                        </Body>
                    </Happening>

                    <Happening>
                        <Body>
                            <div>
                                <h3>Entertainment <img src={dot} alt={dot} />LIVE</h3>
                                <p>I saw a man barefoot and i helped him. Thougths?</p>
                                <h3>Trending in <LinkAccount>#RRR</LinkAccount></h3>
                            </div>

                            <Img src={HappenImg} alt={HappenImg} />
                        </Body>
                    </Happening>

                    <Happening className='last-body'>
                        <Body>
                            <div>
                                <h3>Entertainment <img src={dot} alt={dot} />LIVE</h3>
                                <p>I saw a man barefoot and i helped him. Thougths?</p>
                                <h3>Trending in <LinkAccount>#RRR</LinkAccount></h3>
                            </div>

                            <Img src={HappenImg} alt={HappenImg} />
                        </Body>
                    </Happening>
                </HappeningContainer>


            </HappeningWrapper>

            <FollowWrapper>
                <FollowContainer>
                    <Title>
                        <h2>Who to Follow</h2>
                    </Title>

                    <Follow>
                        <div>
                            <Profil src={profil} alt={profil} />
                            <div>
                                <h3>Sudo musk</h3>
                                <p>@sarshero</p>
                            </div>
                        </div>

                        <FollowButton>Follow</FollowButton>
                    </Follow>
                    <Follow>
                        <div>
                            <Profil src={profil2} alt={profil2} />
                            <div>
                                <h3>Antangana Mario</h3>
                                <p>@Friji</p>
                            </div>
                        </div>

                        <FollowButton>Follow</FollowButton>
                    </Follow>
                    <Follow className='last-body'>
                        <div>
                            <Profil src={profil3} alt={profil3} />
                            <div>
                                <h3>Anthony Ronaldo</h3>
                                <p>@thonyo</p>
                            </div>
                        </div>

                        <FollowButton>Follow</FollowButton>
                    </Follow>
                </FollowContainer>
            </FollowWrapper>
        </RightPanelWrapper>
    )
}

export default RightPanel;