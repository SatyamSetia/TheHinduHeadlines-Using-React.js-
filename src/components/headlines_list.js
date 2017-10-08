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
			<ul className="col-md-4 list-group nav">
				{headlinesList}
			</ul>
		</div>
		);
}

export default HeadlinesList;