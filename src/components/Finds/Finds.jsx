import React from 'react'
import { Link } from 'react-router-dom';
import FindsMb from '../FindsMb/FindsMb';

import FindsNav from '../FindsNav';
import FindsList from '../FindsList';

import './Finds.style.css'

const Finds = () => {
    const data = [
        {
            id: Math.random() * Date.now(),
            date: '0',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '1',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '2',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '3',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '4',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '5',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '6',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '7',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
        ,
        {
            id: Math.random() * Date.now(),
            date: '8',
            city: 'Одесса',
            text: 'Найден паспорт Козловская Ксения',
            img: 'https://poisk.ua/images/2022/4/ed75b9b3-4fcd-4192-99e6-58e9aed82616.jpg'
        }
    ]

    const nowDate = new Date().toLocaleString().split(',')[0]
    const oldDate = new Date(Date.now() - (10 * 24 * 3600 * 1000)).toLocaleString().split(',')[0]

    return (
        <section id="finds">
	        <div className="container2">
                <div className="top-text">
                    <h2 className="main-title">Актуальные находки по Кыргызстану </h2>
                        <div className="date">
                            <div className="date-value">{`${oldDate} - ${nowDate}`}</div>
                        </div>
                </div>

                <div className="finds">
                    <div className="finds-box">
                        <FindsNav onSelect={(select) => console.log(select)}/>
                        <FindsMb />
                        <FindsList items={data}/>
                    </div>

                    <div className="finds__footer">
                        <Link className="view-all" to="/found">Вся доска находок</Link>
                    </div>
                </div>

            </div>
        </section>
        
    )
}


export default Finds