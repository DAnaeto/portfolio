import {React, useState} from 'react'
import './portfolio.scss'

export default function Portfolio() {
    const data = [
    {
        id: '1',
        title: "Education",
        icon: 'sources/mortarboard.png',
        desc: 'University of Connecticut',
        extra: 'Major: Computer Science'
    },
    {
        id: '2',
        title: 'Work Experience',
        icon: 'sources/portfolio.png',
      desc: "Cisco Meraki",
        extra: 'Software QA Engineer Intern'
    },
    {
        id: '3',
        title: 'Relevant Courses',
        icon: 'sources/online-course.png'
    },
    {
      id: '4',
      title: 'Clubs',
      icon: 'sources/network.png'
    },
    {
      id: '5',
      title: 'Technical Skills',
      icon: 'sources/pencil.png'
    }
    ]
    const clickHandler = (num) => { //0 is left 1 is right
        if (num === 0) {
            setCurrentSlide(
              currentSlide > 0 ? currentSlide - 1 : data.length - 1
            );
        }
        else {
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
        }   
    }
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
      <div className="portfolio" id="portfolio">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((item) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContaine">
                    <div className="imgContainer">
                      <img src={item.icon} alt="Icon" style={{ height: `50px` }}/>
                    </div>
                    <h2>{item.title}</h2>
                    { item['desc'] ? <p>{item.desc}</p> : <div></div> }
                    { item['extra'] ? <span>{item.extra}</span> : <div></div> }
                  </div>
                </div>
                <div className="right"></div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="sources/arrow.png"
          alt="Left arrow"
          className="left arrow"
          onClick={() => clickHandler(0)}
        />
        <img
          src="sources/arrow.png"
          alt="Right arrow"
          className="right arrow"
          onClick={() => clickHandler(1)}
        />
      </div>
    );
}
