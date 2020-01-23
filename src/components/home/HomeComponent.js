import React from 'react';
import Picture from '../../img/yasir.jpg';
import './HomeComponent.css';
import { Icon } from 'react-icons-kit';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { youtubePlay } from 'react-icons-kit/fa/youtubePlay';

const HomeComponent = () => {
  return (
    <div className='home-wrapper'>
      <div className='home-inner'>
        <img src={Picture} alt='' />
        <h1>Yasir Ali</h1>
        <h3>Full Stack Developer</h3>
        <p>
          I am from SuperTech with a passion of Web, FullStack Development
          Graphic and Interactive designs. Enthusiastic about life, design and
          innovation - a Tech geek. I am good at various front and back-end
          technologies like React JS, Bootstrap 4.x, PHP/MySQL, Codeigniter,
          Rest APIs, APIs Integration. Excellent command in english spoken with
          good managment skills.
        </p>
        <ul>
          <li>
            <a
              target='_blank'
              href='https://www.facebook.com/yasiraiit'
              rel='noopener noreferrer'>
              <Icon size={24} icon={facebookSquare} />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://twitter.com/Yasir_SuperTech'
              rel='noopener noreferrer'>
              <Icon size={24} icon={twitterSquare} />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/sdryasir/'
              rel='noopener noreferrer'>
              <Icon size={24} icon={linkedinSquare} />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/sdryasir'
              target='_blank'
              rel='noopener noreferrer'>
              <Icon size={24} icon={githubSquare} />
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/channel/UC-OQbSkqM534G1Jh8o5BSUQ'
              rel='noopener noreferrer'>
              <Icon size={24} icon={youtubePlay} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;
