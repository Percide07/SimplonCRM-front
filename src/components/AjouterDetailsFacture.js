import React, { Component } from 'react';
import '../styles/AjouterDetailsFacture.css';

class AjouterDetailsFacture extends Component {
constructor(props) {
    super(props);
    this.state = {
        clients: [],
        selectedClientId: '',
        client: '',
        date: '',
        articles: []
    };
}

componentDidMount() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    this.setState({ clients });
}

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

handleAddArticle = (nom, prix, quantite) => {
    const article = { nom, prix, quantite };
    this.setState(prevState => ({
        articles: [...prevState.articles, article]
    }));
}

handleCreateFacture = () => {
    if (this.state.articles.length === 0 || this.state.client === '' || this.state.date === '') {
        alert("Veuillez remplir tous les champs avant de créer la facture");
    return;
    }

    const newFacture = {
        id_facture: Date.now(),
        client: this.state.client,
        date: this.state.date,
        articles: this.state.articles,
        montantHT: this.calculateHT(),
        montantTVA: this.calculateTVA(),
        montantTTC: this.calculateTTC()
    };

    const factures = JSON.parse(localStorage.getItem('factures')) || [];
    factures.push(newFacture);
    localStorage.setItem('factures', JSON.stringify(factures));

    this.setState({ client: '', date: '', articles: [] });
}

calculateHT = () => {
    return this.state.articles.reduce((total, article) => total + (article.prix * article.quantite), 0);
}

calculateTVA = () => {
    return this.calculateHT() * 0.20;
}

calculateTTC = () => {
    return this.calculateHT() + this.calculateTVA();
}

render() {
    const isDisabled = this.state.articles.length === 0 || this.state.client === '' || this.state.date === '';

    return (
    <div className="AjouterDetailsFacture">
        <h2>Ajouter Détails Facture</h2>
        <form>
        <div className="form-group">
            <label>Client :</label>
            <select name="client" value={this.state.client} onChange={this.handleChange}>
            <option value="">Sélectionner un client</option>
            {this.state.clients.map(client => (
                <option key={client.id} value={client.nom}>{client.nom}</option>
            ))}
            </select>
        </div>
        <div className="form-group">
            <label>Date :</label>
            <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
            />
        </div>
        </form>
        <div className="buttons">
            <button onClick={() => this.handleAddArticle('Article 1', 10, 1)}>
            Ajouter Article 1
            </button>
            <button onClick={() => this.handleAddArticle('Article 2', 15, 1)}>
            Ajouter Article 2
            </button>
            <button onClick={() => this.handleAddArticle('Article 3', 6, 1)}>
            Ajouter Article 3
            </button>
            <button onClick={() => this.handleAddArticle('Article 4', 20, 1)}>
            Ajouter Article 4
            </button>
            <button onClick={this.handleCreateFacture} disabled={isDisabled}>
            Créer Facture
            </button>
        </div>
        <div className="articles-list">
            <h3>Articles</h3>
            <ul>
                {this.state.articles.map((article, index) => (
                <li key={index}>
                {article.nom} - Prix: {article.prix} - Quantité: {article.quantite}
                </li>
            ))}
            </ul>
        </div>
        <div className="montants">
            <p>Montant HT: {this.calculateHT()}</p>
            <p>Montant TVA: {this.calculateTVA()}</p>
            <p>Montant TTC: {this.calculateTTC()}</p>
        </div>
    </div>
    );
}
}

export default AjouterDetailsFacture;
