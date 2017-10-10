import React from 'react';
import HeadlineDetails from './headline_details';

const HeadlinesList = (props) => {
	const headlinesList = props.headlines.map((headline,index) => {
		return <HeadlineDetails
			onNewsSelect = {props.onNewsSelect}
			headline={headline}
			key={index}
			/>
	})

	return (
		<div className="well sidebar-nav">
			<ul className="list-group nav">
				{headlinesList}
			</ul>
		</div>
		);
}

export default HeadlinesList;