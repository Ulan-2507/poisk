import React from 'react'
import { Link } from 'react-router-dom'

import key_to_success from '../assets/img/nf/key-to-success.svg'
import chat_bubble from '../assets/img/nf/chat-bubble.svg'
import business_and_finance from '../assets/img/nf/business-and-finance.svg'
import seo_and_web from '../assets/img/nf/seo-and-web.svg'
import time_and_date from '../assets/img/nf/time-and-date.svg'

const NotFoundPage = () => {
    return (
        <div className="nf">
            <div className="container">
                <p className="nf__text">Оо! Страница не найдена <br/>Похоже такой страницы больше нет, попробуйте поискать что-то еще</p>
                <Link className="nf__tomain" to="/">На главную</Link>
                <span className="nf__or">или</span>
                <ul className="nf__list">
                    <li>
                        <Link className="nf-link" to="/found/create">
                            <span className="nf-link__img">
                                <img src={key_to_success} alt=""/>
                            </span>
                            <span className="nf-link__text">Нашли чужую потерю? Заявить о находке</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="nf-link" to="/lost/create">
                            <span className="nf-link__img">
                                <img src={chat_bubble} alt="" />
                            </span>
                            <span className="nf-link__text">Заявить о пропаже / опубликовать</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="nf-link" to="/found">
                            <span className="nf-link__img">
                                <img src={business_and_finance} alt="" />
                            </span>
                            <span className="nf-link__text">Доска находок / найти потерю</span>
                        </Link >
                    </li>
                    <li>
                        <Link  className="nf-link" to="/automatic">
                            <span className="nf-link__img">
                                <img src={seo_and_web} alt="" />
                            </span>
                            <span className="nf-link__text">Ищем за Вас / Активировать автоматический поиск</span>
                        </Link >
                    </li>
                    <li>
                        <Link  className="nf-link" to="/lost">
                            <span className="nf-link__img">
                                <img src={time_and_date} alt="" />
                            </span>
                            <span className="nf-link__text">Доска потерь / искать объявление</span>
                        </Link >
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NotFoundPage
