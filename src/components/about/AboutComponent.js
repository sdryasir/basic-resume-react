import React from 'react';
import './AboutComponent.css';
import stics from '../../img/stics.png';
import nwf from '../../img/nwf.png';
import fs from '../../img/full-stack.png';

import nya from '../../img/nya.png';

const AboutComponent = () => {
  return (
    <div className='about-wrapper'>
      <div className='container'>
        <h1>About Me</h1>
        <p>
          I am from SuperTech with a passion of Web, FullStack Development
          Graphic and Interactive designs. Enthusiastic about life, design and
          innovation - a Tech geek. I am good at various front and back-end
          technologies like React JS, Bootstrap 4.x, PHP/MySQL, Codeigniter,
          Rest APIs, APIs Integration. Excellent command in english spoken with
          good managment skills.
        </p>
        <div className='about-designations'>
          <div className='designation'>
            <img src={stics} alt='' />
            <h3>SuperTech</h3>
            <p>
              Currently serving as Managing Director SuperTech Institute of
              Computer Sciences, since 2017.
            </p>
          </div>
          <div className='designation'>
            <img src={nwf} alt='' />
            <h3>Nowshera Welfare Foundation</h3>
            <p>
              Serving as President of Nowshera Welfare Foundation - a welfare
              organization in district Abottabad
            </p>
          </div>
          <div className='designation'>
            <img src={fs} alt='' />
            <h3>APCOMS</h3>
            <p>
              Serving as FullStack developer at Army Public College of Managment
              and Sciences since October 2018.
            </p>
          </div>
          <div className='designation'>
            <img src={nya} alt='' />
            <h3>National Youth Assembly</h3>
            <p>
              Member of National Youth Assembly, a plateform where youth is
              being prepared for the future leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
