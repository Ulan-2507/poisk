import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import FDatePicker from '../FDatePicker/FDatePicker'
import FSearchCategory from '../FSearchCategory'
import FSearchCity from '../FSearchCity'

const FStep1 = ({lost, handleFormData,next}) => {
    const [done, setDone] = useState(false)
    const [headline, setHeadline] = useState('')
    const [file, setFile] = useState(null)
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('')
    const [city, setCity] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(false)

    const selectFile = ({ target: { files: [file] } }) => {
        setFile(file)
    }
    const data = {
        headline,
        file,
        desc,
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
                <div className="title">{'Данные о ' + (lost ? 'пропаже' : 'находке')}</div>
                <p>{done ? `${headline} ${category}, ${city}, ${date}` : null}</p>
                <span className="edit" onClick={() => setDone(false)}>Редактировать</span>
            </div>
            <div className="step-in">
                <h3 className="sn-form__title">{'Данные о ' + (lost ? 'пропаже' : 'находке')}</h3>

                <div className="sn-form__row">
                    <p className="sn-form__heading">{lost ? 'ЧТО ВЫ ПОТЕРЯЛИ:' : 'ЧТО ВЫ НАШЛИ:'}</p>
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

                <div className="imageupload">
                    <img className="imageupload__img" id="uploadPreview" alt=''/>
                    <div className="imageupload__input-box" data-text="Загрузить фото">
                    <input className="imageupload__input" type="file" id="uploadImage" name="file" onChange={selectFile}/>
                    </div>
                    <Link className="imageupload__close" to="#"></Link>
                    <span className="imageupload__text" style={{color: "#4a90e2"}}>если имеется</span>
                </div>

                <div className="sn-form__row">
                    <p className="sn-form__heading">{'ОПИСАНИЕ ' + (lost ? 'ПРОПАЖИ:' : 'НАХОДКИ:')}</p>
                    <textarea 
                        placeholder={"Опишите обстоятелства " + (lost ? "пропажи" : "находки") }
                        id="Description" name="Description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className="fsearch">
                    <FSearchCategory title={'Разместить в категории:'} error={error} handleCtegory={(category) => setCategory(category)}/>
                </div>
                
                <div className="fsearch">
                    <FSearchCity error={error} handlerCity={(city) => setCity(city)} title={'Место ' + (lost? 'пропажи:' : 'находки')}/>
                    <FDatePicker error={error} handleDate={(date) => setDate(date)} title={'Дата '+ (lost? 'пропажи:' : 'находки')} />
                </div>

                <div className="next-step js-next" onClick={handleNext}>Далее</div>
                <div className="count-step">{'Шаг 1 из ' + (lost ? '4' : '3')}</div>
            </div>
        </div>
    )
}

export default FStep1
