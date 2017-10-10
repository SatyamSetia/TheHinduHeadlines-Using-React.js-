import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import News from './components/news';
import HeadlinesList from './components/headlines_list';

const API_KEY = YOUR_API_KEY;

class App extends Component {

	constructor(props){
		super(props);
		//this.selectSortingType = this.selectSortingType.bind(this);
		this.changeSorting = this.changeSorting.bind(this);
		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		this.state = {
			headlines: [],
			selectedNews: null,
			sortBy: 'Top',
			date: date
		}
		this.fetchTopHeadlines();
	}

	fetchTopHeadlines() {
		axios.get(`https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=${API_KEY}`).then((topHeadlines) => {
			console.log(topHeadlines);	
			this.setState({headlines: topHeadlines.data.articles, selectedNews: topHeadlines.data.articles[0]});	
		}).catch((error) => {
			console.log(error);
		});
	}

	fetchLatestHeadlines() {
		axios.get(`https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=${API_KEY}`).then((latestHeadlines) => {
			console.log(latestHeadlines);
			this.setState({headlines: latestHeadlines.data.articles, selectedNews: latestHeadlines.data.articles[0]})
		}).catch((error) => {
			console.log(error);
		})
	}

	changeSorting() {
		if(this.state.sortBy=='Top'){
			this.setState({sortBy: 'Latest'},()=>{
			this.fetchLatestHeadlines();});
		}else{
			this.setState({sortBy: 'Top'},()=>{
			this.fetchTopHeadlines();});
		}
	}
	

	render() {
		return (
			<div>
				<div className="header col-md-12">
					<h1>THE HINDU HEADLINES</h1>
					<span className="date">{this.state.date}</span>
				</div>
				<div className="col-md-4">
					<button onClick={this.changeSorting} className="btn btn-secondary button">Showing {this.state.sortBy} Headlines</button>
					<HeadlinesList headlines={this.state.headlines} onNewsSelect={selectedNews => {this.setState({selectedNews})}}/>
				</div>
				<div className="col-md-8">
					<News newsToShow={this.state.selectedNews}/>
				</div>
			</div>
			);
	}
}

ReactDOM.render(<App/>,document.querySelector('.container'));