import React, { useId } from 'react'
import cat from '../assets/cat.png'
import s from './card.module.css'
import WishlistButton from '../components/wishlist/wishlist';

export default function Card(props: any) {
  const { label, price } = props;
  const headingId = useId()
  return (
    <section aria-labelledby={ headingId } className={s.card}>
      <img className={ s.img } src={cat} alt={label} />
      <h2 id={ headingId }>{label}</h2>
      <span>{price}</span>
      <div className={s.actions}>

        <button className={s['buy-button']} type='button'>Купить</button>
        <WishlistButton alt='Добавить в список желаний' />
      </div>
    </section>
  )
}
