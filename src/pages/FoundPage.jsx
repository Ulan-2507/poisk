import React, {useState, useEffect, Suspense, lazy} from 'react'
import { Link } from 'react-router-dom'

import PageTop from '../components/PageTop/PageTop'
import BcrumbsBox from '../components/BcrumbsBox/BcrumbsBox'

import _2348128 from '../assets/img/np/2348128.png'
import _2348128_2 from '../assets/img/np/2348128-2.png'
import Shape from '../assets/img/np/Shape.svg'


const FindsNav = lazy(() => import('../components/FindsNav'))
const FindsMb = lazy(() => import('../components/FindsMb/FindsMb'))
const Fsearch = lazy(() => import('../components/Fsearch/Fsearch'))
const BottomText = lazy(() => import('../components/BottomText'))
const DpBuuttons = lazy(() => import('../components/DpBuuttons'))
const Pagination = lazy(() => import('../components/Pagination'))


const FoundPage = () => {
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
                title='Доска находок'
                subtitle={<>Найди свою потерю! <br/>
                Самая большая сеть утраченных вещей</>}
                bigImg={_2348128}
                smallImg={_2348128_2}
            />  
            <BcrumbsBox navigate={[{path:'/found', linkname:'Доска находок'}]}/>
            <div className="np">
                <div className="container">
                    <div className="finds-box">
                        <Suspense fallback={null}>
                            <FindsNav />
                            <FindsMb />
                            <Fsearch handleSearch={handleSearch}/>
                        </Suspense>
                    </div>

                    {items.length !== 0 ?
                        <>
                            <h3 className="np__title">
                                Актуальные находки по Вашим критериям 
                                <span className="fsearch-info fsearch-info_dark">
                                    <span>Выберите категорию, город и дату потери</span>
                                </span>
                            </h3>
                            <ul className="np-items">
                                {
                                    items.map(item => (
                                        <ListItem key={item.id} item={item} />
                                    ))
                                }
                            </ul>
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

function ListItem({item}) {
    return (
        <li>
            <div className="np-item">
                <div className="np-item__img">
                    <div className="np-item__img-h"></div>
                    <div 
                        className="np-item__img-bg" 
                        style={{backgroundImage: `url(${item.img})`}}
                    ></div>
                    <div className="np-item__date">{item.date}</div>
                    <div className="np-item__loc">{item.city}</div>
                </div>
                <div className="np-item__text">{item.text}</div>
                <Link className="np-item__link" to={`/found/details/${item.id}`}></Link>
            </div>
        </li>
    )
}
export default FoundPage
