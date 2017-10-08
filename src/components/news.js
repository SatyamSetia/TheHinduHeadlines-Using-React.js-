import React from 'react';

const News = ({newsToShow}) => {
	if(!newsToShow){
		return <div>Loading...</div>
	}

	return (
		<div className="col-md-8">
			<h1 className="news-title text-justify"><b>{newsToShow.title}</b></h1>
			<p>By <b>{newsToShow.author}</b></p>
			<img className="image" src={newsToShow.urlToImage}/>
			<div className="description text-justify">{newsToShow.description}... <a href={newsToShow.url}>Click here</a> to read the full news.</div>
		</div>
		);
}

export default News;