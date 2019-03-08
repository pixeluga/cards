// Core
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Components
import OneCard from '../OneCard';

// Instruments
import { data } from '../../instruments/book';

const styles = (theme) => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin:   '0 auto',
        padding:  `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
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
    card: {
        height:        '100%',
        display:       'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding:         theme.spacing.unit * 6,
    },
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const cards = data;

function Album (props) {
    const { classes } = props;

    console.log(cards);

    return (
        <main>
            <div className = { classes.heroUnit }>
                <div className = { classes.heroContent }>
                    <Typography
                        gutterBottom
                        align = 'center'
                        color = 'textPrimary'
                        component = 'h1'
                        variant = 'h2'>
              Cards List
                    </Typography>
                </div>
            </div>

            <div className = { classNames(classes.layout, classes.cardGrid) }>
                <Grid container spacing = { 40 }>
                    {cards.map((card) => (
                        <OneCard
                            key = { card.id }
                            { ...card }
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
