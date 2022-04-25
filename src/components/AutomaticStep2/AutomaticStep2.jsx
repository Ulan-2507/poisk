import React, {useState} from 'react'

import Messanger from '../Messanger'
import whatsapp from '../../assets/img/sn/whatsapp.svg'


const AutomaticStep2 = ({handleFormData, show, next}) => {
    const [status, setStatus] = useState('is-last')
    const [messengerPhone, setMessengerPhone] = useState('')
    const [messenger, setMessenger] = useState({
        img: whatsapp,
        alt: 'whatsapp'
    })
    const [openList, setOpenList] = useState(false)
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const data = {
        email,
        messenger: messenger.alt,
        messengerPhone
    }

    const handleNext = () => {
        if(!email) {
            return setError(true)
        }
        handleFormData(data)
        next()
        setStatus('step-done')
    }
    return (
        <div 
            className={"step step1  " + (show ? status : '') + (error ? ' has-error' : '')} 
            style={{display: `${show ? 'block' : 'none'}`}}
        >
            <div className="step-result">
                <div className="title">Контактные данные</div>
                <p>{status === 'step-done' ? `${email}, ${messengerPhone}` : null}</p>
                <span className="edit">Редактировать</span>
            </div>
            
            <div className="step-in">
                <h3 className="sn-form__title">Контактные данные</h3>
                
                <div className="sn-form__row">
                    <p className="sn-form__heading">Введите данные для связи с вами:</p>
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
                <div className="next-step js-next" onClick={handleNext}>Далее</div>
                <div className="count-step">Шаг 2 из 3</div>
            </div>
        </div>
    )
}

export default AutomaticStep2
