import React from 'react'
import { Link } from 'react-router-dom'

import logo_white from '../../assets/img/logo-white.svg'
import visa from '../../assets/img/visa.png'
import mc from '../../assets/img/mc.png'

import './Footer.style.css'


const Footer = () => {
    return (
        <footer>
            <div className="container2">
                <div className="footer-col col-logo">
                    <Link to="/" className="logo">
                        <img src={logo_white} alt=""/>
                    </Link>
                    <h3 className="summary">POISK.KG - сервис находок №1 в Кыргызстане</h3>
                    <div className="copyright">© 2022 Poisk.kg</div>
                </div>
                <div className="footer-col">
                    <ul className="footer-menu">			
                        <li><Link to="/found/create">Я нашёл</Link></li>
                        <li><Link to="/lost/create">Я потерял</Link></li>
                        <li><Link to="/found">Доска находок</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <ul className="footer-menu">
                        <li><Link to="/lost">Доска пропаж</Link></li>
                        <li><Link to="/automatic">Ищем за вас</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                    </ul>
                </div>
                <div className="footer-col help-menu">
                    <ul className="footer-menu">
                        <li><Link to="/offer">Публичный договор</Link></li>
                        <li><Link to="/privacy">Политика конфиденциальности</Link></li>
                        <li><Link to="/security">Безопасность</Link></li>
                        <li><Link to="/rules">Правила портала</Link></li>
                        <li>
                            <img src={visa} style={{height: "40px"}} alt='visa'/>
                            <img src={mc} style={{height: "40px"}} alt='master card'/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
