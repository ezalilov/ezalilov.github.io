import React, { useId } from 'react'
import cat from '../assets/cat.png'
import s from './card.module.css'
import WishlistButton from '../components/wishlist/wishlist';
import classNames from 'classnames';

export default function Card(props: any) {
	const { label, price, sale } = props;
	const headingId = useId()
	const priceid = useId()
	const saleId = useId()

	return (
		<article aria-labelledby={`${headingId} ${priceid} ${saleId}`} className={s.card}>
			<img className={s.img} src={cat} alt={label} />
			<h2 id={headingId}>{label}</h2>
			<span className={s.priceWrap}>
				{sale && <span className={s.sale} >{`${sale}$`}</span>}
				{sale && <span id={saleId} className={s['visually-hidden']}>{`Новая цена ${sale}$`}</span>}

				<span className={classNames(s.price, sale && s.priceOff)} >{`${price}$`}</span>
				<span id={priceid} className={s['visually-hidden']}>{sale ? `Старая цена ${price}$` : `${price}$`}</span>

			</span>
			<div className={s.actions}>
				<button className={s['buy-button']} type='button'>Купить</button>
				<WishlistButton alt='Добавить в список желаний' />
			</div>
		</article>
	)
}
