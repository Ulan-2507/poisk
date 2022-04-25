import React from 'react'
import { Link } from 'react-router-dom'

import './BcrumbsBox.style.css'

const BcrumbsBox = ({navigate=[]}) => {
    return (
        <div className="bcrumbs-box">
            <div className="container">
                <ul className="bcrumbs">
                    <li><Link to="/">Главная</Link></li>
                    {navigate.map(nav => {
                        if(!nav.path) {
                            return <li key={nav.linkname}>{nav.linkname}</li>
                        }
                        return (
                            <li key={nav.linkname}>
                                <Link as-action="Index" to={nav.path}>{nav.linkname}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BcrumbsBox
