// Core
import React, { Component } from 'react';

// Components
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';

export default class OneCard extends Component {

    render () {
        const props = this.props;

        const template = this.props.template ? this.props.template : null;

        const templateCard = template === 'temp2' ?
            <Template2 card = { props.card } /> :
            template === 'temp3' ?
                <Template3 card = { props.card } /> :
                <Template1 card = { props.card } />;

        return (
            <>
                { templateCard }
            </>
        );
    }
}
