import React from 'react';
import '../styles/Home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/search/SearchBar';


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt=''/>
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                Welcome to TourMaster, your ultimate travel companion for seamless 
                and unforgettable adventures. Effortlessly plan, book, and manage your tours with personalized recommendations and curated experiences. 
                Your journey to amazing memories starts here!
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero-img-box">
                <img src={heroImg} alt='' />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero-img-box mt-4">
                <img src={heroVideo} alt='' />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero-img-box mt-5">
                <img src={heroImg2} alt='' />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
