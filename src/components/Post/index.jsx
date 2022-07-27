import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/style/Colors';
import comment from '../../assets/icons/speech-bubble.png';
import retweet from '../../assets/icons/retweet.png';
import like from '../../assets/icons/love.png';
import upload from '../../assets/icons/upload.png';
import dot from '../../assets/icons/full-stop.png';

const PostWrapper = styled.div`
    // border: solid purple;
    border-bottom: solid 1px ${Colors.line};
    padding-bottom: 10px;
`
const PostHeader = styled.div`
    // border: solid red;
    padding: 20px 20px;
    display: flex;
`

const Profil = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  margin-right: 10px;
`

const Description = styled.div`
    // border: solid green;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    * {
        // border: solid red;
        margin: 0;
    }

    div:nth-child(1) {
        display: flex;
        
        span:nth-child(1) {
            &:hover {
                color: ${Colors.light};
                cursor: pointer;
            }
        }

        img {
            margin-bottom: -5px;
            height: 20px;
        }
    }

    div:nth-child(1)+p {
        // border: solid red;
        margin-top: 10px;
    }

    span {
        color: ${Colors.line};
        font-weight: 300;
    }

    p {
        overflow-y: scroll;
        max-height: 100px;
    }
    p::-webkit-scrollbar{
        display: none;
    }
    
`

const PostBody = styled.div`
    // border: solid blue;
    padding: 5px 20px 5px 60px;
`

const Images = styled.div`
    // border: solid yellow;
    display: flex;
    flex-direction: column;

    img:nth-child(1) {
        border-radius: ${({ image2 }) => image2 ? '10px 10px 0px 0px ' : '10px;'};
    }

    img:nth-child(2) {
        border-radius: ${({ image2 }) => image2 ? '0px 0px 10px 10px' : '10px;'};
    }
`
const ImgPost = styled.img`
    width: 100%;
    height: ${({ image2 }) => image2 ? '200px' : '400px'};
`

const PostFooter = styled.div`
    // border: solid white;
    padding: 5px 40px 5px 60px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        // border: solid red;
        cursor: pointer;

        span {
            color: ${Colors.line};
            margin: 0 3px;
            font-weight: bold;
        }

    }

    div:nth-child(2) {
        align-items: inherit;
        padding-top: 5px;
    }
`

function Post({ profil, image1, image2, nom, pseudo, texte }) {
    return (
        <PostWrapper>
            <PostHeader>
                <Profil src={profil} alt={profil} />
                <Description>
                    <div>
                        <h3>{nom}<span>{pseudo}</span><img src={dot} alt={dot} /><span>1m</span></h3>
                    </div>
                    <p>{texte}</p>
                </Description>
            </PostHeader>

            <PostBody>
                <Images>
                    {image2 ? (
                        <div>
                            <ImgPost src={image1} alt={image1} />
                            <ImgPost src={image2} alt={image2} />
                        </div>
                    ) : (
                        <div>
                            <ImgPost src={image1} alt={image1} />
                        </div>
                    )}
                </Images>
            </PostBody>

            <PostFooter>
                <div><img src={comment} alt={comment} /><span>124</span></div>
                <div><img src={retweet} alt={retweet} /><span>124</span></div>
                <div><img src={like} alt={like} /><span>2.2k</span></div>
                <div><img src={upload} alt={upload} /></div>
            </PostFooter>
        </PostWrapper>
    )
}

export default Post;