import React from 'react'
import { Link } from 'react-router-dom'

import './Main.style.css'

const Main = () => {
    
    const scroll = (e) => {
        e.preventDefault()
        const el = document.getElementById('finds');
        el.scrollIntoView({behavior: "smooth", block: "end",})
    }
    return (
        <section id="main">
            <div className="container2">
                <div className="text-wrap">
                    <h1 className="main-title">Порядочность<br/> вознаграждается</h1>
                    <div className="btn-wrap">
                        <Link className="btn-orange" to="/found/create">Заявить о находке</Link>
                        <Link className="o-btn" to="/found">Найти пропажу</Link>
                        <p className="desc">Вознаграждение за возврат согласно ст. 260 Гражданского кодекса КР</p>
                    </div>
                    <div className="bottom">
                        <h4>Актуальные находки по всему Кыргызстану</h4>
                        <Link to="/#" className="scroll-down" onClick={scroll}></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
