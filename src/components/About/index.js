import React from 'react';
import Footer from '../Footer';
import './index.css';

const About = () => {
  return (
    <>
      <div className='container-about-us'>
        <div className='col-about-me'>
          <h1 className="title-about-me">About Me</h1> <br></br>
          <p className="about-me-text">I like to focus on creating unique and clean design concepts,
        prototypes and interactive experiences. My expertise and skills cover the whole design process, from research and to visual design and execution. </p><br></br>

          <p className="about-me-text-part2">I work with a wide range of clients,
          from startups to well-established companies. My clients are usually looking for user-centered design and product design visions to help them improve their product
         and grow their brand.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;