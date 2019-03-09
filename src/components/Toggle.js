import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = {
    root: {
        display: 'flex',
        padding: '10px',
    },
    formControl: {
        margin: 'auto',
    },
};

class Toggle extends React.Component {
    state = {
        newTemplate: this.props.template,
    };

    _updateNewTemp = (value) => {
        const { _updateTemp } = this.props;

        _updateTemp(value);
    };

    handleChange = (event) => {
        this.setState({ newTemplate: event.target.value });
        this._updateNewTemp(event.target.value);
    };

    render () {
        const { classes } = this.props;

        return (
            <div className = { classes.root }>
                <FormControl className = { classes.formControl } component = 'fieldset'>
                    <FormLabel component = 'legend'>Select display type</FormLabel>
                    <RadioGroup
                        row
                        aria-label = 'Select display type'
                        className = { classes.group }
                        name = 'template'
                        value = { this.state.newTemplate }
                        onChange = { this.handleChange }>

                        <FormControlLabel control = { <Radio /> } label = '1' value = 'temp1' />
                        <FormControlLabel control = { <Radio /> } label = '2' value = 'temp2' />
                        <FormControlLabel control = { <Radio /> } label = '3' value = 'temp3' />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

Toggle.propTypes = {
    _updateTemp: PropTypes.func.isRequired,
    classes:     PropTypes.object.isRequired,
};

export default withStyles(styles)(Toggle);
