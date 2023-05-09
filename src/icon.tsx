import React from 'react'

export default function Icon(props: any) {
	const { icon = '', ...rest } = props;

  return (
	<span 

		{ ...rest }
		dangerouslySetInnerHTML={ { __html: icon } }
	/>
  )
}
