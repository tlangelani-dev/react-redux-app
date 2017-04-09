import React from 'react';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Red Dice</a>
                    </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
