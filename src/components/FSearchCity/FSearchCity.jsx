import React, {useState} from 'react'

//fake citiesData
import {dataList} from './fakeCitiesData'

const FSearchCity = ({handlerCity, title, error}) => {

    const citiesData = [...dataList]

    const [openSearch, setOpenSearch] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [select, setSelect] = useState('')
    const [listData, setListData] = useState(citiesData)

  

    const SelectSearch = (e) => {
        const input = e.target.textContent
        setSelect(input)
        handlerCity(input)
    } 
    const handleOpen = (e) => {
        if(e.target.tagName !== 'INPUT')  {
            setOpenSearch(openSearch => !openSearch)
            setSearchInput('')
        }
      
    }
    const handleSearch = (e) => {
         setSearchInput(e.target.value)
        const filteredList = citiesData.filter(city => city.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setListData(filteredList)
    }

    const key = () => Math.random() * Date.now()
    return (
        <div>
            <div className="fsearch__top">
                <div className="fsearch__heading">{title}</div>
            </div>
            <div className={"fsearch__select" + (openSearch ? ' fsearch__select_active' : '')} onClick={handleOpen}>
                <div className="fsearch__select-input">{select}</div>	
                <input 
                    type="text" className={"fsearch__select-search "  + (error && !select ? 'error' : '')}
                    value={searchInput} onChange={handleSearch}
                />
                <ul 
                    className="fsearch__select-list"
                    onClick={SelectSearch}
                >
                    {
                        listData.map(item => (
                            <li key={key()}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FSearchCity
