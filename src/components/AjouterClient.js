import React, { Component } from 'react';
import '../styles/AjouterClient.css';

class AjouterClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            adresse: '',
            telephone: '',
            email: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        const { nom, adresse, telephone, email } = this.state;
        const client = { nom, adresse, telephone, email };
        
        const clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.push(client);
        localStorage.setItem('clients', JSON.stringify(clients));

        this.setState({ nom: '', adresse: '', telephone: '', email: '' });
    }

    render() {
        return (
            <div className="AjouterClient">
                <form>
                    <label>Nom</label>
                    <input 
                        type="text" 
                        name="nom" 
                        placeholder="Nom" 
                        value={this.state.nom} 
                        onChange={this.handleChange} 
                    />
                    <label>Adresse</label>
                    <input 
                        type="text" 
                        name="adresse" 
                        placeholder="Adresse" 
                        value={this.state.adresse} 
                        onChange={this.handleChange} 
                    />
                    <label>Téléphone</label>
                    <input 
                        type="text" 
                        name="telephone" 
                        placeholder="Téléphone" 
                        value={this.state.telephone} 
                        onChange={this.handleChange} 
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                    <div className="buttons">
                        <button onClick={this.handleSubmit}>Ajouter Client</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AjouterClient;
