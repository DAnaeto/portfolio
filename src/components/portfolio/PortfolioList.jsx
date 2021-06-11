import React from 'react'
import './portfoliolist.scss'


export default function PortfolioList(props) {
    const selectedItemHandler = () => {
        props.changeSelected(props.id)
    }
    return (
        <li className={props.active ? "portfoliolist active" : "portfoliolist"} onClick={selectedItemHandler}>
            {props.title}
        </li>
    )
}
