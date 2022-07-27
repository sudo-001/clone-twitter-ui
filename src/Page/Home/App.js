import React from 'react';
import { FaBeer } from 'react-icons/fa';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import RightPanel from '../../components/RightPanel';
import { Colors } from '../../utils/style/Colors';
import profil from '../../assets/images/6.jpg';
import Gallery from '../../assets/icons/Gallery.png';
import Gif from '../../assets/icons/gif.png';
import Rank from '../../assets/icons/ranking.png';
import clock from '../../assets/icons/clock.png';
import emoji from '../../assets/icons/happy.png';
import Post from '../../components/Post';
import { Profils } from '../../data';
import Star from '../../assets/icons/shining.png';

const HomeWrapper = styled.div`
  display: flex;
  
  @media (max-width: 470px) {
    margin-bottom: 80px;
  }

  @media (max-width: 800px) {
    margin-bottom: 70px;
  }
`
const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  border: solid ${Colors.line} 1px;
  border-top: none;
  width: 60%;

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`
const HomeHeader = styled.div`
  // border: solid red;
  
  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${Colors.line} 1px solid;
    height: 8vh;
    padding: 0 10px;
  }
`
const FormPost = styled.div`
  border-bottom: 8px solid ${Colors.line} ;
  padding: 10px 10px;
  display: flex;
  
  @media (max-width: 320px) {
    padding-right: 0px;
  }
`
const Profil = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`

const Form = styled.form`
  // border: solid red;
  width: 100%;

  textarea {
    width: 98%;
    font-size: 20px;
    background: transparent;
    border: none;
  }

  > div {
    // border: solid green;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
      // border: solid yellow;
      position: relative;
      margin: 20px 0px 0px -80px;
    }

    @media (max-width: 320px) {
      margin: 20px 0px 0px -88px;
      justify-content: start;
      padding-left: 0;
      // border: solid red;
      // padding-right: 0px;
    }

    img {
      margin: 0px 10px ;
      cursor: pointer;
    }

    img:nth-child(3) {
      transform: rotate(90deg);
    }
  }
`

const Button = styled.button`
  background: ${Colors.light};
  border: none;
  border-radius: 30px;
  padding: 12px 30px;
  font-size: large;
  font-weight: bold;
  color: white;
  cursor: pointer;

  @media (max-width: 470px) {
    padding: 12px 15px;
  }

  @media (max-width: 320px) {
    padding: 6px 7.5px
  }
`


const HomeBody = styled.div`
  // border: solid yellow;
`

function App() {
  return (
    <HomeWrapper>

      <Navigation />
      <HomeContent>

        {/* Home header */}
        <HomeHeader>
          <div>
            <h3>Home</h3> <img src={Star} alt={Star} />
          </div>

          <FormPost>
            <Profil src={profil} alt={profil} />

            <Form>
              <textarea placeholder="What's happening?"></textarea>

              <div>
                <div>
                  <img src={Gallery} alt={Gallery} />
                  <img src={Gif} alt={Gif} />
                  <img src={Rank} alt={Rank} />
                  <img src={emoji} alt={emoji} />
                  <img src={clock} alt={clock} />
                </div>

                <Button>Tweet</Button>

              </div>
            </Form>
          </FormPost>

        </HomeHeader>

        {/* Home Body */}
        <HomeBody>
          { Profils.map((profil) => (
            <Post nom={profil.nom} pseudo={profil.pseudo} profil={profil.profil} texte={profil.tweet} image1={profil.image1} image2={profil.image2} />
          ))}
        </HomeBody>


      </HomeContent>

      <RightPanel />
    </HomeWrapper>
  );
}

export default App;
