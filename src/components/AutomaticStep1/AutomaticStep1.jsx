import React, {useState} from 'react'

import FSearchCategory from '../FSearchCategory'
import FSearchCity from '../FSearchCity'
import FDatePicker from '../FDatePicker/FDatePicker'

const AutomaticStep1 = ({handleFormData,next}) => {
    const [done, setDone] = useState(false)
    const [headline, setHeadline] = useState('')
    const [category, setCategory] = useState('')
    const [city, setCity] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(false)

    const data = {
        headline,
        category,
        location: city,
        date
    }
    const handleNext = () => {
        if(!headline || !category || !city || !date) {
            return setError(true)
        }
        handleFormData(data)
        setDone(true)
        next()
    }
    return (
        <div style={{display: 'block'}} className={"step step1 " + (done ? 'step-done' : '')}>
            <div className="step-result">
                <div className="title">Данные о потере</div>
                <p>{done ? `${headline} ${category}, ${city}, ${date}` : null}</p>
                <span className="edit" onClick={() => setDone(false)}>Редактировать</span>
            </div>
            
            <div className="step-in">
                <h3 className="sn-form__title">Данные о потере</h3>
                <div className="fsearch">
                    <div>
                        <div className="sn-form__row">
                            <p className="sn-form__heading">Что вы потеряли:</p>
                                <input 
                                    className={error && !headline ? 'error' : ''}
                                    required 
                                    type="text" 
                                    placeholder="Введите заголовок" 
                                    id="Title" name="Title" 
                                    value={headline}
                                    onChange={(e) => setHeadline(e.target.value)}
                                />
                        </div>
                    </div>
                    
                    <div>
                        <FSearchCategory title={'Искать в категории:'} handleCtegory={(category) => setCategory(category)} error={error}/>
                    </div>

                    <div>
                        <FSearchCity title={'Место потери:'} handlerCity={(city) => setCity(city)} error={error}/>
                    </div>
                    
                    <div>
                        <FDatePicker title={'Дата потери:'} handleDate={(date) => setDate(date)} error={error}/>
                    </div>
                </div>
                
                <div className="next-step js-next" onClick={handleNext}>Далее</div>
                
                <div className="count-step">Шаг 1 из 3</div>
            </div>
        </div>
    )
}

export default AutomaticStep1
