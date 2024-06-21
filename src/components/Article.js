import React, { Component } from 'react';
import '../styles/Article.css';

class Article extends Component {
    render() {
        const { article, quantite, prix, remise, montant } = this.props;
        return (
            <div className="Article">
                <div className="article-info">
                    <span>{article}</span>
                    <span>{quantite} x {prix}€</span>
                    <span>Remise: {remise}%</span>
                    <span>Montant: {montant}€</span>
                </div>
                <div className="actions">
                    <button>Supprimer</button>
                </div>
            </div>
        );
    }
}

export default Article;
