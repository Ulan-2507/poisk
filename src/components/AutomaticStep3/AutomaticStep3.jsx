import React, {useState} from 'react'
import FAgree from '../FAgree/FAgree'

const AutomaticStep3 = ({handleFormData, show}) => {
    const [status, setStatus] = useState('is-last')
    const [agree, setAgree] = useState(true)
    const [tariffText, setTariffText] = useState('')

   
    const payAmount = 10 //стоимость услуги
    const data = {
        tariffCost: +tariffText.split(' ')[2]
    }

    const handleSubmit = (e) => {
        handleFormData(data)
        setStatus('step-done')
        handleSubmit(e)
    }
    const handleTariff = (e) => {
        setTariffText(e.target.closest('label').textContent)
    }
    return (
        <div 
            className={"step step4  " + (show ? 'is-last' : '')} 
            style={{display: `${show ? 'block' : 'none'}`}}
        >
            <div className="step-result">
                <p>{status === 'step-done' ? tariffText : null}</p>
                <span className="edit" onClick={() => setStatus('')}>Редактировать</span>
            </div>
            
            <div className="step-in">
                <div className="wrap">
                    <h3 className="sn-form__title">Ищем за Вас</h3>
                    
                    <div className="pay-switch ap__pay-switch">
                        <p className="pay-switch__heading">Срок автоматического поиска:</p>
                        <ul className="pay-switch__radios" onClick={handleTariff}>
                            <li>
                                <label className="pay-switch__label">
                                    <input 
                                        type="radio" value="2" defaultChecked 
                                        data-val="true" 
                                        data-val-required="The AutomaticSearchType field is required." 
                                        id="AutomaticSearchType" name="AutomaticSearchType" 
                                    />
                                    <span></span>
                                    <span>1 неделя <b>10 сом</b></span>
                                </label>
                            </li>
                            <li>
                                <label className="pay-switch__label">
                                    <input type="radio" value="3" id="AutomaticSearchType" name="AutomaticSearchType"/>
                                    <span></span>
                                    <span>2 недели <b>15 сом</b></span>
                                </label>
                            </li>
                            <li>
                                <label className="pay-switch__label">
                                    <input type="radio" value="4" id="AutomaticSearchType" name="AutomaticSearchType"/>
                                    <span></span>
                                    <span>1 месяц <b>30 сом</b></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <p style={{textAlign: "left"}} className="pay-switch__heading">Стоимость автоматического поиска</p>
            <input 
                hidden defaultValue={payAmount} type="text" 
                data-val="true" data-val-number="The field PayAmount must be a number." 
                data-val-required="The PayAmount field is required." 
                id="PayAmount" name="PayAmount" readOnly
            />
            <p className="pay-switch__sum"><span>{`${Number(tariffText.split(' ')[2]) + payAmount}`}</span><span>сом</span></p>
        
            <FAgree handleArgee={setAgree} />
        
            <button 
                type="submit" 
                className="mybtn mybtn_blueinv sn-form__submit"
                onClick={handleSubmit}
                disabled={!agree}
            >Активировать</button>
        
            <p className="ap__hint">Без ID учитывается стоимость создания нового объявления в размере 10 сом.</p>
        </div>
    )
}

export default AutomaticStep3
