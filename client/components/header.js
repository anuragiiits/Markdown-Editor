import React, {Component} from 'react';
import Account from './accounts';
import {Link} from 'react-router-dom';

class Header extends Component{

    onBinsClicked(event){
        event.preventDefault();

        Meteor.call('bins.insert',(error, binId)=>{
            //console.log(this.props.history);//.push(`bins/${binId}`);
            this.props.history.push(`/bins/${binId}`);
        });
    }
    
    render(){
        //console.log(this.props);
        return(
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">Markbin</Link>
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