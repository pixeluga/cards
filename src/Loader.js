import React from 'react';
import loading from '../loading.gif';

class Loader extends React.Component {
    render () {
        return (
            <div>
                <img
                    alt = ''
                    height = '32px'
                    src = { loading }
                    width = '32px'
                />
                <span>Завантаження {this.props.title}...</span>
            </div>
        );
    }
}

export default Loader;
