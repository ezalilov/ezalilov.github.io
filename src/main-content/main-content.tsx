import React from 'react'
import Card from '../card/card'
import s from './main-content.module.css'
import Details from '../tab-section/details'
import Video from '../video-section/video-section'

const catContent = [
	{
		label: "Коврик для кота",
		price: "200",
		sale: "100",
	},
	{
		label: "Игрушка для кота",
		price: "150",
		sale: "100",
	},
	{
		label: "Мячик для кота",
		price: "100",
	},
	{
		label: "Мягкая игрушка для кота",
		price: "130",
	},
	{
		label: "Лоток для кота",
		price: "110",
	},
]

export default function MainContent() {
  return (
	<>
	<main id="main-content">
		<h1 className={ s['main-header'] }>Товары для котиков</h1>
		<div className={ s.cards }>
			{catContent.map((props) => <Card {...props} />)}
		</div>
	</main>
	<Video />
	<Details />
	</>
  )
}
