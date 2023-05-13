import React from 'react'
import Card from '../card/card'
import s from './main-content.module.css'
import Details from '../tab-section/details'
import sApp from '../App.module.css'

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
		price: "150",
	},
	{
		label: "Мягкая игрушка для кота",
		price: "150",
	},
	{
		label: "Лоток для кота",
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
		<section className={ s['video-section'] }>
			<h2 className={ sApp['header-section'] }>Видео о товарах для котов</h2>
			<iframe width="100%" height="663" src="https://www.youtube-nocookie.com/embed/c6x-jIuEX6k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		</section>
		<Details />
	</main>
  )
}
