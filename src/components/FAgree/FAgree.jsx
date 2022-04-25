import React from 'react'
import { Link } from 'react-router-dom'

import './FAgree.style.css'

const FAgree = ({handleArgee}) => {
    return (
        <label className="sn-form__agree">
            <input type="checkbox" name="fcheck1" required defaultChecked onChange={(e) => handleArgee(e.target.checked)}/>
            <span></span>
            <span>Я принимаю условия <Link to="/privacy">Политики конфиденциальности </Link> и <Link to="/offer">Публичного договора</Link></span>
        </label>
    )
}

export default FAgree
