import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreerFacture from './CreerFacture';
import FactureList from './FactureList';
import AjouterClient from './AjouterClient';
import '../styles/App.css';

function App() {
    return (
        <Router>
            <div className="container">
                <header className="header">
                    <h1>SimplonCRM</h1>
                </header>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Liste des Factures</Link>
                        </li>
                        <li>
                            <Link to="/creer-facture">Créer Facture</Link>
                        </li>
                        <li>
                            <Link to="/ajouter-client">Ajouter Client</Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<FactureList />} />
                        <Route path="/creer-facture" element={<CreerFacture />} />
                        <Route path="/ajouter-client" element={<AjouterClient />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
