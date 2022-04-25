import React from 'react'
import { Link, useParams } from 'react-router-dom'

import BcrumbsBox from '../components/BcrumbsBox'
import email from '../assets/img/email.svg'

const CreatePage = () => {
    const {id} = useParams()

    return (
        <>
            <BcrumbsBox navigate={[
                {path:'/found', linkname:'Доска находок'},
                {linkname:'ds'},
            ]}/> 
            <div className="spage po">
                <div className="container">
                    <div className="img-c po__img">
                            <img src={email} alt="email"/>
                        </div>
                    <h3 className="stitle po__title">Ваше объявление <br/>
            проверяется модератором!</h3>
                    <p className="pub-num po__pub-num">Публикация ID <span>{id}</span></p>
                    <p className="po__text-1">Спасибо за сотрудничество</p>
                    <p className="text-link po__text-2"><Link to={`/found/details/${id}`}>ds</Link></p>
                </div>
            </div>
        </>
    )
}

export default CreatePage
