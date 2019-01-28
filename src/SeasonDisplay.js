import './SeasonDisplay.css'

import React from 'react';

const seasonConfig = {
	dry: {
		text: 'Panas Cuy!',
		iconName: 'sun'
	},
	rainy: {
		text: 'Hujan, bawa payung!',
		iconName: 'tint'
	}
}

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return 'dry'
	} else {
		return 'rainy'
	}
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth())
	const {text, iconName} =  seasonConfig[season]

	return (
		<div className={`season-display ${season}`}>
			<i className={`massive ${iconName} icon icon-left`} />
			<h1>{text}</h1>
			<i className={`massive ${iconName} icon icon-right`} />
		</div>
	)
}

export default SeasonDisplay

