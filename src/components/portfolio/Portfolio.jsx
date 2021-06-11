import { React, useState, useEffect } from 'react'
import './portfolio.scss'
import PortfolioList from './PortfolioList';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio } from '../../data.js'

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState("education");
   const [data, setData] = useState([]);
  const list = [
    {
      id: "education",
      title: "Education"
    },
    {
      id: "experience",
      title: "Experience"
    },
    {
      id: "courses",
      title: "Relevant Courses"
    },
    {
      id: "resume",
      title: "Resume"
    }
  ]
  
  useEffect(() => {
    switch (selectedItem) {
      case "education":
        setData(featuredPortfolio);
        break;
      case "experience":
        setData(webPortfolio);
        break;
      case "courses":
        setData(mobilePortfolio);
        break;
      case "resume":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
    
  }, [selectedItem])

   
    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map(item => (
              <PortfolioList title={item.title} active={selectedItem === item.id} changeSelected={setSelectedItem} id={item.id }/>
            ))}
        </ul>
        <div className="container">
          {data.map(item => (
            <div className="item">
            <img
                src={item.img}
              alt="work"
              />
              <h3>{item.title}</h3>
          </div>
              ))}
        </div>
      </div>
    );
}
