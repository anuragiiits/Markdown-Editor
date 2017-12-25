import React, {Component} from 'react';
import Account from './accounts';

class Header extends Component{

    onBinsClicked(event){
        event.preventDefault();

        Meteor.call('bins.insert');
    }
    
    render(){
        return(
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand">Markbin</a>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <a><Account /></a>
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinsClicked.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default Header;