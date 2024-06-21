import React, { Component } from 'react';
import '../styles/FactureList.css';

class FactureList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            factures: JSON.parse(localStorage.getItem('factures')) || [],
            showModal: false,
            selectedFacture: null
        };
    }

    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    showDetails = (index) => {
        const facture = this.state.factures[index];
        this.setState({
            selectedFacture: facture
        });
        this.toggleModal();
    }

    deleteFacture = (index) => {
        const updatedFactures = [...this.state.factures];
        updatedFactures.splice(index, 1);
        localStorage.setItem('factures', JSON.stringify(updatedFactures));
        this.setState({ factures: updatedFactures });
    }

    render() {
        return (
            <div className="FactureList">
                <h2>Liste des factures</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Client</th>
                            <th>Montant HT</th>
                            <th>Montant TVA</th>
                            <th>Montant TTC</th>
                            <th>Détails de Facture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.factures.map((facture, index) => (
                            <tr key={index}>
                                <td>{facture.id_facture}</td>
                                <td>{facture.client}</td>
                                <td>{facture.montantHT}€</td>
                                <td>{facture.montantTVA}€</td>
                                <td>{facture.montantTTC}€</td>
                                <td>
                                    <button onClick={() => this.showDetails(index)}>Voir détails</button>
                                    <button onClick={() => this.deleteFacture(index)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={this.toggleModal}>&times;</span>
                            <h3>Détails de la Facture</h3>
                            {this.state.selectedFacture && (
                                <div>
                                    <p>ID: {this.state.selectedFacture.id_facture}</p>
                                    <p>Client: {this.state.selectedFacture.client}</p>
                                    <p>Montant HT: {this.state.selectedFacture.montantHT}€</p>
                                    <p>Montant TVA: {this.state.selectedFacture.montantTVA}€</p>
                                    <p>Montant TTC: {this.state.selectedFacture.montantTTC}€</p>
                                    <h4>Articles:</h4>
                                    <ul>
                                        {this.state.selectedFacture.articles.map((article, index) => (
                                            <li key={index}>
                                                {article.nom} - Prix: {article.prix}€ - Quantité: {article.quantite}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default FactureList;
