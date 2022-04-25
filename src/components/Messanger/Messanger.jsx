import React from 'react'

import whatsapp from '../../assets/img/sn/whatsapp.svg'
import viber from '../../assets/img/sn/viber.svg'
import telegram from '../../assets/img/sn/telegram.svg'
import skype from '../../assets/img/sn/skype.svg'

import './Messanger.styel.css'


const Messanger = ({open, handleOpen, messenger, handleMessanger, messengerPhone, handleMessengerPhone}) => {

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

    const handleClick = (e) => {
        e.stopPropagation()
        const key = e.target.value
        handleMessanger(messenger => ({...messenger, ...messengers[key]}))
        handleOpen(false)
    }

    return (
        <div className="sn-messenger">
            <div>
                <div 
                    className={"sn-messenger__select " + (open ? 'sn-messenger__select_active' : '')} 
                    onClick={() => handleOpen(open => !open)}
                >
                    <div className="sn-messenger__select-button">
                        <img src={messenger.img} alt={messenger.alt}/>
                    </div>
                    
                    <ul className="sn-messenger__select-list" onClick={handleClick}>
                        <li>
                            <label>
                                <img src={viber} alt="viber"/>
                                <input type="radio" name="Messenger" value="viber"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <img src={telegram} alt="telegram"/>
                                <input type="radio" name="Messenger" value="telegram"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <img src={skype} alt="skype"/>
                                <input type="radio" name="Messenger" value="skype"/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <img src={whatsapp} alt="whatsapp"/>
                                <input type="radio"  name="Messenger" value="whatsapp"/>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <input 
                    type="text" placeholder="Номер" id="MessengerPhone" 
                    name="MessengerPhone" value={messengerPhone}
                    onChange={(e) => handleMessengerPhone(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Messanger
