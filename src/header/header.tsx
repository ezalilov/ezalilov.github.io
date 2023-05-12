import React from 'react'
import Nav from './nav'
import cart from '../assets/svg/cart.svg'
import s from './header.module.css'
import WishlistButton from '../components/wishlist/wishlist'

export default function Header() {
  return (
	<header className={ s.header }>
		<Nav />
		<div className={ s.buttonsBlock }>
		<WishlistButton alt='Открыть список желаний' />
		<button className={ s.button } type='button'>
				<img src={ cart } alt='Открыть Корзину' title="Корзина" />
			</button>
		</div>

	</header>
  )
}
