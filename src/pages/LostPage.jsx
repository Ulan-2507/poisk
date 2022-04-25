import React, {useState, useEffect, Suspense, lazy} from 'react'
import { Link } from 'react-router-dom'

import PageTop from '../components/PageTop/PageTop'
import BcrumbsBox from '../components/BcrumbsBox/BcrumbsBox'

import _2348128 from '../assets/img/dp/2348128.png'
import top_bg_2 from '../assets/img/dp/top-bg-2.png'
import Shape from '../assets/img/np/Shape.svg'

const FindsNav = lazy(() => import('../components/FindsNav'))
const FindsMb = lazy(() => import('../components/FindsMb/FindsMb'))
const Fsearch = lazy(() => import('../components/Fsearch/Fsearch'))
const BottomText = lazy(() => import('../components/BottomText'))
const DpBuuttons = lazy(() => import('../components/DpBuuttons'))
const Pagination = lazy(() => import('../components/Pagination'))

const LostPage = () => {
    const items = []
    const pageCount = 10
    const [searchParams, setSearchParams] = useState({
        category: 'all',
        location: 'all',
        date: ''
    })

    const handlePageClick = ({selected}) => {
        console.log(selected+1);
    }

    const handleSearch = (city, date) => {
        setSearchParams(searchParams => {
            return {...searchParams, location: city, date}
        })
    }
    useEffect(() => {
        console.log(searchParams) // запрос на сервер
        
    }, [searchParams])

    return (
        <>
            <PageTop 
                title='Доска пропаж'
                subtitle='Порядочность вознаграждается'
                bigImg={_2348128}
                smallImg={top_bg_2}
            /> 
            <BcrumbsBox navigate={[{path:'/lost', linkname:'Доска пропаж'}]}/>

            <div className="dp">
                <div className="container">
                    <div className="finds-box">
                        <Suspense fallback={null}>
                            <FindsNav />
                            <FindsMb />
                            <Fsearch handleSearch={handleSearch}/>
                        </Suspense>
                    </div>

                    {  items.length !== 0 ?
                        <>
                            <h3 className="np__title">Актуальные пропажи по Вашим критериям 
                                <span className="fsearch-info fsearch-info_dark">
                                    <span>Выберите категорию, город и дату потери</span>
                                </span>
                            </h3>

                            <div className="dp-items">
                                <p className="dp-items__heading">Вознаграждение:</p>
                                <ul className="dp-items__list">
                                    {
                                        items.map(item => (
                                            <DpItem key={item.id} item={item} />
                                        ))
                                    }
                                </ul>
                            </div>
                            <Suspense fallback={null}>
                                <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
                            </Suspense>
                        </> 
                        :
                        <h3 className="np__title">По данному запросу ничего не найдено <img src={Shape} alt="info"/></h3>  
                    }

                    <Suspense fallback={null}>
                        <BottomText />
                        <DpBuuttons />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

function DpItem({item}) {

    return (
        <li>
            <div className="dp-item">
                <div className="dp-item__img">
                    <div className="dp-item__img-bg" style={{backgroundImage: `url(${item.img})`}}></div>
                </div>
                <div className="dp-item__date">{item.date}</div>

                <div className="dp-item__main">
                    <div>
                        <h4 className="dp-item__title">{item.title}</h4>
                        <p className="dp-item__text">{item.text}</p>
                        <span className="dp-item__loc">{item.city}</span>
                    </div>
                    <div>
                        <p className="dp-item__text">{item.text}</p>
                    </div>
                </div>
                <Link className="dp-item__link" to={`/lost/details/${item.id}`}></Link>
            </div>
        </li>
    )
}
export default LostPage
