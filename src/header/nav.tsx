import React from 'react'
import s from './nav.module.css'

const navList = [
	{
		label: "Товары для кошек",
	},
	{
		label: "Товары для собак",
	},
	{
		label: "Товары для лошадей",
	},
	{
		label: "Товары для черепах",
	},
	{
		label: "Товары для рыб",
	},
]

export default function Nav() {
  return (
	<nav className={ s.nav }>
		<ul className={ s['nav-list']}>
			{navList.map(({ label }) => <li className={ s['list-item'] }><a className={ s.link } href="#">{ label }</a></li>)}
		</ul>
	</nav>
  )
}
