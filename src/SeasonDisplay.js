import React from 'react';

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return 'Kemarau'
	} else {
		return 'Hujan'
	}
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth())

	return (
		<div>
			{season === 'Kemarau' ? 'Panas Cuy' : 'Hujan, bawa payung!'}
		</div>
	)
}

export default SeasonDisplay

