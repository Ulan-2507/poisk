import React from 'react'
import { Link } from 'react-router-dom'

import BcrumbsBox from '../components/BcrumbsBox'
import AdvantagesItem from '../components/AdvantagesItem'

import _2222 from '../assets/img/main/2222.svg'
import _5555 from '../assets/img/main/5555.svg'
import _6666 from '../assets/img/main/6666.svg'
import _4 from '../assets/img/do/4.svg'
import _5 from '../assets/img/do/5.svg'
import _6 from '../assets/img/do/6.svg'
import bg_img from '../assets/img/do/2348128.png'
import bg_img_mb from '../assets/img/do/2348128-mb.png'

const OrganizationPage = () => {
    return (
        <div className="do">
		    <div className="page-top">
                <div className="page-top__bg">
                    <img src={bg_img} alt="bg"/>
                    <img src={bg_img_mb} alt="bg"/>
                </div>
                <div className="container">
                    <BcrumbsBox navigate={[{path: '/organization', linkname: 'Для организаций'}]}/>

                    <h2 className="page-top__title">Для Организаций</h2>
                    <p className="page-top__subtitle">Сталкиваетесь с большим числом потерянных вещей? 
                        <br/>Откройте свой личный кабинет и пользуйтесь его преимуществами!
                    </p>
                    <ul className="dl-top__btns">
                        <li><Link className="mybtn mybtn_orange" to="/account/login">Cоздать личный кабинет</Link></li>
                        <li><Link className="mybtn mybtn_blue" to="/profile">Войти</Link></li>
                    </ul>
                </div>
		    </div>

            <section id="advantages" className="do1">
                <div className="container">

                    <div className="advantages-wrap">
                        <AdvantagesItem 
                            img={_2222}
                            title={'Вознаграждение за возврат'}
                            desc={'Чем больше объявлений вы опубликуете - тем больше получите вознаграждений от благодарных владельцев'}
                        />
                        <AdvantagesItem 
                            img={_5555}
                            title={'Личный кабинет'}
                            desc={'Управляйте Вашими объявлениями. Поскольку все Ваши контактные данные сохранены, создание объявления сводиться к 1-2 минутам'}
                        />
                        <AdvantagesItem 
                            img={_6666}
                            title={'Надёжность и безопасность'}
                            desc={'Процесс регистрации - создание имени и пароля пользователя - дополнительный уровень защиты Ваших данных'}
                        />
                    </div>
                    
                </div>
            </section>

            <div className="do2">
                <div className="container">
                    <h3 className="do2__title">Как это работает</h3>
                    <ul className="do2__items">
                        <ListItem 
                            img={_4}
                            title={'1. Зарегистрируйтесь'}
                            text={'Единоразово заполнив форму с контактными данными Вы экономите время при каждой публикации объявлений. Письмо с просьбой о подтверждении Вашей регистрации прийдёт на указанный Вами емайл-адрес.'}
                        />
                        <ListItem 
                            img={_5}
                            title={'2. Опубликуйте ваши находки'}
                            text={'Публикация объявления займёт 1-2 минуты поскольку состоит всего из 3-4 шагов: прикрепить одну фотографию находки, написать заголовок, выбрать категорию, описать находку и её обстоятельства (по желанию).'}
                        />
                        <ListItem 
                            img={_6}
                            title={'3. Получайте вознаграждение от владельцев'}
                            text={'Пусле публикации владелец сможет легко найти свою вещь и связаться с Вами. Вознаграждение за возврат (до 20% стоимости находки) предусматриваеся законом КР согласно ст. 260 Гражданского кодекса КР '}
                        />
                    </ul>
                    <Link className="do2__btn mybtn mybtn_blueinv" to="/account/login">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

function ListItem({img, title, text}) {
    return (
        <li>
            <div className="do2-item">
                <div className="do2-item__img">
                    <img src={img} alt="icon" />
                </div>
                <div className="do2-item__main">
                    <h4 className="do2-item__title">{title}</h4>
                    <p className="do2-item__text">{text}</p>
                </div>
            </div>
        </li>
    )
}
export default OrganizationPage
