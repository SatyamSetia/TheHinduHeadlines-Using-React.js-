import React from 'react';

const HeadlineDetails = ({headline, onNewsSelect}) => {
	const imageUrl = headline.urlToImage;

	return (
		<li onClick={()=>onNewsSelect(headline)} className="list-group-item">
			<div className="media">
				<div className="media-left">
					<img className="news-image" src={imageUrl}/>
				</div>
				<div className="media-body">
					{headline.title.substr(0,40)+"..."}
				</div>
			</div>
		</li>
		);
}

export default HeadlineDetails;