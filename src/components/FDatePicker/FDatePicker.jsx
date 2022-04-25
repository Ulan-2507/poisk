import React, {useState, forwardRef} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const FDatePicker = ({handleDate, title, info, error}) => {
    const [date, setDate] = useState();

    const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
        <input 
            type="text"  
            className={"fsearch__select-input " + (error && !date  ? 'error' : '')}
            name="atdate"
            value={value}
            onChange={onChange}
            onClick={onClick} ref={ref}
        />
    ));

    const onChange = (date) => {
        setDate(date)
        handleDate(date)
    }
    return (
        <div>
            <div className="fsearch__top">
                <div className="fsearch__heading">{title}
                    <span className="fsearch-info" style={{display: `${info ? 'inline-block' : 'none'}`}}>
                        <span>
                            Система учитывает весь период времени от даты потери до сегодняшнего дня
                        </span>
                    </span>
                </div>
            </div>
            <DatePicker 
                className="fsearch__select fsearch__select_date" 
                selected={date} 
                onChange={onChange}
                customInput={<CustomInput />}
            />
        </div>
       
    )
}

export default FDatePicker
