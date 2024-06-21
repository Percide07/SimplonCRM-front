import React, { Component } from 'react';
import '../styles/DetailsFacture.css'

class DetailsFacture extends Component {
    render() {
        const { articles } = this.props;
        return (
            <div>
                {articles.map((article, index) => (
                    <div key={index}>
                        <p>{article.article} - {article.quantite} x {article.prix}€ - Remise: {article.remise}% - Montant: <span>{article.montant}€</span></p>
                    </div>
                ))}
            </div>
        );
    }
}

export default DetailsFacture;
