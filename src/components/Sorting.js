// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    sortingButtons: {
        margin:       'auto',
        padding:      '10px',
        'text-align': 'center',
    },
    button: {
        margin: '5px',
    },
};

class Sorting extends React.Component {
    _updateNewSort = (event) => {
        const { _updateSorting, type } = this.props;

        if (type === event) {
            const rev = event.split('').reverse().join('');

            _updateSorting(rev);
        } else {
            _updateSorting(event);
        }

    };

    handleChange = (event) => {
        this._updateNewSort(event.target.textContent);
    };

    render () {
        const { classes } = this.props;

        return (
            <div className = { classes.sortingButtons }>
                <span>Sort by:</span>
                <Button
                    className = { classes.button }
                    color = 'primary'
                    label = 'price'
                    variant = 'contained'
                    onClick = { this.handleChange }>
            price
                </Button>
                <Button
                    className = { classes.button }
                    color = 'primary'
                    variant = 'contained'
                    onClick = { this.handleChange }>
            rating
                </Button>
            </div>
        );
    }
}

Sorting.propTypes = {
    _updateSorting: PropTypes.func.isRequired,
    classes:        PropTypes.object.isRequired,
};

export default withStyles(styles)(Sorting);
