import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import logo_liqpay from '../assets/img/pay/logo-liqpay.png'

import whatsapp from '../assets/img/sn/whatsapp.svg'
import viber from '../assets/img/sn/viber.svg'
import telegram from '../assets/img/sn/telegram.svg'
import skype from '../assets/img/sn/skype.svg'


const PayPage = ({lost}) => {
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const data = {} //получить данные с сервера
        setData(data)

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        //отправить на обработку

    }
    const messengers = {
        'whatsapp': {
            img: whatsapp,
            alt: 'whatsapp'
        },
        'viber': {
            img: viber,
            alt: 'viber'
        },
        'telegram': {
            img: telegram,
            alt: 'telegram'
        },
        'skype': {
            img: skype,
            alt: 'skype'
        },
    }
    return (
        <div className="pay">
            <div className="container">
                <h3 className="stitle pay__title">{lost ? 'Подтверждение публикации' : 'Оплата'}</h3>
                <div className="pay__blocks">
                    <div className="pay__block">
                        <div className="pay-table">
                            <div className="pay-table__row">
                                <div>Услуга:</div>
                                <div>{lost ? 'Публикация объявления о потере' : 'Автоматический поиск'}</div>
                            </div>
                            <div className="pay-table__row">
                                <div>Стоимость:</div>
                                <div>{data.price}</div>
                            </div>
                            <div className="pay-table__row">
                                <div>Город:</div>
                                <div>{data.location}</div>
                            </div>
                            <div className="pay-table__row">
                                <div>{'Дата ' + (lost ? 'находки:' : 'потери:')}</div>
                                <div>{data.date}</div>
                            </div>
                        </div>
                    </div>
                    <div className="pay__block">
                        <h4 className="pay__heading">Ваши данные:</h4>
                        <div className="pay-table">
                            <div className="pay-table__row">
                                <div>Телефон:</div>
                                <div>{data.phone}</div>
                            </div>
                            <div className="pay-table__row">
                                <div>E-mail:</div>
                                <div>{data.email}</div>
                            </div>
                            <div className="pay-table__row">
                                <div>
                                    <img src={messengers[data.messenger]} alt={data.messenger}/>
                                </div>
                                <div>{data.messengerPhone}</div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="pay__block">
                        <div className="pay-table">
                            <div className="pay-table__row">
                                <div>Способ оплаты:</div>
                                <div>онлайн через 
                                    <img 
                                        src={logo_liqpay}
                                        alt="" width="85" style={{marginLeft: "5px"}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <form onSubmit={handleSubmit}>
                        {/* <input type="hidden" name="data" value={data}/> */}
                        {/* <input type="hidden" name="signature" value={signature}/>  */}
                        <button 
                            type="submit" className="mybtn mybtn_blueinv pay__submit"
                        >{lost ? 'Подтвердить публикацию' : 'Активировать'}</button>
                    </form>

                </div>	
            </div>
        </div>
    )
}

export default PayPage
