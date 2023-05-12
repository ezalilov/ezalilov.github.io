import React from 'react'
import s from './modal.module.css'
import Input from '../components/input/input'

export default function Modal() {
	return (
		<div className={s.modal}>

			<form>
				<h2>Коврик для кота</h2>
				<p>Оформление заказа</p>


				{/* <label htmlFor="input-name">Имя и фамилия</label>
		<input id='input-name' type='text' required /> */}
				<Input label="Имя и фамилия" error="error" />

			</form>
		</div>
	)
}
