import React, {useState} from 'react'

import Messanger from '../Messanger'
import whatsapp from '../../assets/img/sn/whatsapp.svg'
import FAgree from '../FAgree'

const FStep4 = ({lost, handleFormData, show, tariffCost, payAmount}) => {
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const [messengerPhone, setMessengerPhone] = useState('')
    const [messenger, setMessenger] = useState({
        img: whatsapp,
        alt: 'whatsapp'
    })
    const [openList, setOpenList] = useState(false)
    
    const [agree, setAgree] = useState(true)
    const [error, setError] = useState(false)



    const data = {
        phone,
        email,
        messenger: messenger.alt,
        messengerPhone
    }
    
    const handleSubmit = () => {
        if(!phone || !email) {
            return setError(true)
        }
        handleFormData(data)
    }

    return (
        <div 
            className={"step step4  " + (show ? 'is-last' : '') + (error ? ' has-error' : '')} 
            style={{display: `${show ? 'block' : 'none'}`}}>
            <div className="step-in">
                <div className="wrap">
                    <h3 className="sn-form__title">Контактные данные</h3>
                    <div className="notification-error">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#E13535"></path>
                        </svg>
                        Заполните поля почты и номера телефона 
                    </div>
                    <div className="sn-form__row">
                        <p className="sn-form__heading">Введите данные для связи с вами:</p>
                        <input 
                            className={error && !phone ? 'error' : ''}
                            required type="tel" placeholder="Ваш телефон" 
                            id="Phone" name="Phone" value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input 
                            className={error && !email ? 'error' : ''}
                            required type="email" placeholder="E-mail" 
                            id="Email" name="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <Messanger 
                        open={openList} handleOpen={setOpenList} 
                        messenger={messenger} handleMessanger={setMessenger}
                        messengerPhone={messengerPhone} handleMessengerPhone={setMessengerPhone}
                    />
                </div>
            </div>
                
            <div className="pay-switch ap__pay-switch">
                <p className="pay-switch__heading">{"Стоимость публикации о " + (lost ? "потере:" : "находке:")}</p>
                {lost ?
                    <input 
                        hidden defaultValue={payAmount} type="text" data-val="true" 
                        data-val-number="The field PayAmount must be a number." 
                        data-val-required="The PayAmount field is required." 
                        id="PayAmount" name="PayAmount" readOnly
                    />
                    : null
                }
                <p className="pay-switch__sum">
                    <span>{lost ? `${tariffCost + payAmount}` : 'БЕСПЛАТНО'}</span>
                    <span>{lost ? 'сом' : ''}</span>
                </p>
            </div>

            <FAgree handleArgee={setAgree}/> 

            <button 
                type="submit" className="mybtn mybtn_blueinv sn-form__submit"
                onClick={handleSubmit}
                disabled={!agree}
            >Опубликовать</button>

            <p className="ap__hint">
                {lost? 
                    <>Публикация объявления на доске потерь сроком <br/>до 3 месяцев</>
                    : 
                    'Публикация объявления на доске потерь до удаления публикации владельцем'
                }
            </p>

        </div>
    )
}

export default FStep4
