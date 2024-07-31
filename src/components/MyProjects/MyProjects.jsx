import React, { useRef } from 'react'
import './MyProjects.css'
import { MY_PROJECT } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';
import Slider from 'react-slick';


const MyProjects = () => {

    const sliderRef = useRef();

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:1,
    arrows: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ],
};

    const slideRight = () => {
        sliderRef.current.slickNext();
    }
    const slideleft = () => {
        sliderRef.current.slickPrev();
    }
    
    return (
        <section className='project-container'>
            <h5>Projects</h5>
    
            <div className="project-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span class="material-symbols-outlined">chevron_right</span>
    
                    </div>
    
                    <div className="arrow-left" onClick={slideleft}>
                        <span class="material-symbols-outlined">chevron_left</span>
                        </div>
    
    
                 <Slider ref={sliderRef} {...settings}>
                 {MY_PROJECT.map((item) => (
                    <ProjectCard key= {item.title} details= {item} />
                 ))}
                 </Slider>
            </div>
        </section>
      )
    }

export default MyProjects