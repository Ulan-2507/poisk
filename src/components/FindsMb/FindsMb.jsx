import React, {useState} from 'react'

import findnav0_2 from '../../assets/img/main/findnav0_2.svg'
import findnav9_2 from '../../assets/img/main/findnav9_2.svg'
import findnav2_2 from '../../assets/img/main/findnav2_2.svg'
import findnav3_2 from '../../assets/img/main/findnav3_2.svg'
import findnav4_2 from '../../assets/img/main/findnav4_2.svg'
import findnav7_2 from '../../assets/img/main/findnav7_2.svg'
import findnav8_2 from '../../assets/img/main/findnav8_2.svg'
import findnav5_2 from '../../assets/img/main/findnav5_2.svg'
import findnav10_2 from '../../assets/img/main/findnav10_2.svg'
import findnav0 from '../../assets/img/main/findnav0.svg'
import findnav9 from '../../assets/img/main/findnav9.svg'
import findnav2 from '../../assets/img/main/findnav2.svg'
import findnav3 from '../../assets/img/main/findnav3.svg'
import findnav4 from '../../assets/img/main/findnav4.svg'
import findnav7 from '../../assets/img/main/findnav7.svg'
import findnav8 from '../../assets/img/main/findnav8.svg'
import findnav5 from '../../assets/img/main/findnav5.svg'
import findnav10 from '../../assets/img/main/findnav10.svg'

import './FindsMb.style.css'


const FindsMb = ({onSelect}) => {
    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState({
        rel: 'all',
        title: 'Все категории',
        src_2: findnav0_2,
    })

   
    const categories = [
        {
            rel: 'all',
            title: 'Все категории',
            src: findnav0,
            src_2: findnav0_2
        },
        {
            rel: 'documents',
            title: 'Документы',
            src: findnav9,
            src_2: findnav9_2
        },
        {
            rel: 'keys',
            title: 'Ключи',
            src: findnav2,
            src_2: findnav2_2
        },
        {
            rel: 'hi-tech',
            title: 'Техника',
            src: findnav3,
            src_2: findnav3_2
        },
        {
            rel: 'wallets',
            title: 'Кошельки',
            src: findnav4,
            src_2: findnav4_2
        },
        {
            rel: 'animals',
            title: 'Животные',
            src: findnav7,
            src_2: findnav7_2
        },
        {
            rel: 'jewelry',
            title: 'Украшения',
            src: findnav8,
            src_2: findnav8_2
        },
        {
            rel: 'bags',
            title: 'Сумки',
            src: findnav5,
            src_2: findnav5_2
        },
        {
            rel: 'other',
            title: 'Другое',
            src: findnav10,
            src_2: findnav10_2
        }
    ]

    const handleSelect = (e) => {
        const rel = e.target.getAttribute('rel')
        const current = categories.find(category => category.rel === rel)
        setSelect(current)
        setOpen(false)
        onSelect(rel)
    }
    return (
        <div className="findsmb">
            <div className={"findsmb-categories" + (open ? ' findsmb-categories_active' : '')}>
                <div className='findsmb-categories__select' onClick={() => setOpen(true)}>
                    <span>
                        <img src={select.src_2} alt={select.rel} />
                    </span>
                    <span>{select.title}</span>
                </div>
                <ul className="findsmb-categories__list" onClick={handleSelect}>
                    {categories.map(category => (
                        <ListItem 
                            key={category.rel}
                            title={category.title}
                            rel={category.rel} 
                            src={category.src}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FindsMb

function ListItem({title, rel, src}) {
    return (
        <li rel={rel}>
            <span>
                <img src={src} alt={rel} />
            </span> {title}
        </li>
    )
}
