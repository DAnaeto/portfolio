import {React, useState} from 'react'
import {data} from './data.js'
import './portfolio.scss'

export default function Portfolio() {

  const clickHandler = (num) => {
      // 0 is the left arrow and 1 is right arrow
      console.log(data)
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
                        draggable="false"
                        alt="Icon"
                        style={{ height: `50px` }}
                      />
                    </div>
                    <h2>{item.title}</h2>
                    {item["description"] ? <p>{item.description}</p> : <div></div>}
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
          draggable="false"
          alt="Left arrow"
          className="left arrow"
          onClick={() => clickHandler(0)}
        />
        <img
          src="sources/arrow.png"
          draggable="false"
          alt="Right arrow"
          className="right arrow"
          onClick={() => clickHandler(1)}
        />
      </div>
    );
}
