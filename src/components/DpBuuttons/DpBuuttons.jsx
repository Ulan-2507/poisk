import React from 'react'
import { Link } from 'react-router-dom'

import './DpBuuttons.style.css'

const DpBuuttons = () => {
    return (
        <ul className="dp-buttons">
            <li>
                <Link className="mybtn mybtn_orange" to="/lost/create">Разместить объявление о пропаже</Link>
            </li>
            <li>
                <Link className="mybtn mybtn_blue" to="/automatic">Ищем за Вас</Link>
            </li>
        </ul>
    )
}

export default DpBuuttons
