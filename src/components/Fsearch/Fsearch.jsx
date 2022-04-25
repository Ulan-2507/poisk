import React, {useState} from 'react'

import FSearchCity from '../FSearchCity'
import FDatePicker from '../FDatePicker/FDatePicker'

const Fsearch = ({handleSearch}) => {
    const [city, setCity] = useState('')
    const [date, setDate] = useState('')
  
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(city, date)
    }

    return (
        <form className="fsearch" onSubmit={handleSubmit}>
            <FSearchCity handlerCity={(city) => setCity(city)} title={'Место потери:'}/>
            <FDatePicker handleDate={(date) => setDate(date)} title={'Дата потери:'}/>
            <div>
                <div className="fsearch__top">
                    <div className="fsearch__heading"></div>
                </div>
                <button type="submit" className="fsearch__submit">Найти</button>
            </div>
        </form>
                
    )
}

export default Fsearch
