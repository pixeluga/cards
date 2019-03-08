import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import Feed from './components/Feed';

class App extends Component {
    render () {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className = 'App'>
                    <header className = 'App-header'>
                        <img alt = 'logo' className = 'App-logo' src = { logo } />
                    Test App
                    </header>

                    <Feed />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
