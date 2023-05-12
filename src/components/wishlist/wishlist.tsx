import React from 'react'
import s from './wishlist.module.css'
import heart from '../../assets/svg/heart.svg'

export interface WishlistProps {
	alt: string
	title?: string
}

export default function WishlistButton(props: WishlistProps) {
	const { alt, title } = props;
	return (
		<button {...props} className={ s.button } type='button'>
				<img src={ heart } alt={ alt } title={ title } />
			</button>
	)
}
