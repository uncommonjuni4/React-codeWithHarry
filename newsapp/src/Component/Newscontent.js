import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Newscontent extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: false
    };
  }

  async componentDidMount() {
    let url = "https://newsdata.io/api/1/latest?country=pk&category=Sports&apikey=pub_111f5ab5e24547d88feb395ff85a6c7b";
    let data = await fetch(url);
    let paraseData = await data.json();
    
    this.setState({ results: paraseData.results });
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>Monkey News - Top Headlines</h1>
        <div className="row">
         
          { this.state.results.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.link}>
                <NewsItem 
                  title={element.title ? element.title.slice(0, 45) : ""} 
                  description={element.description ? element.description.slice(0, 88) : ""} 
                  imageUrl={element.image_url} 
                  newsUrl={element.link} 
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Newscontent;