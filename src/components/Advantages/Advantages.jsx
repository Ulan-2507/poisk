import React from 'react'

import AdvantagesItem from '../AdvantagesItem'

import _2222 from '../../assets/img/main/2222.svg'
import _333 from '../../assets/img/main/333.svg'
import _6666 from '../../assets/img/main/6666.svg'
import _7777 from '../../assets/img/main/7777.svg'
import _5555 from '../../assets/img/main/5555.svg'
import _111 from '../../assets/img/main/111.svg'

import './Advantages.style.css'

const Advantages = () => {
    return (
        <section id="advantages"> 
            <div className="container2">
                <h2 className="main-title">Преимущества</h2>
                <div className="advantages-wrap">
                    <AdvantagesItem 
                        img={_2222}
                        title='Вознаграждение за возврат'
                        desc='Проявление благодарности за порядочность - до 20% согласно ст. 260
                        Гражданского кодекса КР'
                    />
                    <AdvantagesItem 
                        img={_333}
                        title='Бесплатные объявления'
                        desc='Публикация объявления о находке является абсолютно бесплатной'
                    />
                    <AdvantagesItem 
                        img={_6666}
                        title='Безопасность'
                        desc='Безопасность потерявшего и нашедшего от мошенников'
                    />
                    <AdvantagesItem 
                        img={_7777}
                        title='Ежедневные обновления'
                        desc='Находите свежие объявления каждый день - наша база обновляется ежеминутно'
                    />
                    <AdvantagesItem 
                        img={_5555}
                        title='Экономия времени'
                        desc='Публикуйте объявления о находке или потере в течении 1-2 минут'
                    />
                    <AdvantagesItem 
                        img={_111}
                        title='Отсутствие рекламы'
                        desc='Мы заботимся об удобстве пользователей, поэтому исключили всю рекламу'
                    />
                </div>
            </div>
        </section>
    )
}

export default Advantages
