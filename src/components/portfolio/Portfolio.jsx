import { React } from 'react'
import './portfolio.scss'

export default function Portfolio() {

    // let [activeItem, setActiveItem] = useState("first")
    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Filler</li>
          <li>Filler</li>
          <li>Filler</li>
          <li id="last">Filler</li>
        </ul>
        <div className="container">
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
              alt="work"
            />
            <h3>App</h3>
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
              alt="work"
            />
            <h3>App</h3>
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
              alt="work"
            />
            <h3>App</h3>
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
              alt="work"
            />
            <h3>App</h3>
          </div>
        </div>
      </div>
    );
}
