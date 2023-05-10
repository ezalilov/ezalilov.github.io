import React from 'react'
import s from './skiplink.module.css'

export default function Skiplink() {
  return (
	<a id='skip-nav' className={ s['screenreader-text'] } href='#main-content'>
      К основному контенту
    </a>
  )
}
