import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = ({error}) => {
    return (
        <div className="nf">
            <div className="container">
                <p className="nf__text">Оо! Что-то пошло не так <br/>Попробуйте еще раз</p>
                <Link className="nf__tomain" to="/">На главную</Link>
                <pre>{error.message}</pre>
            </div>
        </div>
    )
}

export default ErrorPage
