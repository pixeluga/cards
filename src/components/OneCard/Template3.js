// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-currency-format';

// Components
import Images from './Images';

const styles = {
    card: {
        height:        '100%',
        display:       'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContentPrice: {
        'margin-bottom': '-65px',
        'z-index':       '1000000000000000',
    },
    cardContentPriceSpan: {
        color:              'white',
        'margin-top':       '10px',
        padding:            '3px',
        'background-color': '#55595c',
    },
};

function Template3 (props) {
    const { classes, card } = props;

    const price = card.price ? card.price : 0;
    const area = card.area ? `${card.area} sq. fr.` : null;
    const description = card.description ? card.description : null;
    const fullAddress = card.full_address ? card.full_address : null;
    const images = card.images ? card.images : null;

    return (
        <Grid item key = { card.id } lg = { 3 } md = { 4 } sm = { 6 }>
            <Card className = { classes.card }>
                <CardContent>
                    <Typography
                        component = 'span'>
                        {fullAddress}
                    </Typography>
                </CardContent>

                <CardContent className = { classes.cardContentPrice }>
                    <Typography
                        component = 'p'
                        variant = 'subtitle1'>
                        <NumberFormat
                            thousandSeparator
                            className = { classes.cardContentPriceSpan }
                            displayType = { 'text' }
                            prefix = { '$' }
                            value = { price }
                        />
                    </Typography>
                </CardContent>

                <Images images = { images } />

                <CardContent>
                    <Typography>
                        {area}
                    </Typography>
                    <Typography
                        component = 'p'>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

Template3.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template3);
