import {React, useState} from 'react'
import './portfolio.scss'

export default function Portfolio() {
    const data = [
    {
        id: '1',
        title: "Education",
        icon: 'sources/mortarboard.png',
        desc: 'University of Connecticut',
        extra: 'Computer Science'
    },
    {
      id: '2',
      title: 'Work Experience',
      icon: 'sources/portfolio.png',
      desc: "Cisco Meraki",
      extra: 'Software QA Engineer Intern',
      information: <div className="rightContainer"><p>Created a project using Ruby on Rails</p>
                    <p>Utilized the Jenkins API to retrieve test information</p>
                    <p>Formulated solutions to problems using Ruby scripts</p>
                    <p>Used Jira for bug and progress tracking</p>
                    <p>Used Git for version control</p>
                    <p>
                      Connected an external PostgreSQL database and configured a
                      MongoDB locally on a VM
                    </p>
                    <p>
                      Incorporated Cron to schedule a script that periodically
                      updates a local MongoDB instance
                    </p>
                    <p>Learned about container technology like Docker</p></div>
      },
    {
      id: '3',
      title: 'Technical Skills',
      icon: 'sources/pencil.png'
      },
    
    {
        id: '4',
        title: 'Relevant Courses',
        icon: 'sources/online-course.png'
      },
    
    {
      id: '5',
      title: 'Clubs',
      icon: 'sources/network.png'
    }
    
    ]
  const clickHandler = (num) => {
      // 0 is the left arrow and 1 is right arrow
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
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img
                        src={item.icon}
                        alt="Icon"
                        style={{ height: `50px` }}
                      />
                    </div>
                    <h2>{item.title}</h2>
                    {item["desc"] ? <p>{item.desc}</p> : <div></div>}
                    {item["extra"] ? <span>{item.extra}</span> : <div></div>}
                  </div>
                </div>
                <div className="right">  
                    {item.information}
                </div>
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
