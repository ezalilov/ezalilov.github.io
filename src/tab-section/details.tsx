import React, { useId } from 'react'
import { Tabs } from './tabs';
import s from './details.module.css'
import sApp from '../App.module.css'

const tabsConfig = [
	{
	  label: "О котах",
	  content: "Кошки - загадочные животные, которые многие века живут рядом с человеком. Кажется, что мы знаем о них все, однако нам до сих пор есть чему удивляться. Всего существует 33 основных кошачьих породы. А количество домашних кошек в мире достигает 500 миллионов. Частота пульса у кошки гораздо выше, чем у человека и составляет от 110 до 140 ударов сердца в минуту. В среднем кошки весят около пяти килограммов, а вот кошки Сингапурской породы – всего два с небольшим килограмма.",
	},
	{
	  label: "О товарах",
	  content: "Товары для котов супер классные! Всем по товару для котов!",
	}
  ];
  

export default function Details() {
	const id = useId()
  return (
	<section aria-labelledby={ id } className={ s.details }>
		<h2 id={ id } className={ sApp['header-section'] }>Подробнее о товарах для котов</h2>
		<Tabs tabsConfig={tabsConfig} />
	</section>
  )
}
