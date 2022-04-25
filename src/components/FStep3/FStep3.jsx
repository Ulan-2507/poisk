import React, {useState} from 'react'

const FStep3 = ({handleFormData, show, next}) => {
    const [status, setStatus] = useState('is-last')
    const [tariffText, setTariffText] = useState('')
    const handleTariff = (e) => {
        setTariffText(e.target.closest('label').textContent)
    }

    const data = {
        tariffCost: +tariffText.split(' ')[2] 
    }

    const handleNext = () => {
        handleFormData(data)
        next()
        setStatus('step-done')
    }

    return (
        <div 
            className={"step step3  " + (show ? status : '')} 
            style={{display: `${show ? 'block' : 'none'}`}}>
            <div className="step-result">
                <div className="title">Ищем за Вас</div>
                <p>{status === 'step-done' ? tariffText : null}</p>
                <span className="edit" onClick={() => setStatus('')}>Редактировать</span>
            </div>
            <div className="step-in">
                <h3 className="sn-form__title">Ищем за Вас</h3>
                <p>Хотите найти пропажу еще быстрее?</p>
                <p>Подключите функцию автоматического поиска - система будет сравнивать все актуальные объявления о находках с описанием Вашей пропажи. Раз в день Вам будет приходить на почту список всех совпадений.</p>
                <div className="pay-switch ap__pay-switch">
                    <p className="pay-switch__heading">Срок автоматического поиска:</p>
                    <ul className="pay-switch__radios" onClick={handleTariff}>
                        <li>
                            <label className="pay-switch__label">
                                <input 
                                    type="radio" value="1" defaultChecked
                                    data-val="true" data-val-required="The AutomaticSearchType field is required." 
                                    id="AutomaticSearchType" name="AutomaticSearchType"
                                />
                                <span></span>
                                <span>1 день <b>бесплатно</b></span>
                            </label>
                        </li>
                        <li>
                            <label className="pay-switch__label">
                                <input 
                                    type="radio" value="2" 
                                    id="AutomaticSearchType" name="AutomaticSearchType"
                                />
                                <span></span>
                                <span>1 неделя <b>10 сом</b></span>
                            </label>
                        </li>
                        <li>
                            <label className="pay-switch__label">
                                <input 
                                    type="radio" value="3"  
                                    id="AutomaticSearchType" name="AutomaticSearchType"
                                />
                                <span></span>
                                <span>2 неделя <b>15 сом</b></span>
                            </label>
                        </li>
                        <li>
                            <label className="pay-switch__label">
                                <input 
                                    type="radio" value="4"  
                                    id="AutomaticSearchType" name="AutomaticSearchType"
                                />
                                <span></span>
                                <span>1 месяц <b>30 сом</b></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="next-step js-next" onClick={handleNext}>Далее</div>
                <div className="count-step">Шаг 3 из 4</div>
            </div>
            </div>
    )
}

export default FStep3
