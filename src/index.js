import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import News from './components/news';
import HeadlinesList from './components/headlines_list';

const API_KEY = 'a3b23e329a664ab4886afc6d24822b21';

class App extends Component {
	constructor(props){
		super(props);
		this.selectSortingType = this.selectSortingType.bind(this);
		this.changeSorting = this.changeSorting.bind(this);
		this.state = {
			headlines: [],
			selectedNews: null,
			sortBy: 'top'
		}
		this.selectSortingType();
	}

	fetchTopHeadlines() {
		axios.get('https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=a3b23e329a664ab4886afc6d24822b21').then((topHeadlines) => {
			console.log(topHeadlines);	
			this.setState({headlines: topHeadlines.data.articles, selectedNews: topHeadlines.data.articles[0]});	
		}).catch((error) => {
			console.log(error);
		});
	}

	fetchLatestHeadlines() {
		axios.get('https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=a3b23e329a664ab4886afc6d24822b21').then((latestHeadlines) => {
			console.log(latestHeadlines);
			this.setState({headlines: latestHeadlines.data.articles, selectedNews: latestHeadlines.data.articles[0]})
		}).catch((error) => {
			console.log(error);
		})
	}

	selectSortingType() {
		if(this.state.sortBy=='top'){
			this.fetchTopHeadlines();
		}else{
			this.fetchLatestHeadlines();
		}
	}

	changeSorting() {
		if(this.state.sortBy=='top'){
			this.setState({sortBy: 'latest'});
		}else{
			this.setState({sortBy: 'top'});
		}
		this.selectSortingType();
	}
	

	render() {
		return (
			<div>
				<div className="header">
					<h1>THE HINDU HEADLINES</h1>
					<button onClick={this.changeSorting} className="button">Sort Again</button>
				</div>
				<HeadlinesList headlines={this.state.headlines} onNewsSelect={selectedNews => {this.setState({selectedNews})}}/>
				<News newsToShow={this.state.selectedNews}/>
			</div>
			);
	}
}

ReactDOM.render(<App/>,document.querySelector('.container'));