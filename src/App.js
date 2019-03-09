import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import Loader from './components/Loader';
import Toggle from './components/Toggle';
import Sorting from './components/Sorting';
import Feed from './components/Feed';

class App extends Component {
    state = {
        cardsArray:  [],
        isFetching:  false,
        template:    'temp1',
        sortingType: '',

    };

    componentDidMount () {
        this._fetchCards();
    }

    _updateTemp = (temp) => {
        this.setState({ template: temp });
    };
    _updateSorting = (type) => {
        this.setState({ sortingType: type });
    };

    _setFetchingState = (state) => {
        this.setState({
            isFetching: state,
        });
    };

    _fetchCards = async () => {
        this._setFetchingState(true);

        const response = await fetch('http://demo4452328.mockable.io/properties');

        const { data: cardsArray } = await response.json();

        this.setState({
            cardsArray,
        });

        this._setFetchingState(false);
    };

    render () {
        const toRender = this.state.isFetching ? <Loader /> :
        <>
            <Toggle
                _updateTemp = { this._updateTemp }
                template = { this.state.template }
            />
            <Sorting
                _updateSorting = { this._updateSorting }
                type = { this.state.sortingType }
            />
            <Feed
                cards = { this.state.cardsArray }
                template = { this.state.template }
                type = { this.state.sortingType }
            />
        </>;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className = 'App'>
                    <header className = 'App-header'>
                        <img alt = 'logo' className = 'App-logo' src = { logo } />
                    Test App
                    </header>

                    {toRender}

                </div>
            </React.Fragment>
        );
    }
}

export default App;
