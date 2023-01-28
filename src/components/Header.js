import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1 className='heading'>{this.props.heading}</h1>
                <p className='tagline'>{this.props.tagline}</p>
            </div>
        );
    }
};

export default Header;