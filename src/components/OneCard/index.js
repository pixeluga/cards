// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

function Album (props) {
    const { classes } = props;
    const card = props;

    const price = props.price ? props.price : null;
    const area = props.area ? props.area : null;
    const fullAddress = props.full_address ? props.full_address : null;
    const description = props.description ? props.description : null;

    return (
        <Grid item key = { card.id } lg = { 3 } md = { 4 } sm = { 6 }>
            <Card className = { classes.card }>
                <CardMedia
                    className = { classes.cardMedia }
                    image = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' // eslint-disable-line max-len
                    title = 'Image title'
                />
                <CardContent className = { classes.cardContent }>
                    <Typography
                        gutterBottom
                        component = 'h2'
                        variant = 'h5'>
                        {fullAddress}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
