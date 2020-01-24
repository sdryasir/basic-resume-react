import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './TestimonialsComponent.css';

import Picture from '../../img/placeholder.png';

const TestimonialsComponent = () => {
  return (
    <div className='testimonial-wrap'>
      <div className='container'>
        <h1>Testimonial & Reviews</h1>
        <div className='owl-carousel-wrapper'>
          <OwlCarousel
            className='owl-theme'
            loop
            margin={10}
            nav
            dots={false}
            autoPlay={true}
            items={1}
            loop>
            <div class='item'>
              <img src={Picture} alt='' />

              <h2>Mr. Yasir Ali</h2>
              <p>
                <i>Senior Manager - Organization</i>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                deleniti similique dignissimos vero reprehenderit. Odio natus
                maxime, aliquid dolorum, voluptatum repellat neque voluptatibus
                saepe vel sint, consequuntur veritatis optio corrupti! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
                debitis aliquid nihil vero repudiandae velit eum praesentium
                fuga esse reiciendis, possimus odio a doloribus vitae eos error.
                Sed, dolorum?
              </p>
            </div>
            <div class='item'>
              <img src={Picture} alt='' />
              <h2>Mr. Liaquat Ali</h2>
              <p>
                <i>Senior Manager - Organization</i>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                deleniti similique dignissimos vero reprehenderit. Odio natus
                maxime, aliquid dolorum, voluptatum repellat neque voluptatibus
                saepe vel sint, consequuntur veritatis optio corrupti! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
                debitis aliquid nihil vero repudiandae velit eum praesentium
                fuga esse reiciendis, possimus odio a doloribus vitae eos error.
                Sed, dolorum?
              </p>
            </div>
            <div class='item'>
              <img src={Picture} alt='' />
              <h2>Mr. Aadish Sabir</h2>
              <p>
                <i>Senior Manager - Organization</i>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                deleniti similique dignissimos vero reprehenderit. Odio natus
                maxime, aliquid dolorum, voluptatum repellat neque voluptatibus
                saepe vel sint, consequuntur veritatis optio corrupti! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
                debitis aliquid nihil vero repudiandae velit eum praesentium
                fuga esse reiciendis, possimus odio a doloribus vitae eos error.
                Sed, dolorum?
              </p>
            </div>
            <div class='item'>
              <img src={Picture} alt='' />
              <h2>Mr. Yasir Ali</h2>
              <p>
                <i>Senior Manager - Organization</i>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                deleniti similique dignissimos vero reprehenderit. Odio natus
                maxime, aliquid dolorum, voluptatum repellat neque voluptatibus
                saepe vel sint, consequuntur veritatis optio corrupti!
              </p>
            </div>
            <div class='item'>
              <img src={Picture} alt='' />
              <h2>Mr. Yasir Ali</h2>
              <p>
                <i>Senior Manager - Organization</i>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                deleniti similique dignissimos vero reprehenderit. Odio natus
                maxime, aliquid dolorum, voluptatum repellat neque voluptatibus
                saepe vel sint, consequuntur veritatis optio corrupti! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Ab minus
                debitis aliquid nihil vero repudiandae velit eum praesentium
                fuga esse reiciendis, possimus odio a doloribus vitae eos error.
                Sed, dolorum?
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
