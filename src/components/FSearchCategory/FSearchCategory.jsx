import React, {useState} from 'react'


import icon1 from '../../assets/img/category/icon1.svg'
import icon9 from '../../assets/img/category/icon9.svg'
import icon9_1 from '../../assets/img/category/icon9-1.svg'
import icon2 from '../../assets/img/category/icon2.svg'
import icon2_1 from '../../assets/img/category/icon2-1.svg'
import icon3 from '../../assets/img/category/icon3.svg'
import icon3_1 from '../../assets/img/category/icon3-1.svg'
import icon4 from '../../assets/img/category/icon4.svg'
import icon4_1 from '../../assets/img/category/icon4-1.svg'
import icon7 from '../../assets/img/category/icon7.svg'
import icon7_1 from '../../assets/img/category/icon7-1.svg'
import icon8 from '../../assets/img/category/icon8.svg'
import icon8_1 from '../../assets/img/category/icon8-1.svg'
import icon5 from '../../assets/img/category/icon5.svg'
import icon5_1 from '../../assets/img/category/icon5-1.svg'
import icon10 from '../../assets/img/category/icon10.svg'
import icon10_1 from '../../assets/img/category/icon10-1.svg'

const FSearchCategory = ({title, handleCtegory, error}) => {
    const [select, setSelect] = useState('')
    const [open, setOpen] = useState(false)
    const handleSelect = (e) => {
        const category = e.target.textContent
        setSelect(category)
        handleCtegory(category)
    }
    return (
        <div>
            <div className="fsearch__top">
                <div className="fsearch__heading">{title}</div>
            </div>
            <div 
                className={"fsearch__select fsearch__select--new " + (open ? 'fsearch__select_active' : '')}
                onClick={() => setOpen(open => !open)}
                >
                <label>
                    <input 
                        required readOnly 
                        className={"fsearch__select-input " + (error && !select ? 'error' : '')}
                        type="text" id="Category" 
                        name="Category" defaultValue={select}   
                    /> 
                    <span className="icon">
                        <img src={icon1} alt="Category"/>
                    </span>
                </label>

                <ul className="fsearch__select-list fsearch__select-list--icon" onClick={handleSelect}>
                    <ListItem 
                        category={'Документы'}
                        img={icon9}
                        mbImg={icon9_1}
                    />
                    <ListItem 
                        category={'Ключи'}
                        img={icon2}
                        mbImg={icon2_1}
                    />
                    <ListItem 
                        category={'Техника'}
                        img={icon3}
                        mbImg={icon3_1}
                    />
                    <ListItem 
                        category={'Кошельки'}
                        img={icon4}
                        mbImg={icon4_1}
                    />
                    <ListItem 
                        category={'Животные'}
                        img={icon7}
                        mbImg={icon7_1}
                    />
                    <ListItem 
                        category={'Украшения'}
                        img={icon8}
                        mbImg={icon8_1}
                    />
                    <ListItem 
                        category={'Сумки'}
                        img={icon5}
                        mbImg={icon5_1}
                    />
                    <ListItem 
                        category={'Другое'}
                        img={icon10}
                        mbImg={icon10_1}
                    />
                </ul>
            </div>
        </div>
    )
}

function ListItem({category, img, mbImg}) {
    return (
        <li>
            <span>
                <i>
                    <img src={img} alt={category}/>
                    <img src={mbImg} alt={category}/>
                </i>
            </span>{category}
        </li>
    )
}
export default FSearchCategory
