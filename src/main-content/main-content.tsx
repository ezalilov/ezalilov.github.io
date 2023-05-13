import React from 'react'
import Card from '../card/card'
import s from './main-content.module.css'
import Modal from '../modal/modal'
import Details from '../tab-section/details'

const catContent = [
	{
		label: "Коврик для кота",
		price: "200",
		sale: "100",
	},
	{
		label: "Коврик для кота",
		price: "150",
	},
]

export default function MainContent() {
  return (
	<main id="main-content">
		<h1 className={ s['main-header'] }>Товары для котиков</h1>
		<div className={ s.cards }>
			{catContent.map((props) => <Card {...props} />)}
		</div>
		<Details />
	</main>
  )
}
