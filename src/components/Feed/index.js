// Core
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Components
import Loader from '../Loader';
import OneCard from '../OneCard';

// Instruments
import { sortByGroup } from '../../instruments';

const styles = (theme) => ({
    layout: {
        width:                                                     'auto',
        marginLeft:                                                theme.spacing.unit * 3,
        marginRight:                                               theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width:       1100,
            marginLeft:  'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
});

function Album (props) {

    if (!props.cards) {
        return (
            <Loader />
        );
    }

    if (props.cards.length === 0) {
        return (
            <div>
                <center>Empty</center>
            </div>
        );
    }

    const { classes, cards, type } = props;

    return (
        <main>
            <div className = { classNames(classes.layout, classes.cardGrid) }>
                <Grid container spacing = { 40 }>
                    {sortByGroup(type, cards).map((card) => (
                        <OneCard
                            card = { card }
                            key = { card.id }
                            template = { props.template }
                        />
                    ))}
                </Grid>
            </div>
        </main>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
