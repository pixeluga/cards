// Core
import React, { Component } from 'react';
import classnames from 'classnames';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

export default class OneCard extends Component {

    render () {
        const props = this.props;

        const price = this.props.price ? this.props.price : null;
        const area = this.props.area ? this.props.area : null;
        const fullAddress = this.props.full_address ? this.props.full_address : null;

        const { classes } = props;

        return (
            <Card className = { classes.card }>
                <CardMedia
                    className = { classes.media }
                    image = '/static/images/cards/contemplative-reptile.jpg'
                    title = 'Contemplative Reptile'
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        component = 'h2'
                        variant = 'h5'>
                Lizard
                    </Typography>
                    <Typography component = 'p'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
