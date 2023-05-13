import React, { useId } from 'react'
import sApp from '../App.module.css'
import s from './video.module.css'

export default function Video() {
	const id = useId();
	return (
		<section aria-labelledby={ id } className={s['video-section']}>
			<h2 id={ id } className={sApp['header-section']}>Видео о товарах для котов</h2>
			<iframe width="100%" height="663" src="https://www.youtube-nocookie.com/embed/c6x-jIuEX6k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		</section>
	)
}
