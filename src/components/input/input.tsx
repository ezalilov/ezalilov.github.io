import React, { useId } from 'react'
import s from './input.module.css'


export default function Input(props: any) {
	const {
		label,
		error,

	} = props;
	const id = useId();
	return (
		<div className={s['input-item']}>
			<label htmlFor={id}> {label}</label>
			<input {...props} className={s.input} id={id} type='text' required />
			{error && <span id={id} className={s.error}>{error}</span>}
		</div>
	)
}
