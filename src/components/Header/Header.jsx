import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

import logo_black from '../../assets/img/logo-black.svg'

import './Header.style.css'


const Header = () => {
	const [open, setOpen] = useState(false)
    return (
        <header className={"header_transparent " + (open ? 'active' : '')}>
		<div className="container2">
			<Link to="/" className="logo">
				<img src={logo_black} alt="poisk logo"/>
			</Link>
			<div 
				className={"burger-btn " + (open ? 'active' : '')}
				onClick={() => setOpen(open => !open)}
			>
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<path className="line--1 line--debug" d="M0 40h62c13 0 6 28-4 18L35 35"></path><path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35"></path>
					<path className="line--2 line--debug" d="M0 50h50"></path><path className="line--2" d="M0 50h50"></path>
					<path className="line--3 line--debug" d="M0 60h62c13 0 6-28-4-18L35 65"></path><path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65"></path>
				</svg>
			</div>
			<nav className="header-menu">
				<ul onClick={() => setOpen(open => !open)}>
					<li><NavLink className="" to="/found/create">Я НАШЁЛ</NavLink></li>
					<li><NavLink className="" to="/lost/create">Я ПОТЕРЯЛ</NavLink></li>
					<li className="has-submenu">
							<Link to='/#'>ОБЪЯВЛЕНИЯ</Link>
						<ul>
							<li><Link to="/found">ДОСКА НАХОДОК</Link></li>
							<li><Link to="/lost">ДОСКА ПРОПАЖ</Link></li>
						</ul>
					</li>
					<li><NavLink className="" to="/automatic">ИЩЕМ ЗА ВАС</NavLink></li>
				</ul>
			</nav>

			<div className="btn-wrap">
	                <NavLink className="header-org" to="/organization">Для организаций</NavLink>
			</div>

			<ul className="mobile-nav">
	                <li><NavLink to="/organization">Для организаций</NavLink></li>
			</ul>
		</div>
	</header>
    )
}

export default Header
