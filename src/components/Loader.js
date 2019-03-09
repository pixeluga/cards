import React from 'react';
import loading from '../loading.gif';

export default class Loader extends React.Component {
    render () {
        return (
            <div className = 'loader'>
                <img
                    alt = ''
                    height = '32px'
                    src = { loading }
                    width = '32px'
                />
                <span>Loading...</span>
            </div>
        );
    }
}
