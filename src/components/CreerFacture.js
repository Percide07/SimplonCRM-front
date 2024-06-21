import React, { Component } from 'react';
import AjouterDetailsFacture from './AjouterDetailsFacture';
import ArticleList from './ArticleList';
import '../styles/CreerFacture.css';

class CreerFacture extends Component {
    render() {
        return (
            <div className="CreerFacture">
                <h2>Créer une nouvelle facture</h2>
                <AjouterDetailsFacture />
                <ArticleList />
            </div>
        );
    }
}

export default CreerFacture;
