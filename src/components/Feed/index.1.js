// Core
import React, { Component } from 'react';

// Components
import OneCard from '../OneCard';

// Instruments
import { data } from '../../instruments/book';
import { sortCasesByGroup } from '../../instruments';
// import { api } from '../../REST';

export default class Feed extends Component {
    state = {
        cards: [],
    }

    // componentDidMount () {
    //     this._fetchCardsAsync();
    // }

    // _fetchTasksAsync = async () => {
    //     this._setFetchingState(true);

    //     // const cards = await api.fetchTasks();

    //     // this.setState({
    //     //     cards,
    //     // });

    //     this._setFetchingState(false);
    // };

    render () {
        const cards = data;

        const cardsJSX = cards.map((card) => {
            return (
                <OneCard
                    key = { card.id }
                    { ...card }
                />
            );
        });

        return (
            <div className = 'inner'>
            iiii
                {cardsJSX}
            </div>
        );
    }
}
