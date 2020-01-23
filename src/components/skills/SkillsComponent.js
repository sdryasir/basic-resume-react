import React from 'react';
import './SkillsComponent.css';
import { Icon } from 'react-icons-kit';
import { html5 } from 'react-icons-kit/fa/html5';
import { css3 } from 'react-icons-kit/fa/css3';
import { freeCodeCamp } from 'react-icons-kit/fa/freeCodeCamp';
import { database } from 'react-icons-kit/fa/database';
import { code } from 'react-icons-kit/fa/code';
import { chain } from 'react-icons-kit/fa/chain';
import { fileTextO } from 'react-icons-kit/fa/fileTextO';
import { github } from 'react-icons-kit/fa/github';
import { wordpress } from 'react-icons-kit/fa/wordpress';
const SkillsComponent = () => {
  return (
    <div className='skills-wrapper'>
      <div className='container'>
        <h1>Skills Set</h1>
        <div className='skills'>
          <div className='skill'>
            <Icon size={64} icon={html5} />
            <h3>HTML5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>
          <div className='skill'>
            <Icon size={64} icon={css3} />
            <h3>CSS3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>
          <div className='skill'>
            <Icon size={64} icon={code} />
            <h3>PHP </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>

          <div className='skill'>
            <Icon size={64} icon={freeCodeCamp} />
            <h3>Codeigniter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>
          <div className='skill'>
            <Icon size={64} icon={chain} />
            <h3>REST APIs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>
          <div className='skill'>
            <Icon size={64} icon={fileTextO} />
            <h3>React JS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>
          <div className='skill'>
            <Icon size={64} icon={github} />
            <h3>Git</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>
          <div className='skill'>
            <Icon size={64} icon={wordpress} />
            <h3>WordPress</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis hic optio sed ab esse porro culpa suscipit aliquid
              expedita quam quas enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
