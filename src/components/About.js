import React from 'react';
import pic from '../assets/james-kboo.jpeg';
import { AboutMain, ProfileImg, TitleSpan, Bio, BioPara } from '../styled-components/about-styles';

function About() {
  return (
    <AboutMain>
      <ProfileImg src={pic} />
      <Bio>
        <BioPara>
          <TitleSpan>James Lightfoot </TitleSpan>
        is a software engineer from Portland, OR with a passion for music, games, systems design, and data.
        He designed Card Coven to make it easier than ever to find both the Magic Cards you are looking for and ones you&apos;ve never seen. 
        </BioPara>
      </Bio>
    </AboutMain>
  );
}

export default About;
