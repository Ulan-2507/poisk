import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import facilities1_mobile from '../../assets/img/main/facilities1-mobile.svg'
import facilities2_mobile from '../../assets/img/main/facilities2-mobile.svg'
import facilities3_mobile from '../../assets/img/main/facilities3-mobile.svg'
import facilities4_mobile from '../../assets/img/main/facilities4-mobile.svg'
import facilities5_mobile from '../../assets/img/main/facilities5-mobile.svg'
import facilities1 from '../../assets/img/main/facilities1.svg'
import facilities2 from '../../assets/img/main/facilities2.svg'
import facilities3 from '../../assets/img/main/facilities3.svg'
import facilities4 from '../../assets/img/main/facilities4.svg'
import facilities5 from '../../assets/img/main/facilities5.svg'

import './Facilities.style.css'

const Facilities = () => {
    return (
        <section id="facilities">
            <div className="container2">
                <div className="facilities-wrap">
                    <FacilitiesItem 
                        mbImg={facilities1_mobile}
                        img={facilities1}
                        title='Нашли чужую пропажу?'
                        desc='Проявите порядочность – верните находку ее законному владельцу и
                        позвольте Вас отблагодарить. Кроме того, при публикации объявления
                        предоставляется возможность заявить о размере ожидаемой благодарности.'
                        advantages={[
                            'Бесплатное размещение объявления', 
                            'Вознаграждение за возврат',
                            'Благодарность гарантирована'
                        ]}
                        path='/found/create'
                        linkname='Заявить о находке'
                    />
                    <FacilitiesItem 
                        mbImg={facilities2_mobile}
                        img={facilities2}
                        title='Доска находок'
                        desc='Будь то сумочка в такси, телефон в клубе или ключи по дороге домой – в
                        99% Ваша пропажа уже найдена и возможно опубликована на самом большом
                       ресурсе найденных вещей. Оптимизированные критерии поиска позволят найти
                       потерю в считанные минуты.'
                        advantages={[
                            'Бесплатный поиск',
                            'Центральный поисковый ресурс страны',
                            'Удобные критерии поиска'
                        ]}
                        path='/found'
                        linkname='Найти пропажу'
                    />
                    <FacilitiesItem 
                        mbImg={facilities3_mobile}
                        img={facilities3}
                        title='Заявить о пропаже'
                        desc='Для максимально быстрого возврата пропажи целесообразно разместить объявление о 
                        пропаже на доске потерь са символическую плату. Это позволит нашедшему без труда связаться с
                         Вами, а нам поддерживать высокий уровень обслуживания на ресурсе. Дополнительной мотивацией является возможность публикации
                        вознаграждения за возврат. Кроме того, в течении 3 дней Вам будут
                        бесплатно присылаться результаты совпадений по критериям
                         поиска.'
                        advantages={[
                            'Внимание со стороны нашедшего',
                            'Публикация вознаграждения за возврат'
                        ]}
                        path='/lost/create'
                        linkname='Опубликовать'
                    />
                    <FacilitiesItem 
                        mbImg={facilities4_mobile}
                        img={facilities4}
                        title='Ищем за Вас / Автоматический поиск'
                        desc='Не стоит расстраиваться, если результаты поиска не дали ожидаемого
                        результата – возможно нашедший еще не успел опубликовать находку на 
                        ресурсе. Подключите услугу автоматического поиска и получайте результаты совпадений по заданным критериям в течении заданного срока.'
                        advantages={[
                            'Экономия времени',
                            'Удобство – все результаты на мобильный или почту',
                            'Выбор временного интервала поиска'
                        ]}
                        path='/automatic'
                        linkname='Активировать'
                    />
                    <FacilitiesItem 
                        mbImg={facilities5_mobile}
                        img={facilities5}
                        title='Доска пропаж'
                        desc='Возможно, владелец уже разместил объявление о пропаже на нашем ресурсе.
                        Актуальная доска потерь предоставляет возможность нашедшему быстро найти
                        нужное объявление о потере и сразу связаться с владельцем.'
                        advantages={[
                            'Оптимизированные критерии поиска объявлений',
                            'Бесплатная передача контактных данных владельцу'
                        ]}
                        path='/lost'
                        linkname='Искать объявление'
                    />
                </div>
            </div>
        </section>
    )
}


function FacilitiesItem ({mbImg, img, title, desc, advantages=[], path, linkname}) {
    const [more, setMore] = useState(false)
    const handleMore = () => {
        setMore(more => !more)
    }
    const key = () => Math.random() * Date.now()
    return (
        <div className="facilities-wrap__item">
            <picture className="image">
                <source media="(max-width: 576px)" srcSet={mbImg}/>
                <img src={img} alt={title}/>
            </picture>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="desc" style={{display: `${more ? 'block' : ''}`}}>{desc}</p>
                <ul className="advantages">
                {advantages.map(advantage => (
                    <li key={key()}>{advantage}</li>
                ))}
                </ul>
                <div className={"more-mobile" + (more ? ' active' : '')} onClick={handleMore}>
                    <span>ещё</span>
                </div>
                <Link className="btn-orange" to={path}>{linkname}</Link>
            </div>
        </div>
    )
}
export default Facilities
