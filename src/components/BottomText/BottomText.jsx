import React from 'react'
import { Link } from 'react-router-dom'

import './BottomText.style.css'

const BottomText = () => {
    return (
        <div className="bottom-text">
            <h4 className="bottom-text__title">Не можете найти потерянную вещь?</h4>
            <div className="bottom-text__main">
                <p>Разместите объявление о пропаже и получайте отклики нашедших. 
                    <br/>
                    Также Вы можете подключить функцию 
                    <Link target="_blank" to="/automatic">
                        Ищем за Вас
                    </Link>  
                    - автоматический поиск по заданным параметрам</p>
            </div>
        </div>
    )
}

export default BottomText
