import React, { Component } from 'react';
import Article from './Article';
import '../styles/ArticleList.css';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    handleAddArticle = (article) => {
        this.setState(prevState => ({
            articles: [...prevState.articles, article]
        }));
    }

    render() {
        return (
            <div className="ArticleList">
                {this.state.articles.map((article, index) => (
                    <div key={index} className="article">
                        <Article {...article} />
                    </div>
                ))}
            </div>
        );
    }
}

export default ArticleList;
