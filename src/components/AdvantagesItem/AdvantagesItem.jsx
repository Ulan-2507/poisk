import React from 'react'
import './AdvantagesItem.style.css'


const AdvantagesItem = ({img, title, desc}) => {
    return (
        <div className="advantages-wrap__item">
            <div className="image">
                <img src={img} alt={title} />
            </div>
            <h4 className="title">{title}</h4>
            <p className="desc">{desc}</p>
        </div>
    )
}

export default AdvantagesItem
