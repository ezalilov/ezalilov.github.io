import React from 'react'
import Nav from './nav'
import heart from '../svg/heart.svg'
import cart from '../svg/cart.svg'
import s from './header.module.css'

export default function Header() {
  return (
	<header className={ s.header }>
		<Nav />
		<div className={ s.buttonsBlock }>
			<button className={ s.button } type='button'>
				<img src={ heart } alt='Открыть Вишлист' title="Вишлист" />
			</button>
			<button className={ s.button } type='button'>
				<img src={ cart } alt='Открыть Корзину' title="Корзина" />
			</button>
		</div>

	</header>
  )
}
